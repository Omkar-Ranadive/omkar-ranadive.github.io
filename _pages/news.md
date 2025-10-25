---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---


{%- for post in site.news reversed -%}
  {%- include archive-single-news.html -%}
  <hr>
{%- endfor -%}

{% include collapse_content.html %}
