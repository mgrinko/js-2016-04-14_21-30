'use strict';

class Catalogue {
  constructor(options) {
    this._el = options.element;

    this._template = document.getElementById('catalogue-template').innerHTML;
    this._compiledTemplate = _.template(this._template);
  }

  render(phones) {
    this._el.innerHTML = this._compiledTemplate({
      phones: phones
    });
  }

}