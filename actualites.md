---
title: Les actualités d'Arnold
navigation: Actualités
---

{% for post in site.posts %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.content }}
{% if post.videos %}
{% for video in post.videos %}
<iframe width="1200" height="600" src="https://www.youtube.com/embed/{{ video.url }}" frameborder="0" allowfullscreen data-basicLightbox data-id="1"></iframe>
<br><a href="#" class="button button--success" data-show-id="1">Voir le clip de {{ video.nom }}</a>
{% endfor %}

<link rel="stylesheet" href="/assets/css//basicLightbox.min.css">
<script src="/assets/js//basicLightbox.min.js"></script>
<script>
	const getTargetHTML = function (elem) {

		const id = elem.getAttribute('data-show-id')
		const target = document.querySelector(`[data-id="${id}"]`)

		return target.outerHTML

	}

	Array.prototype.forEach.call(document.querySelectorAll('[data-show-id]'), function (elem) {

		const html = getTargetHTML(elem)

		elem.onclick = basicLightbox.create(html).show

	})

</script>
    
{% endif %}
{% endfor %}