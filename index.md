---
title: accueil
layout: default
---

<div class="block-timeline">
<div class="wrapper">
	<h2>Nos concerts</h2>
	<div class="block-timeline__grid">
	{% assign concerts =  site.data.concerts | sort:'date' %}
	{% assign counter = 0 %}
  {% for concert in concerts %}
	{% assign sitetime = site.time | date: "%s" %}
	{% assign concertdate = concert.date | date: "%s" %}
	{% if counter < 2 %}
	{% if concertdate > sitetime %}
	{% assign counter = counter | plus: 1 %}
	<div class="block-timeline__element">
	<p><strong>{{ concert.date }}</strong></p>
	<p>{{ concert.lieu }}{% if concert.lien %}<br><a href="{{ concert.lien }}">liens</a>{% endif %}</p>
	</div>
	{% endif %}
	{% endif %}
	{% endfor %}
	</div>
	<p>
	{% assign counter = 0 %}
	{% for concert in concerts %}
	{% assign sitetime = site.time | date: "%s" %}
	{% assign concertdate = concert.date | date: "%s" %}
	{% if concertdate > sitetime %}
	{% assign counter = counter | plus: 1 %}
	{% if counter > 2 %}
	<strong>{{ concert.date }}</strong> - {{ concert.lieu }}{% if concert.lien %} - <a href="{{ concert.lien }}">liens</a>{% endif %}<br>
	{% endif %}
	{% endif %}
	{% endfor %}
	</p>
	<p>> <a href="/concerts.html">Tous nos concerts</a></p>
</div>
</div>


<div class="wrapper">
<h2>Actualités</h2>
<div>
{% for post in site.posts limit:1 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.content }}
{% assign videos = post.videos %}
{% include video.html %}
{% endfor %}
</div>


<p>> <a href="/actualites.html">Toutes nos actualités</a></p>


<h2>Albums</h2>
<div class="block-album">
{% assign albums = site.albums | sort: 'annee', 'first' %}
{% for album in albums reversed  %}
<div class="block-album__element">
	{% if site.environment != 'development' %}
	{% cloudinary /assets/images/{{ album.title | slugify }}.jpg alt="{{album.title}}" %}
	{% else %}
	<img src="/assets/images/{{ album.title | slugify }}.jpg" alt="{{ album.title }}">
	{% endif %}
	<a href="{{ album.url }}">{{ album.title }} - {{ album.annee }}</a><br>
</div>
{% endfor %}
</div>

<p>> <a href="/albums.html">Tous nos albums</a></p>
</div>