---
layout: default
---

{% for post in site.posts %}

  <article>
    <h2 class="no-margin-bottom">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <small>{{ post.date | date: "%-d %B %Y" }}</small>

    {% if post.tags %}
      <span class="post-tag">{{ post.tags | join: "</span> <span class='post-tag'>" }}</span>
    {% endif %}

    {{ post.excerpt }}
  </article>
{% endfor %}
