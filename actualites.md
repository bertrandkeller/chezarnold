---
title: Les actualités d'Arnold
navigation: Actualités
---

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.content }}
{% assign videos = post.videos %}
{% include video.html %}
{% endfor %}