---
layout: documentation
lang: en
hide_hero: false
hero_image: "slide_17_image_2.jpg"
hero_darken: true
image: "slide_17_image_2.jpg"
component_toc: true
doc_header: true
type: concept
tag: additive-manufacturing

title: Introduction to 3D printing
subtitle: Overview & history
description: An introduction to 3D printing and its history
author: Adrien Bracq

time: 3
difficulty: 1

prerequisites:
  - label: No prerequisites
    link: ""

todo: 90
---

{% include message.html title="Information" message="This page is the written version of the lecture on additive manufacturing. The matching slides: [Part 1: introduction to 3D printing](/workshops/fab-additive/slides/introduction-impression-3d/)." status="is-info" icon="fas fa-info-circle" %}

## What is 3D printing?

3D printing, also known as **additive manufacturing**, is an automated manufacturing process for creating three-dimensional objects. Unlike traditional subtractive manufacturing methods, such as milling, which removes material, 3D printing works by adding material layer by layer. This principle offers great flexibility and makes it possible to produce complex parts with high precision.

**The advantages of additive manufacturing:**

- **Production flexibility**: It can produce complex geometric shapes, often impossible to obtain with conventional methods.
- **Material efficiency**: By adding only the material needed, this method minimises waste.
- **Adaptability**: Ideal for rapid prototyping and small series.

**The main 3D printing processes:**

In its early days, 3D printing was characterised by two main processes:

1. **FDM (Fused Deposition Modeling)**: This method uses a molten plastic filament, deposited by a heated nozzle to form each layer.
2. **SLA (Stereolithography Apparatus)**: Here, a liquid photosensitive resin is solidified layer by layer with UV or laser light, allowing very high levels of detail.

These two techniques, although they have evolved, remain at the heart of modern 3D printing technologies and suit different industrial and personal needs.

## History

### Origins and early developments (1970-1980)

- **1974**: The concept of 3D printing is introduced by **David E. H. Jones** in a scientific article.  
- **1981**: **Hideo Kodama**, a Japanese researcher, invents a rapid prototyping method based on photopolymer resins.  
- **1984**: **Charles Hull** files the first patent for stereolithography (SLA), a method that uses a laser to solidify liquid resins.  
  - **Carl Deckard** and Dr **Joe Beaman** develop selective laser sintering (SLS) technology, which fuses powder particles to form objects layer by layer.

### The forgotten pioneers of 3D printing

- **The French pioneers**:  
  - **Jean-Claude André**, **Alain le Méhauté** and **Olivier de Witte** develop, in 1984, a method similar to stereolithography (SLA).  
  - Their company, **CILAS Alcatel**, judges the invention to have no commercial potential and abandons the patent.

- **Consequences**:  
  - In **1986**, **Charles Hull** files the SLA patent in the United States, becoming the "father of 3D printing".  
  - France loses a major strategic opportunity.

### Commercialisation and technical progress (1986-1990)

- **1986**: **Charles Hull** founds **3D Systems** and markets the first 3D printer based on SLA technology.  
- **1988**:  
  - **FDM (Fused Deposition Modeling)** technology is developed by **Scott Crump**, co-founder of Stratasys.  
  - **Carl Deckard** files a patent for the SLS process, fusing powdered materials (nylon, metals).  
- **1989**: **Stratasys** files the patent for the FDM process.

![Slide 9 Image](slide_9_image_2.jpg)

### Diversification of technologies (1990-2000)

- **1992**: **DTM Corporation**, co-founded by **Carl Deckard**, markets the first industrial printer based on **SLS** technology.  
  - This printer is mainly used for rapid prototyping in sectors such as automotive and aerospace.

- **2001**: **3D Systems** buys **DTM Corporation** and adds **SLS** technology to its portfolio, making this technology more popular still in industry.

- New technologies appear, such as **PolyJet**, developed by **Objet Geometries**, which uses inkjets to deposit photopolymer materials.

- In this period, 3D printing is still mainly used in industry for **rapid prototyping**.

### Examples of machines in the early 2000s

