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
    <small>{{ page.date | date: "%-d %B %Y" }}</small>
    {{ post.excerpt }}
    {% if page.tags %}
      <code>{{ page.tags | join: "</code> - <code>" }}</code>
    {% endif %}
  </article>
{% endfor %}
