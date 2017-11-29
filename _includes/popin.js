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