{% include step-tuto.html
greyBackground = true
content="**3D Systems SLA 5000**

Introduced in the early 2000s, this stereolithography machine offered high precision for industrial applications."
image="slide_11_image_1.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**EOSINT P 700**

Released in 2004, this SLS (Selective Laser Sintering) printer made it possible to produce polymer parts for a variety of uses"
image="slide_11_image_3.jpg" %}

---

## Patents & open source

### Patents: how they work

A patent is an essential legal tool for protecting inventions. It is an **intellectual property right** that gives its holder a **temporary monopoly on exploitation**, forbidding others from making, using or selling the invention without permission.

For an invention to qualify for a patent, it must meet three fundamental criteria:

1. **New**: The invention must be original and must not have been disclosed to the public before.  
2. **Inventive**: It must represent a technical advance over what already exists.  
3. **Applicable**: The invention must be reproducible industrially.

In general, a patent is valid for **20 years**, provided the annual fees are paid. Once this period has passed, the invention enters the **public domain**, allowing anyone to use it freely.

---

### Open source: how it works

Unlike patents, the open-source approach rests on a philosophy of **sharing and collaboration**. Open-source creations are freely accessible, allowing anyone to use, modify and improve them. This philosophy encourages the rapid spread of technologies and makes access to them more universal.

Open source has several **major advantages**:

- It **speeds up innovation** by encouraging collaboration between varied contributors.  
- It **reduces costs** for end users, making technologies more accessible.  
- It **democratises knowledge** by making technology available to as many people as possible.

Some companies, such as **Prusa Research**, show that it is possible to combine patents and open source. By protecting some parts of their innovations while sharing others with the community, they strike a balance between commercial protection and collaborative contribution.

---

### Expiry of the patents (2000 – 2009)

The expiry of the patents on 3D printing technologies marked a decisive turning point in the history of additive manufacturing, paving the way for rapid democratisation and an explosion of innovation.

In **2000**, the first patents on **FDM (Fused Deposition Modeling)** technology expire. This allows new low-cost 3D printers to emerge, making the technology accessible to many more manufacturers and users.

A key moment of this period is the launch, in **2005**, of the **RepRap project**. Initiated by **Adrian Bowyer**, this open-source project aims to develop a 3D printer able to partially self-replicate, that is, to print some of its own components. This revolutionary approach popularises 3D printing among communities of makers and enthusiastic hobbyists.

In **2009**, the complete expiry of the FDM patents accelerates this momentum further. Manufacturers can now produce and sell 3D printers at competitive prices. This context encourages the creation of new models accessible to the general public and considerably widens the possible applications of 3D printing, for individuals as well as for small businesses.

This period is often regarded as the golden age of the democratisation of 3D printing, laying the foundations of the ecosystem we know today.

---

## The open-source era

### The RepRap project

In **2005**, **Adrian Bowyer**, a lecturer at the University of Bath in the United Kingdom, launches the **RepRap project** (Replicating Rapid Prototyper). Its goal is ambitious: to develop a 3D printer able to self-replicate, that is, to produce some of its own components. This revolutionary idea rests on an **open-source** approach, in which hardware and software are freely accessible and can be modified and reproduced.

The first model to come out of this project, named **Darwin**, appears in **2007**. The RepRap project marks a turning point in the history of 3D printing by making the technology **more affordable and accessible** to all. By releasing the plans and the source code, it becomes the catalyst of a real technological revolution, paving the way for more democratic manufacturing.

{% include image-row.html
image_1 = "slide_17_image_2.jpg"
image_2 = "image.jpg"
%}

### A political message

The **RepRap** project is not just a technological advance: it carries a strong **political and social vision**, articulated by its creator, **Adrian Bowyer**. Through the development of a self-replicating printer, Bowyer proposes an unconventional revolution, which he calls "**Darwinian Marxism**":

> _"The self-copying rapid-prototyping machine will allow the revolutionary ownership, by the proletariat, of the means of production. But it will do so without all that messy and dangerous revolution stuff, and even without all that messy and dangerous industrial stuff."_  
> Adrian Bowyer

This statement illustrates Bowyer's ambition: to give as many people as possible the chance to take part in manufacturing, without relying on traditional, costly or centralised structures. RepRap is thus much more than a tool: it is a powerful idea that redefines the relationship between innovation, production and society.

