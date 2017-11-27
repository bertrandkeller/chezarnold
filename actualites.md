---
title: Les actualités d'Arnold
navigation: Actualités
---

{% for post in site.posts %}
<h2>{{ post.title }}</h2>
{{ post.content }}
{% endfor%}