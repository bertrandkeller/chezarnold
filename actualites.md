---
title: Les actualités d'Arnold
permalink: '/actualites/'
pagination: 
  enabled: true
  permalink: '/actualites/:num/'
---
<div class="post">
	{% for post in paginator.posts %}
	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	{{ post.content }}
	{% assign videos = post.videos %}
	{% include video.html %}
	{% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<div class="pagination--prevnext">
  {% if paginator.previous_page %}
  <div class="pagination--prev">
    <a class="pagination--item" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Suivant</a>
  </div>
  {% endif %}
  {% if paginator.next_page %}
  <div class="pagination--next">
    <a class="pagination--item" href="{{ paginator.next_page_path | prepend: site.baseurl }}">Précédent</a>
  </div>
  {% endif %}
</div>
{% endif %}