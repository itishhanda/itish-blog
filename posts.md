---
layout: default
title: Posts
permalink: /posts/
---

<h1>Blog Posts</h1>

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: '%B %d, %Y' }}</span>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </li>
  {% endfor %}
</ul>
