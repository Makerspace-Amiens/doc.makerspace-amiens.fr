# frozen_string_literal: true

# Fichiers statiques partagés entre les langues (complément de jekyll-polyglot).
#
# Polyglot construit chaque langue autre que le français dans _site/<lang>/ et y recopie
# par défaut tous les fichiers statiques (images, PDF, modèles 3D...). Le site pèse déjà
# près de 900 Mo : la copie dépasserait la limite de 1 Go de GitHub Pages. Ce plugin :
#
# 1. n'écrit aucun fichier statique dans les builds non français : chaque fichier n'existe
#    qu'une fois, à son URL française ;
# 2. dans le HTML de ces builds, réécrit les chemins relatifs (`src="hero.png"`,
#    `url('hero.png')`, `href="schema.pdf"`) en chemins absolus vers l'URL française de la
#    page, sinon ils pointeraient vers /en/... où le fichier n'existe pas ;
# 3. retire le préfixe /<lang>/ que polyglot ajoute aux liens `href` absolus vers un fichier
#    (`/workshops/x/plan.pdf` -> `/en/workshops/x/plan.pdf` -> `/workshops/x/plan.pdf`).
#
# Les liens entre pages (`../autre-page/`, `/docs/...`) gardent le préfixe /<lang>/ : toutes
# les pages existent dans toutes les langues (repli sur le français).

module PolyglotSharedFiles
  # Attributs qui chargent un fichier : un chemin relatif y est résolu depuis l'URL de la page.
  SRC_ATTRS = %w[src data-src poster data-background-image data-background-video].freeze

  # Chemin relatif : ni schéma (https:, data:, mailto:), ni //, ni /, ni #, ni ?, ni Liquid.
  RELATIVE = %r{(?![a-zA-Z][a-zA-Z0-9+.\-]*:|//|/|\#|\?|\{)}.freeze

  SRC_REGEX = /(\s(?:#{SRC_ATTRS.join('|')})=)(["'])#{RELATIVE}([^"']+)\2/.freeze
  CSS_URL_REGEX = /url\((["']?)#{RELATIVE}([^"')]+)\1\)/.freeze
  # href relatif vers un fichier (extension autre que .html) : `href="schema.pdf"`.
  REL_FILE_HREF_REGEX = /(\shref=)(["'])#{RELATIVE}([^"'?#]+\.([A-Za-z0-9]{1,5}))(?=["'?#])/.freeze

  module_function

  def active?(site)
    site.respond_to?(:active_lang) && site.active_lang != site.default_lang
  end

  # Dossier de l'URL française d'une page : /docs/x/page/ -> /docs/x/page/ ; /a/b.html -> /a/
  def base_dir(site, doc)
    url = doc.url.to_s
    url = url.end_with?('/') ? url : "#{File.dirname(url).chomp('/')}/"
    "#{site.baseurl}#{url}"
  end

  def file_ext?(ext)
    !%w[html htm].include?(ext.downcase)
  end

  def rewrite(site, doc)
    return if doc.output.nil? || !doc.output_ext.to_s.start_with?('.htm')

    dir = base_dir(site, doc)
    lang = Regexp.escape(site.active_lang)
    prefix = Regexp.escape(site.baseurl.to_s)
    origin = Regexp.escape(site.config['url'].to_s)
    abs_file_href = %r{(\shref=["']?(?:#{origin})?#{prefix})/#{lang}(/[^"'?#\s]*\.([A-Za-z0-9]{1,5}))(?=["'?#\s])}

    out = doc.output
    out = out.gsub(SRC_REGEX) { "#{Regexp.last_match(1)}#{Regexp.last_match(2)}#{dir}#{Regexp.last_match(3)}#{Regexp.last_match(2)}" }
    out = out.gsub(CSS_URL_REGEX) { "url(#{Regexp.last_match(1)}#{dir}#{Regexp.last_match(2)}#{Regexp.last_match(1)})" }
    out = out.gsub(REL_FILE_HREF_REGEX) do
      m = Regexp.last_match
      file_ext?(m[4]) ? "#{m[1]}#{m[2]}#{dir}#{m[3]}" : m[0]
    end
    out = out.gsub(abs_file_href) do
      m = Regexp.last_match
      file_ext?(m[3]) ? "#{m[1]}#{m[2]}" : m[0]
    end
    doc.output = out
  end
end

Jekyll::Hooks.register :site, :post_read, priority: :low do |site|
  # Traductions `<nom>.en.md` : polyglot leur donne le permalink de la version française
  # (/docs/x/nom/), mais Jekyll a déjà mémorisé leur URL d'origine (/docs/x/nom.en/) et
  # c'est elle qui servirait au rendu, aux listes et aux liens. On efface ce cache.
  (site.collections.values.flat_map(&:docs) + site.pages).each do |doc|
    doc.instance_variable_set(:@url, nil) if doc.data['lang'] && doc.data['permalink']
  end

  # 1. Aucun fichier statique dans les builds non français.
  site.static_files.clear if PolyglotSharedFiles.active?(site)
end

# 2 et 3. Réécriture après le rendu, et après la relativisation des liens par polyglot.
Jekyll::Hooks.register :site, :post_render, priority: :low do |site|
  next unless PolyglotSharedFiles.active?(site)

  docs = site.collections.values.flat_map(&:docs) + site.pages
  docs.each { |doc| PolyglotSharedFiles.rewrite(site, doc) }
end
