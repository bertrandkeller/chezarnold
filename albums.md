---
title: Les albums d'Arnold
navigation: Albums
---

{% assign albums = site.albums | sort: 'annee', 'last' %}
{% for album in albums reversed %}
<h2>{{ album.title }} - {{ album.annee }}</h2>
<p><strong>Musiciens</strong><br>

	{% for musicien in album.musiciens %}
{{ musicien }}<br>
	{% endfor %}
</p>
{% endfor%}