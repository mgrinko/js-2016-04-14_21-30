'use strict';

let Filter = require('./filter.js');
let Sorter = require('./sorter.js');
let Catalogue = require('./catalogue.js');
let Viewer = require('./viewer.js');

let phones = require('json!./../server/data/phones.json');

class Page {
  constructor(options) {
    this._el = options.element;

    this._filter = new Filter({
      element: this._el.querySelector('[data-component="filter"]')
    });

    this._sorter = new Sorter({
      element: this._el.querySelector('[data-component="sorter"]')
    });

    this._catalogue = new Catalogue({
      element: this._el.querySelector('[data-component="phoneCatalogue"]')
    });

    this._viewer = new Viewer({
      element: this._el.querySelector('[data-component="phoneViewer"]')
    });

    this._viewer.hide();
    this._catalogue.render( this._getPhones() );

    this._catalogue._el.addEventListener('phoneSelected', this._onPhoneSelected.bind(this));
    this._filter._el.addEventListener('filterChange', this._onFilterChange.bind(this));
  }

  _getPhones(params = {}) {
    let query = params.query && params.query.toLowerCase() || '';

    return phones.filter(function(phone) {
      return phone.name.toLowerCase().indexOf(query) !== -1;
    });
  }

  _onPhoneSelected(event) {
    var phoneDetails = event.detail;

    this._viewer.render(phoneDetails);
  }

  _onFilterChange(event) {
    var filterValue = event.detail;

    this._catalogue.render( this._getPhones({ query: filterValue }) );
  }
}

module.exports = Page;