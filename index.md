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
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.excerpt }}
    {% if page.tags %}
      <em>{{ page.tags | join: "</em> - <em>" }}</em>
    {% endif %}
  </article>
{% endfor %}