---
title: Les albums d'Arnold
navigation: Albums
---

{% assign albums = site.albums | sort: 'annee', 'last' %}
{% for album in albums reversed %}
<h2><a href="{{ album.url }}">{{ album.title }}</a> - {{ album.annee }}</h2>
{% if album.streaming %}<p><strong>Écoutez notre album en ligne</strong><br>
{% for service in album.streaming %}
  <a href="{{ service.url }}">{{ service.nom }}</a>
{% endfor %}
</p>{% endif%}
{% endfor%}