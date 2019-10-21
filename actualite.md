---
title: Les actualités
permalink: '/actualite/'
description: "Les actualités du groupe Arnold, les concerts, les albums, les vidéos…"
layout: page
pagination:
  enabled: true
  permalink: '/actualites/:num/'
---
<div class="post">
	{% for post in site.posts limit:5 %}
	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	{{ post.content }}
	{% assign videos = post.videos %}
	{% include video.html %}
	{% endfor %}
</div>

<div>
  <a href="/actualites-toutes">Toutes les actualités - archives</a>
</div>
