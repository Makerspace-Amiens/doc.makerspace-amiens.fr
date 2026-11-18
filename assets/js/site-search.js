(function () {
  function normalize(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('site-search-input');
    var results = document.getElementById('site-search-results');
    var wrapper = document.getElementById('site-search');
    if (!input || !results || !wrapper) return;

    var index = null;
    var activeIndex = -1;

    function loadIndex() {
      if (index) return Promise.resolve(index);
      return fetch(input.dataset.searchUrl)
        .then(function (res) { return res.json(); })
        .then(function (data) {
          index = data;
          return index;
        })
        .catch(function () {
          index = [];
          return index;
        });
    }

    function renderResults(matches, query) {
      results.innerHTML = '';
      activeIndex = -1;

      if (query === '') {
        wrapper.classList.remove('is-active');
        return;
      }

      if (matches.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'site-search-empty';
        empty.textContent = input.dataset.emptyLabel || 'Aucun résultat.';
        results.appendChild(empty);
        wrapper.classList.add('is-active');
        return;
      }

      matches.slice(0, 8).forEach(function (item) {
        var link = document.createElement('a');
        link.className = 'site-search-item';
        link.href = item.url;
        var title = document.createElement('span');
        title.className = 'site-search-item-title';
        title.textContent = item.title;
        link.appendChild(title);
        if (item.subtitle) {
          var subtitle = document.createElement('span');
          subtitle.className = 'site-search-item-subtitle';
          subtitle.textContent = item.subtitle;
          link.appendChild(subtitle);
        }
        results.appendChild(link);
      });

      wrapper.classList.add('is-active');
    }

    function search(query) {
      var normalizedQuery = normalize(query.trim());
      if (normalizedQuery === '') {
        renderResults([], '');
        return;
      }

      loadIndex().then(function (data) {
        var matches = data.filter(function (item) {
          var haystack = normalize(item.title + ' ' + (item.subtitle || ''));
          return haystack.indexOf(normalizedQuery) !== -1;
        });
        renderResults(matches, normalizedQuery);
      });
    }

    input.addEventListener('input', function () {
      search(input.value);
    });

    input.addEventListener('focus', function () {
      if (input.value.trim() !== '') search(input.value);
    });

    input.addEventListener('keydown', function (e) {
      var items = results.querySelectorAll('.site-search-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, items.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, 0);
      } else if (e.key === 'Enter') {
        if (activeIndex >= 0) {
          e.preventDefault();
          items[activeIndex].click();
        }
        return;
      } else if (e.key === 'Escape') {
        wrapper.classList.remove('is-active');
        return;
      } else {
        return;
      }

      items.forEach(function (el, i) {
        el.classList.toggle('is-active', i === activeIndex);
      });
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    });

    document.addEventListener('click', function (e) {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('is-active');
      }
    });
  });
})();
