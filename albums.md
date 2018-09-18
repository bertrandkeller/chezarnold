---
title: Les albums d'Arnold
navigation: Albums
---

{% assign albums = site.albums | sort: 'annee', 'last' %}
<div class="block-album-page">
{% for album in albums reversed %}
<div class="block-album-page__element">
<h2><a href="{{ album.url }}">{{ album.title }} - {{ album.annee }}</a></h2>
<div class="block-album-page__element-int">
{% if site.environment != 'development' %}
{% cloudinary /assets/images/{{ album.title | slugify }}-small.jpg alt="{{album.title}}" %}
{% else %}
<a href="{{ album.url }}"><img src="/assets/images/{{ album.title | slugify }}-small.jpg" alt="{{ album.title }}"></a>
{% endif %}
{% if album.streaming %}
<p><strong>Écoutez notre album en ligne</strong><br>
{% for service in album.streaming %}
  <a href="{{ service.url }}">{{ service.nom }}</a>
{% endfor %}
</p>
{% endif %}
</div>
</div>
{% endfor%}
</div>
