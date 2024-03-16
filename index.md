---
layout: default
---

# Заметки Москвитина

  {% for post in site.posts %}
  <article>
    <h2 style="margin-bottom: 0px">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}" style="margin-bottom: 20px">{{ post.date | date_to_long_string }}</time>
    {{ post.excerpt }}
  </article>
{% endfor %}