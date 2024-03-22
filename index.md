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
    variables test: post.category.url: {{post.category.url}}, post.categories: {{post.categories}}, page.category.url: {{page.category.url}}, page.categories: {{page.categories}}
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
