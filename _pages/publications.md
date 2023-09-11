---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}


{% include base_path %}

<!-- ## Preprints
{%- for post in site.publications reversed -%}
  {%- include archive-single-publications-preprint.html -%}
{%- endfor -%} -->

## Conference Papers 
{%- for post in site.publications reversed -%}
  {%- include archive-single-publications-conf.html -%}
{%- endfor -%}

## Journal Articles 
{%- for post in site.publications reversed -%}
  {%- include archive-single-publications-journal.html -%}
{%- endfor -%}

## Abstracts
{%- for post in site.publications reversed -%}
  {%- include archive-single-publications-abs.html -%}
{%- endfor -%}

{% include collapse_content.html %}
