---
layout: page
title: Tags
subtitle: Browse site by tag
---

<div class="home">
  <p class="post-meta" style="text-align: justify;">
  {% assign tags =  site.devices | map: 'tags' | join: ',' | split: ',' | sort | uniq %}

  {% for tag in tags %}
    <a href="{{ site.baseurl }}/tag/{{ tag }}" class="tag">{{ tag }}</a>
  {% endfor %}
  </p>
</div>

<hr>
