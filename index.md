---
layout: default
---

{% for post in site.posts %}

  <article>
  <div class="post-header-wrapper">
    <h2 class="no-margin-bottom">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <span>
    <a class="post-category-link" href="/categories/{{ post.categories | first | slugify }}/">{{ post.categories | first }}</a>
    </span>
  
  </div>
    <small>{{ post.date | date: "%-d %B %Y" }}

    {% if post.tags %}
      <span class="post-tag">{{ post.tags | join: "</span> <span class='post-tag'>" }}</span>
    {% endif %}
    </small>
    {{ post.excerpt }}
  </article>
{% endfor %}
