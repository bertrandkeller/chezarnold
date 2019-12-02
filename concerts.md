---
title: Concerts
navigation: Concerts
description: Les concerts du groupe Arnold, passés et à venir.
layout: page
---

{% assign concerts =  site.data.concerts.concerts | sort:'concertdate' %}
{% capture year %}{{ site.time | date: '%Y' }}{% endcapture %}
{% capture nextyear %}{{ year | plus:'1'  }}{% endcapture %}
{% for concert in concerts reversed %}
  {% capture previousyear %}{{ concert.concertdate | date: '%Y' }}{% endcapture %}
  {% if nextyear == previousyear %}
<h2 class="date">{{ nextyear }}</h2>
      {% capture nextyear %}0{% endcapture %}
  {% endif %}
  {% if year == previousyear %}
      {% capture year %}{{ year | minus:'1' }}{% endcapture %}
<h2 class="date">{{ concert.concertdate | date: "%Y" }}</h2>
  {% endif %}
<span><strong>{{ concert.concertdate | date: "%-d" }} {% include mois.html page=concert.concertdate %} {{ concert.concertdate | date: "%Y" }}
</strong> - {{ concert.lieu }}{% if concert.lien %} - <a href="{{ concert.lien }}" rel="noreferrer">liens</a>{% endif %}</span>
{% endfor %}
