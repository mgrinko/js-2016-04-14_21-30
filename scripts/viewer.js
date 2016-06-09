'use strict';

const CLASSES = {
  hidden: 'js-hidden'
};

class Viewer {
  constructor(options) {
    this._el = options.element;

  }

  hide() {
    this._el.classList.add(CLASSES.hidden);
  }

  show() {
    this._el.classList.remove(CLASSES.hidden);
  }

  render(details) {
    alert(details);
  }
}