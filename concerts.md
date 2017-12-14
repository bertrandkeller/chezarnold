---
title: Concerts
navigation: Concerts
---

{% assign concerts =  site.data.concerts.concerts | sort:'concertdate' %}
{% capture year %}{{ site.time | date: '%Y' }}{% endcapture %}
<h2>{{year | plus: '1'}}</h2>
{% for concert in concerts reversed %}
  {% capture previousyear %}{{ concert.concertdate | date: '%Y' }}{% endcapture %}
  {% if year == previousyear %}
      {% capture year %}{{ year | minus:'1' }}{% endcapture %}
<h2 class="date">{{ concert.concertdate | date: "%Y" }}</h2>
  {% endif %}
<span><strong>{{ concert.concertdate | date: "%-d" }} {% include mois.html page=concert.concertdate %} {{ concert.concertdate | date: "%Y" }}
</strong> - {{ concert.lieu }}{% if concert.lien %} - <a href="{{ concert.lien }}">liens</a>{% endif %}</span>
{% endfor %}
