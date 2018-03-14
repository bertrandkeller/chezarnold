---
title: Les actualités d'Arnold
permalink: '/actualites/'
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
