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

<style>
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 15px;
  margin-bottom: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
}
.post-list a {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #0366d6;
}
.post-list a:hover {
  text-decoration: underline;
}
.post-date {
  color: #666;
  font-size: 0.9rem;
  margin-left: 10px;
}
</style>