---

### Key points of the RepRap message

1. **Empowerment**:  
   The main aim of the RepRap project is to **democratise the means of production**, by putting in everyone's hands the ability to make objects and tools without depending on large industries. This autonomy allows individuals, makers or local communities to meet their own needs, while reducing their dependence on traditional production channels.

2. **Criticism of centralised systems**:  
   The current industrial model relies on large companies and centralised infrastructure. RepRap offers an alternative by **bypassing industrial monopolies** and redistributing the means of production to individuals and small communities. This vision follows a decentralised logic, in which manufacturing becomes collaborative and accessible.

3. **Ideological vision**:  
   Bowyer describes the RepRap project as an example of "**peaceful Marxism**". Unlike historical revolutions marked by violence and industrial upheaval, RepRap promotes a gentle, collaborative transformation. By bringing together technology and open source, it fosters emancipation through knowledge and shared innovation, without confrontation.

4. **Ultimate goal**:  
   RepRap seeks to establish a **circular, local economy**, in which tools and knowledge are shared, thereby minimising waste and strengthening self-sufficiency. This model encourages responsible consumption and production matched to real needs, far from the excesses of mass production.

5. **Nature of what is produced**:  
   The RepRap printer is not designed to produce industrial parts only. It encourages the making of **everyday tools** and customised objects, fostering creativity and practical problem-solving. Whether technical components or everyday objects, RepRap puts innovation within everyone's reach.

---

### A revolution through sharing

By putting technology at the service of individuals, the RepRap project offers a **break with traditional models of production and consumption**. Far from hierarchical industrial systems, it provides a **collaborative, sustainable** framework in which everyone can take part in manufacturing. This paradigm rests on a decentralised, open-source approach, where knowledge is shared and innovation is accessible to all.

Thanks to its visionary character, RepRap continues to inspire communities around the world. It proves that technology and ideology can combine to build a fairer future, in which additive manufacturing becomes a driver of autonomy, creativity and solidarity.

---

### RepRap Family Tree

