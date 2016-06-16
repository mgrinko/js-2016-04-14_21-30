'use strict';

class Filter {
  constructor(options) {
    this._el = options.element;
    this._field = this._el.querySelector('[data-element="field"]');

    this._field.addEventListener('input', this._onFieldValueChange.bind(this))
  }
  
  _onFieldValueChange(event) {
    this._triggerFilterChangeEvent( this._field.value );
  }

  _triggerFilterChangeEvent(filterValue) {
    let event = new CustomEvent('filterChange', {
      detail: filterValue
    });

    this._el.dispatchEvent(event);
  }
}