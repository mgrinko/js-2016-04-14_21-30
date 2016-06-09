'use strict';

const catalogueTemplate = `
  <ul class="phones">

    <% phones.forEach(function(phone) {%>

      <li class="thumbnail phone-listing">
        <a href="#/phones/<%= phone.id %>" class="thumb">
          <img src="<%= phone.imageUrl %>" alt="<%- phone.name %>">
        </a>
        <a href="#/phones/<%= phone.id %>"><%= phone.name %></a>
        <p><%- phone.snippet %></p>
      </li>

    <% }); %>
  </ul>
`;

class Catalogue {
  constructor(options) {
    this._el = options.element;

  }

}