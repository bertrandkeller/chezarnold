---
title: accueil
---

<h2>Notre dernière actualité</h2>
<div>
{% for post in site.posts limit:1 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.content }}
{% endfor %}
</div>

<p><a href="/actualites.html">Toutes nos actualités</a></p>

<h2>Nos prochains concerts</h2>
<p>
{% for concert in site.data.concerts %}
{{ concert.date }} - {{ concert.description }}{% if concert.lien %} - <a href="{{ concert.lien }}">liens</a>{% endif %}<br>
{% endfor %}
</p>

<h2>Nos Albums</h2>
<p>
{% for album in site.albums %}
<a href="{{ album.url }}">{{ album.title }} - {{ album.annee }}</a><br>
{% endfor %}
</p>

<p><a href="/albums.html">Tous nos albums</a></p>