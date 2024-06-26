---
title: Site officiel
description: Arnold le chanteur
layout: default
---

<div class="wrapper post">
<h1>Actualités</h1>
<div>
{% for post in site.posts limit:1 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{% if post.image != '/assets/images/background-arnold.jpg' %}
{% unless post.image == '' %}
  {% if site.environment != 'development' %}
  {% cloudinary {{ post.image }} alt="{{ post.title }}" loading="lazy" %}
  {% else %}
  <img src="{{ post.image }}" alt="{{ post.title }}">
  {% endif %}
{% endunless %}
{% endif %}
{{ post.content | markdownify }}
{% assign videos = post.videos %}
{% if post.videos %}
<h2>Vidéos</h2>
{% endif %}
{% include video.html %}
{% endfor %}
</div>

<p><a href="/actualite/">Les dernières actualités</a></p>
</div>

<div class="wrapper">
<h2>Albums</h2>
<div class="block-album">
{% assign albums = site.albums | sort: 'annee', 'first' %}
{% for album in albums reversed  %}
<div class="block-album__element">
<a href="{{ album.url }}">
{% if site.environment != 'development' %}
{% cloudinary /assets/images/{{ album.title | slugify }}-small.jpg alt="{{album.title}}" %}
{% else %}
<img src="/assets/images/{{ album.title | slugify }}-small.jpg" alt="{{ album.title }}">
{% endif %}
<h3>{{ album.title }} - {{ album.annee }}</h3>
</a>
</div>
{% endfor %}
</div>

<p><a href="/albums/">Tous les albums</a></p>
</div>

<div class="block-timeline">
<div class="wrapper">
<h2>Concerts</h2>
<p>
  {% assign concerts = site.data.concerts.concerts | sort:'concertdate'%}
	{% for concert in concerts %}
	{% assign sitetime = site.time | date: "%s" %}
	{% assign concertdate = concert.concertdate | date: "%s" %}
	{% if concertdate > sitetime %}
<time class="date" datetime="{{ concert.concertdate | date: "%Y-%m-%d" }}">{{ concert.concertdate }}</time> - {{ concert.lieu }}{% if concert.lien %} - <a href="{{ concert.lien }}">Infos</a>{% endif %}<br>
	{% endif %}
	{% endfor %}
</p>
<p><a href="/concerts/">Tous les concerts</a></p>
</div>
</div>
