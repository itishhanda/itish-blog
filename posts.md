---
layout: default
title: Posts
permalink: /posts/
---

<h1>All Posts</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-full-content">
      <h2>{{ post.title }}</h2>
      <div class="post-date">{{ post.date | date: '%B %d, %Y' }}</div>
      <div class="post-content">
        {{ post.content }}
      </div>
    </li>
  {% endfor %}
</ul>
