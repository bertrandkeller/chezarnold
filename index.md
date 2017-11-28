---
title: accueil
---

<h2>Notre dernière actualité</h2>
<div>
{% for post in site.posts limit:1 %}
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
</div>

<p><a href="/actualites.html">Toutes nos actualités</a></p>

<h2>Nos prochains concerts</h2>
<p>
{% for concert in site.data.concerts %}
{{ concert.date }} - {{ concert.description }}{% if concert.lien %} - <a href="{{ concert.lien }}">liens</a>{% endif %}<br>
{% endfor %}
</p>

<h2>Nos Albums</h2>
<div class="grid">
{% assign albums = site.albums | sort: 'annee', 'first' %}
{% for album in albums reversed %}
<div>
<img src="/assets/images/{{ album.title | slugify }}.jpg">
<a href="{{ album.url }}">{{ album.title }} - {{ album.annee }}</a><br>
</div>
{% endfor %}
</div>

<p><a href="/albums.html">Tous nos albums</a></p>