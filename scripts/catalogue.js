'use strict';

class Catalogue {
  constructor(options) {
    this._el = options.element;

    this._template = document.getElementById('catalogue-template').innerHTML;
    this._compiledTemplate = _.template(this._template);
    
    this._el.addEventListener('click', this._onPhoneClick.bind(this));
  }

  render(phones) {
    this._el.innerHTML = this._compiledTemplate({
      phones: phones
    });
  }
  
  _onPhoneClick(event) {
    if (!event.target.closest('[data-element="phoneLink"]')) {
      return;
    }

    let phoneContainer = event.target.closest('[data-element="phone"]');

    this._triggerPhoneSelectedEvent( phoneContainer.dataset.phoneId );
  }

  _triggerPhoneSelectedEvent(phoneId) {
    let event = new CustomEvent('phoneSelected', {
      detail: phoneId
    });

    this._el.dispatchEvent(event);
  }

}