---
layout: default
---

# Заметки Москвитина

        <ul>
          {% for post in site.posts %}
          <li>
              <a href="{{ post.url | relative_url }}">{{ post.title }} - {{ post.date | date_to_string }}</a>
              {{ post.excerpt }}
          </li>
          {% endfor %}
      </ul>