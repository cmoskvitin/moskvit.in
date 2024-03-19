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
    {{ post.excerpt }}
    {% if post.tags %}
      <span class="tag">{{ post.tags | join: "</span> <span class="tag">" }}</span>
    {% endif %}
  </article>
{% endfor %}