The evolution of the **RepRap** project did not stop with the initial **Darwin** model. Since its creation, the project has given rise to a multitude of variants and improvements, forming what is called the **"RepRap Family Tree"**. This diagram, available on [reprap.org](https://reprap.org/wiki/RepRap_Family_Tree), shows the countless forks and variants that came into being thanks to the commitment of the worldwide community.

These forks embody the **open-source**, collaborative spirit of RepRap, allowing enthusiasts and companies to add their contributions. Among the best-known descendants are printers such as the **Mendel** (2009), the **Prusa Mendel** (2011) and later the **Prusa i3**, which became a benchmark in the field. Each fork introduced specific improvements: lower manufacturing cost, higher precision or simpler assembly.

Today, the RepRap Family Tree keeps growing, with derived printers suited to varied needs: from specialised machines for high-precision printing, such as delta models, to rugged printers for industrial environments. This profusion reflects the lasting impact of the RepRap project, which turned 3D printing into an accessible, collaborative and constantly evolving technology.

{% include image-row.html
image_1 = "slide_21_image_1.jpg"
image_2 = "slide_21_image_3.png"
%}

--

### A few printers derived from the RepRap project

{% include step-tuto.html
greyBackground = true
content="**Darwin (2007)**  

The Darwin model, developed by Adrian Bowyer, is the first open-source, self-replicating 3D printer of the RepRap project. It makes real the vision of a machine able to make some of its own components, paving the way for many forks and innovations."
image="image-1.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**Mendel (2009)**  

The Mendel model brings a more compact, stable structure, making assembly easier and improving print quality. This design quickly becomes a standard in the RepRap community, thanks to its balance between performance and simplicity."
image="image-2.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**Prusa Mendel (2011)**  

Designed by Josef Prusa, this version simplifies the design by reducing the number of parts and the manufacturing cost, making 3D printing even more accessible. It becomes the basis for many later variants."
image="image-3.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**Rostock (2012)**  

The Rostock is the first delta-type RepRap printer. It uses three arms to move the print head, offering high speed and precision, particularly suited to tall, cylindrical objects."
image="image-4.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**Prusa I3 (2017)**  

This version introduces a one-piece frame, increasing rigidity and simplifying assembly. The Prusa I3 becomes one of the most popular models, known for its reliability and print quality."
image="image-5.jpg" %}

### The forgotten printers

{% include step-tuto.html
greyBackground = true
content="**RepRap Morgan**  

The RepRap Morgan is an innovative RepRap printer with a unique design based on an articulated arm mechanism. This architecture reduces manufacturing costs while offering acceptable precision for personal projects."
image="slide_27_image_1.jpg" %}

{% include step-tuto.html
greyBackground = true
content="**RepRap Simpson**  

The RepRap Simpson adopts an unconventional design with a spherical structure, doing away with the traditional Cartesian axes. It is highly experimental and illustrates the spirit of innovation and technical exploration typical of the RepRap community."
image="slide_27_image_2.jpg" %}

---

## Popularisation: the consumer era

### Consumer growth and popularisation (2010-2020)

The expiry of the patents on **FDM** technology in **2009** paved the way for a rapid democratisation of 3D printing. It allowed many manufacturers to bring printers to market at competitive prices, making the technology accessible to the general public.

- **Greater accessibility**: Machines become simpler to use, with intuitive interfaces and plug-and-play systems suited to beginners.  
- **Explosion of models**: A wide range of 3D printers appeared, suited to hobbyists as well as small businesses.

---

### MakerBot

**A revolution for the general public:**

Founded in **2009** by **Bre Pettis**, **Adam Mayer** and **Zach "Hoeken" Smith**, MakerBot is directly inspired by the RepRap project. The company plays a key role in the democratisation of 3D printing thanks to innovative products:

- **Thing-O-Matic (2010)**: One of the first affordable 3D printers for the general public.  
- **Replicator (2012)**: A reliable, user-friendly printer with a closed housing and an LCD screen, making it easier to use.

{% include image-row.html
image_1="slide_31_image_2.jpg"
image_2="slide_31_image_3.jpg"
image_3="slide_31_image_4.jpg"
%}

**Selling the "revolution":**

MakerBot brilliantly exploited the idea of a **technological revolution**, positioning itself as the company that would make 3D printing accessible to all. Through bold marketing, the company captured the public's attention, popularising the idea that anyone could create and make things at home thanks to this innovative technology.

However, in **2013**, MakerBot made a **controversial strategic shift** by abandoning its open-source model in favour of a proprietary one. This decision, driven by ambitions of profitability and expansion into the professional and education markets, caused a **loss of trust within the community** that had initially supported the brand. Users reproached MakerBot for turning its back on its founding ideals of sharing and collaboration.

This repositioning also coincided with the acquisition of the company by **Stratasys**, which reinforced the perception of a purely commercial turn. In the long run, these decisions weakened the brand. The combination of an eroding community base, growing competition in the consumer market and questionable strategic choices led to the **near disappearance of MakerBot as a leader in the sector**.

Today, MakerBot is largely eclipsed by other players such as Prusa or Creality, which have better met users' expectations through a more open, collaborative approach.

![MakerBot - Selling the revolution](slide_32_image_2.jpg)

### Ultimaker

**A benchmark in 3D printing**

Founded in **2011** in the Netherlands, **Ultimaker** established itself as a major player in 3D printing thanks to its initial commitment to open source. The brand won over hobbyists and professionals alike with reliable, capable printers.

- **Ultimaker Original (2011)**: An open-source kit, easy to assemble, designed for makers.  
- **Ultimaker 2 (2013)**: A pre-assembled printer, renowned for its reliability and precision.  
- **Ultimaker S5 (2018)**: Aimed at the professional market, it offers dual extrusion and a large build volume.

Despite its initial commitment to open source, Ultimaker gradually moved to a proprietary model from the Ultimaker 2 onwards, targeting professional markets more.

{% include image-row.html
image_1="slide_33_image_2.png"
image_2="slide_34_image_1.jpg"
image_3="slide_34_image_2.png"
%}

**The two brands come together**

In **May 2022**, **MakerBot** and **Ultimaker** announced their merger to form a new entity: **UltiMaker**. This merger, completed in September 2022, aims to accelerate the worldwide adoption of additive manufacturing by combining their respective strengths.

- **Structure**: Stratasys keeps a minority stake, while **NPM Capital** becomes the main shareholder.  
- **Impact**: This merger illustrates the growing consolidation of the 3D printing market, where pioneering brands join forces to face increased competition.

![The brands come together](slide_35_image_2.jpg)

---

### Print The Legend

**A revealing documentary**

The documentary **Print The Legend**, produced by Netflix, explores the early days of 3D printing through the paths of start-ups such as **MakerBot** and **Formlabs**, as well as established players such as **Stratasys** and **3D Systems**.

**Themes covered**:  

- **Technological innovation**: The challenges and opportunities of an emerging industry.  
- **Entrepreneurial rivalries**: The tensions between visionaries and business strategies.  
- **Societal and ethical impact**: 3D printing as a lever for industrial and societal change.

This documentary highlights the hopes and disappointments tied to this revolutionary technology, while underlining its implications for the future.

![Print The Legend](slide_36_image_2.jpg)

---

### Creality

**Democratising 3D printing**

Created in **2014** in China, **Creality** quickly established itself as a key player in the low-cost FDM printer market. Thanks to a large community of modders and accessible machines, it played a key role in the democratisation of DIY 3D printing.

- **CR-10 (2016)**: The first affordable large-format printer.  
- **Ender-3 (2018)**: An extremely popular model, valued for its price-to-quality ratio and reliability.  

Creality attracted a broad user base, from beginners to enthusiasts, while offering upgradable machines.

{% include image-row.html
image_1="slide_37_image_2.png"
image_2="slide_38_image_1.jpg"
image_3="slide_38_image_3.png"
%}

---

### Prusa

**The DNA of RepRap**

Founded in **2012** by **Josef Prusa** in the Czech Republic, Prusa Research has established itself as a leader in 3D printing. True to its roots in the RepRap project, the brand made history with innovative models:

- **Prusa i3 (2012)**: A benchmark for modularity and quality.  
- **Prusa MK2 (2016)**: The first printer with automatic axis calibration and a multi-zone heated bed.  
- **Prusa XL (2022)**: A large CoreXY printer, designed for professional use.

Prusa remains faithful to open source with major contributions such as **PrusaSlicer** and its commitment to the maker community. However, the introduction of proprietary components (for example the electronic boards of the Prusa XL) reflects an attempt to reconcile innovation and commercial protection.

![Prusa – The DNA of RepRap](slide_39_image_2.png)

**Production**

Prusa Research uses a 3D printer farm to produce the parts of its own machines. In **2021**, this farm had more than **600 printers**, contributing to the shipping of **114,000 printers** over the year.

![Prusa Farm](slide_41_image_2.jpg)

**Prusa – Still open source?**

Although still committed to open source, Prusa has had to deal with tensions:  

- **Initial commitment (2012)**: Sharing of plans, firmware and software, in particular with **PrusaSlicer**.  
- **Proprietary components**: Some recent innovations, such as the Prusa XL, include non-open-source elements to guard against counterfeits.  

Prusa tries to stay true to its ideals while evolving to meet commercial and competitive constraints.

![Prusa – Open Source](slide_42_image_2.jpg)

---

### Bambu Lab

**Printing for the mass market, but proprietary**

Bambu Lab is a company founded by four engineers in 2020, based in Shenzhen, China. They launch a Kickstarter campaign in **2022** to fund their first machine, the **Bambu Lab X1**. They raise 7 million dollars for this desktop 3D printer. Since then, Bambu Lab has become a leading player in 3D printing and has expanded its range: A1, A1 mini, P1P, H2D, H3C... Its machines have a reputation for being reliable, fast and easy to use.

![Bambu Lab](slide_43_image_1.png){:style="max-width: 150px;"}

They also develop **AMS** (Automatic Material System) units for multicolour/multi-material printing, as well as software dedicated to different uses:

- **Bambu Studio**: Bambu Lab's dedicated slicer, based on PrusaSlicer, under the AGPLv3 licence, but distributed with a proprietary network module
- **MakerWorld**: a library for sharing 3D models
- **Bambu Handy**: a mobile application for managing Bambu Lab printers remotely and printing files from MakerWorld

{% include image-row.html
image_1="slide_44_image_1.png"
image_2="slide_44_image_2.png"
image_3="slide_44_image_3.jpg"
%}

**Controversies**

Although it has become a reference in the field, the company faces some criticism, in particular from the open-source community, for several reasons:

- **Cloud dependence**: in August 2023, Bambu Cloud suffers an outage that causes failures on some machines, starts random prints on its own, or prevents printing altogether on others.
- **Data security**: several security flaws have been reported over the years. Plain-text logs sent to the servers, lack of isolation for highly confidential companies, questions about how the Bambu Lab cloud handles data, and so on.
- **Threat to the free and open-source communities**: in May 2026, Bambu Lab sends a cease-and-desist letter to Paweł Jarczak, an independent developer, demanding that he take down *OrcaSlicer-bambulab*. This fork of OrcaSlicer made it possible to drive Bambu Lab printers (sending and monitoring prints through the cloud) without going through Bambu Studio or Bambu Connect, the intermediary software imposed by the brand. The company invokes its terms of use and accuses the developer of reverse-engineering its proprietary code. He withdraws his project "under protest".

Yet the affair backfires on Bambu Lab. Bambu Studio is a derivative of PrusaSlicer, itself derived from Slic3r, all under the **AGPLv3** licence. This licence allows the code to be reused, including commercially, provided that derived software is published under the same licence with its source code. The **Software Freedom Conservancy** (SFC), a free software advocacy organisation, points out two violations of the licence:

- Bambu Studio is distributed with a proprietary network library whose code is not published. It is precisely this library that locks down communication with the printers.
- Bambu Lab forbade the developer from modifying and redistributing AGPL code.

Faced with the outcry (Louis Rossmann, Jeff Geerling, Gamers Nexus…), Bambu Lab backs down and speaks of a misunderstanding. The SFC then launches the **Baltobu** project, funded by a fundraiser that exceeded $250,000. It has three goals: to reverse-engineer the network library, to maintain a fork of OrcaSlicer compatible with Bambu machines, and to develop *Viscose*, a free fork of Bambu Studio (<a href="https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/" target="_blank">SFC article</a>).

---

## How costs have changed

3D printing, once a cutting-edge technology reserved for laboratories and large companies, has gradually become a solution accessible to the general public. This democratisation went hand in hand with a significant drop in costs, made possible by technological advances, increased competition and mass production.

In the early **2010s**, personal 3D printers were still rare and expensive. The average price often exceeded **€2,000**, which limited their adoption to enthusiasts or professionals with substantial budgets. However, initiatives such as the **RepRap** project, focused on open source and DIY manufacturing, started a change by offering models that were simpler to build and much cheaper.

In **2012**, printers such as the **Prusa i3**, inspired by the RepRap project, and MakerBot's **Replicator** marked a decisive turning point. These more capable, more accessible models helped lay the foundations of a fast-growing market. They combined modularity, reliability and a lower cost, appealing to a wider audience, from makers to small businesses.

From **2014**, the arrival of new brands, particularly in China, brought an even more drastic drop in costs. Printers such as the **Creality CR-10** appeared, priced below **€1,000**. This period marked the beginning of accessibility for the general public, making 3D printing attractive to hobbyists as well as teachers and designers.

In **2020**, models such as the **Creality Ender 3** pushed the limits of accessibility even further. Sold for between **€200 and €500**, this printer made 3D printing not only affordable but also reliable and capable, meeting the expectations of many users. This attractive price contributed to massive adoption of the technology, turning 3D printing into an everyday tool for many individuals and small organisations.

Finally, in **2022**, the global 3D printer market was valued at **15.1 billion dollars**, with annual growth of **15%** forecast until 2032. This expansion is fuelled by constant innovation in processes, materials and software, as well as by increased competition between manufacturers. In **2026**, this market is now estimated at **26.22 billion dollars**.

### What drove costs down

Several factors helped make 3D printing more accessible:

- **Technological advances**: Progress in printing processes, such as automatic calibration, and better materials, such as PLA or PETG, increased printer performance while reducing costs.
- **Increased competition**: The growing number of manufacturers, particularly in Asia, intensified competition, driving prices down and products continuously up in quality.
- **Mass production**: Higher production volumes and optimised supply chains reduced unit costs, making 3D printers more affordable for consumers.

### A technology for everyone

This change in costs allowed 3D printing to leave the industrial setting and become a tool widely adopted by individuals, schools and small businesses. By democratising a technology that was once elitist, the 3D printing industry keeps pushing the limits of innovation, while making this revolution accessible to all.

---

## The hype cycle

### A key dynamic in the rise of 3D printers

The **trough of disillusionment**, or more precisely Gartner's **"Hype Cycle"**, is a conceptual model describing the stages an emerging technology goes through, from its introduction to its maturity and widespread adoption. Conceptualised by the technology consultancy Gartner in the 1990s, this model has become an essential tool for understanding the life cycles of innovations.

The Hype Cycle illustrates the **gap between initial expectations and the reality of putting a technology into practice**, helping companies and decision-makers avoid decisions based on unrealistic expectations. It shows how exaggerated promises can lead to disillusionment, before the technology finally reaches a balance between its real capabilities and its concrete applications.

### The 5 key stages of the Hype Cycle

1. **Technology Trigger**:  
   A new technology is introduced, generating initial interest. At this stage, concrete products are rare, but the promising prospects attract the attention of the media and innovators.

2. **Peak of Inflated Expectations**:  
   Expectations reach an outsized peak, often fed by spectacular media announcements and unrealistic promises. Companies and the public expect major transformations in record time.

3. **Trough of Disillusionment**:  
   Reality catches up with the technology. Technical limitations, failed implementations and unforeseen costs dampen enthusiasm. Many companies give up their ambitions or revise their strategies.

4. **Slope of Enlightenment**:  
   A realistic understanding of the technology emerges. Concrete use cases multiply and solutions become more practical and reliable.

5. **Plateau of Productivity**:  
   The technology reaches maturity. It is widely adopted in specific sectors and becomes profitable, with concrete, well-established applications.

### Applied to 3D printing

![Hype Cycle of 3D printing](slide_48_image_3.png)

The hype cycle fits the evolution of 3D printing perfectly; it has followed this model through some striking phases:

1. **Technology Trigger (1980s)**:  
   The first 3D printing technologies, such as **stereolithography (SLA)** and **fused deposition modelling (FDM)**, are introduced. These innovations arouse interest in industrial niches, but remain expensive and complex.

2. **Peak of Inflated Expectations (2010s)**:  
   3D printing is presented as an **immediate industrial revolution**, with promises such as making everything at home. Media expectations are outsized, fuelling an often unrealistic enthusiasm.

3. **Trough of Disillusionment (mid-2010s)**:  
   The limits of the technology become apparent:  
   - High cost of printers and materials.  
   - Complexity of use for the general public.  
   - Slow print speed and limited choice of materials.  
   These realities cool the initial enthusiasm, and many companies scale back their ambitions.

4. **Slope of Enlightenment (2020 and beyond)**:  
   Concrete use cases develop:  
   - Rapid prototyping for industry.  
   - Medical applications such as custom implants.  
   - Manufacture of specific parts in aerospace and automotive.  
   3D printing becomes a practical tool for targeted industrial needs.

5. **Plateau of Productivity (today)**:  
   In some sectors, such as prototyping or medicine, 3D printing has become a mature, profitable technology. However, other uses, in particular home manufacturing, are still in the development phase.

### Final thoughts

The **hype cycle** is a reminder that every technology goes through phases of enthusiasm and scepticism before finding its true potential. For 3D printing, this journey is still under way, with tangible successes in some areas and challenges still to be met in others. This trajectory highlights the importance of a realistic vision in order to maximise the impact of technological innovations.

## HackerSpace, MakerSpace, FabLab and the Internet

### A key dynamic in the rise of 3D printers

The emergence of **third places** such as **HackerSpaces**, **MakerSpaces** and **FabLabs** played a crucial role in the democratisation of 3D printers. These collaborative spaces, somewhere between home and work, fostered creativity, innovation and collective projects, allowing thousands of people to experiment with technologies that were once out of reach.

### New third places appear

The first **HackerSpaces** appeared in the 1990s, followed by **FabLabs** in the 2000s and **MakerSpaces** in the 2010s. These places, rooted in the maker community, combine collaboration and technology to offer spaces for sharing knowledge and for digital fabrication.

![Third places](slide_51_image_2.jpg)

### HackerSpace

**HackerSpaces** were born in the 1990s within hacker communities. These places for experimenting with technology make it possible to explore software, hardware and networks.

- **Origin**: Appeared in the 1990s.  
- **Philosophy**: A culture of freedom, often focused on open source, computer security and modified electronics.  
- **Aim**: To allow free technological experimentation.  
- **Equipment**: 3D printers, electronics tools, servers and hardware hacking tools.

### FabLab – Learn, Make, Share

**FabLabs** (Fabrication Laboratories) are digital fabrication workshops open to the public. Created in 2001 by **Neil Gershenfeld** at **MIT**, they democratise access to technologies such as 3D printing and laser cutting.

- **Philosophy**: Sharing and collaboration, following a charter focused on education and innovation.  
- **Equipment**: 3D printers, laser cutters, CNC milling machines and electronics tools.  
- **Aim**: To make digital fabrication technologies accessible to all.  

### MakerSpace

**MakerSpaces**, which appeared in the early 2010s, are aimed at a wider audience, including hobbyists, students and professionals. These flexible spaces, centred on creativity and DIY (Do It Yourself), let people tinker and innovate in various fields.

- **Philosophy**: More flexible than FabLabs, oriented towards creativity rather than strictly digital production.  
- **Equipment**: Similar to FabLabs, often with craft, sewing, woodworking equipment and so on.  
- **Aim**: To make collaboration and innovation easier for varied projects.

### Impact on 3D printing

**Third places** transformed access to 3D printing by democratising the technology and stimulating innovation.

1. **Access to the technology**: Before FabLabs, 3D printers were expensive and hard to use. These spaces allowed a wide audience to discover and experiment with the technology.  
2. **Innovation and rapid prototyping**: The 3D printers in FabLabs became key tools for testing ideas without heavy investment.  
3. **Community and education**: These places encourage knowledge sharing through workshops and training open to all.  
4. **Evolution of the machines**: Feedback from users in these spaces influenced the development of more modular, affordable 3D printers. DIY and open-source projects such as RepRap benefited directly from this dynamic.

### The Internet: the digital catalyst

**Evolution and impact:**

Since the 1980s, the evolution of computing and the Internet has played a fundamental role in the democratisation of the technologies related to 3D printing.

- **1980s**: Birth of the personal computer, making 3D modelling more accessible.  
- **1990s**: Explosion of the Internet, allowing files, knowledge and projects to be shared worldwide.  
- **2000s**: Launch of platforms such as Thingiverse and GitHub, offering plans and tools accessible to all.

**A key dynamic:**

The Internet accelerated the sharing of files and knowledge, connecting digital and maker communities. FabLabs and MakerSpaces, although physically rooted, rely on this digital ecosystem to spread and enrich their practices.

---

## Today: between personal and professional

### Personal printing – the DIY revolution

With affordable printers such as the Ender-3 or the Prusa Mini, 3D printing has become an everyday tool for many hobbyists. Online platforms such as Thingiverse offer easy access to files for creating, customising or repairing objects.

**Limits**: Personal printers remain limited by their small build volumes and by materials often restricted to plastics (PLA, ABS and so on).

### Professional printing – an industrial revolution

Technological advances (SLS, SLA, industrial FDM) have paved the way for varied professional applications, such as rapid prototyping in automotive and aerospace or the custom manufacture of prostheses and medical implants.

**Limits**: These machines remain expensive and require specific technical skills.

**Towards a hybrid future**

The boundaries between personal and professional printing are gradually fading, thanks to affordable semi-professional printers and innovative materials. The outlook includes advances in bioprinting, space exploration and sustainability.

### The RepRap project: goal achieved?

The RepRap project aimed to democratise manufacturing by allowing everyone to produce objects with self-replicating printers. While this goal has been partly achieved, questions remain about the real autonomy of users and the impact of the trend towards proprietary business models.
