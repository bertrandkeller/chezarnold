---
title: Les albums
navigation: Albums
description: "Les albums du groupe Arnold: escroc, touriste, la belle, sauvage, amateur professionnel…"
layout: page
---

{% assign albums = site.albums | sort: 'annee', 'last' %}
<div class="block-album-page">
{% for album in albums reversed %}
<div class="block-album-page__element">
  <h2><a href="{{ album.url }}">{{ album.title }}</a> <span class="year">{{ album.annee }}</span></h2>
  <div class="block-album-page__element-int">
  {% if site.environment != 'development' %}
  {% cloudinary /assets/images/{{ album.title | slugify }}-small.jpg alt="{{album.title}}" loading="lazy" %}
  {% else %}
  <a href="{{ album.url }}"><img src="/assets/images/{{ album.title | slugify }}-small.jpg" alt="{{ album.title }}"></a>
  {% endif %}
  {% if album.streaming %}
  <p><strong>Écoutez notre album en ligne</strong><br>
  {% for service in album.streaming %}
    <a href="{{ service.url }}" target="_blank" rel="noopener">{{ service.nom }}</a>
  {% endfor %}
  </p>
  {% endif %}
  </div>
  </div>
{% endfor%}
</div>
