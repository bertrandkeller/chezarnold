---
title: Concerts
---

{% assign concerts =  site.data.concerts.concerts | sort:'date' %}
{% capture year %}{{ site.time | date: '%Y' }}{% endcapture %}
<h2>{{year | plus: '1'}}</h2>
{% for concert in concerts reversed %}
  {% capture previousyear %}{{ concert.date | date: '%Y' }}{% endcapture %}
  {% if year == previousyear %}
      {% capture year %}{{ year | minus:'1' }}{% endcapture %}
<h2 class="date">{{ concert.date | date: "%Y" }}</h2>
  {% endif %}
<span><strong>{{ concert.date }}</strong> - {{ concert.lieu }}{% if concert.lien %} - <a href="{{ concert.lien }}">liens</a>{% endif %}</span>
{% endfor %}
