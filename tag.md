---
layout: page
title: Tags
subtitle: Browse site by tag
---

<div class="home">
  <p class="post-meta" style="text-align: justify;">
  {% assign tags =  site.devices | map: 'tags' | join: ',' | split: ',' | sort %}
  {% assign previousTag = "" %}
  {% assign counter = 0 %}

  {% for currentTag in tags %}

    {% if previousTag == "" %}
      {% assign previousTag = currentTag %}
    {% endif %}

    {% if currentTag == previousTag %}
      {% assign counter = counter | plus: 1 %}
    {% else %}
      <span style="white-space: nowrap;">
        <a href="{{ site.baseurl }}/tag/{{ previousTag }}" class="tag">{{ previousTag }} ({{ counter }})</a>
      </span>
      {% assign counter = 1 %}
    {% endif %}

    {% if forloop.last %}
      <span style="white-space: nowrap;">
        <a href="{{ site.baseurl }}/tag/{{ currentTag }}" class="tag">{{ currentTag }} ({{ counter }})</a>
      </span>
    {% endif %}

    {% assign previousTag = currentTag %}

  {% endfor %}
  </p>
</div>

<hr>
