'use strict';

let template = document.getElementById('carouselTemplate').innerHTML;

let images1 = [
  'https://js.cx/carousel/1.png',
  'https://js.cx/carousel/2.png',
  'https://js.cx/carousel/3.png',
  'https://js.cx/carousel/4.png',
  'https://js.cx/carousel/5.png',
  'https://js.cx/carousel/6.png',
  'https://js.cx/carousel/7.png',
  'https://js.cx/carousel/8.png',
  'https://js.cx/carousel/9.png',
  'https://js.cx/carousel/10.png'
];

class Carousel {
  constructor(options) {
    this._el = options.element;

    this._images = options.images;

    this._imageWidth = options.imageWidth || 130;
    this._shiftCount = options.shiftCount || 3;

    this._position = 0;

    this._compiledTemplate = _.template(template);


    this._render();

    this._list = this._el.querySelector('ul');

    this._el.querySelector('.prev').onclick = this._onPrevClick.bind(this);
    this._el.querySelector('.next').onclick = this._onNextClick.bind(this);
  }

  _onPrevClick(event) {
    this._position = Math.min(this._position + this._imageWidth * this._shiftCount, 0)
    this._list.style.marginLeft = this._position + 'px';
  }

  _onNextClick(event) {
    this._position = Math.max(this._position - this._imageWidth * this._shiftCount, - this._imageWidth * (this._images.length - this._shiftCount));
    this._list.style.marginLeft = this._position + 'px';
  }

  _render() {
    this._el.innerHTML = this._compiledTemplate({
      images: this._images
    });
  }
}

new Carousel({
  element: document.getElementById('carousel-1'),
  images: images1,
  shiftCount: 1
});

new Carousel({
  element: document.getElementById('carousel-2'),
  images: images1,
  shiftCount: 2
});

new Carousel({
  element: document.getElementById('carousel-3'),
  images: images1,
  shiftCount: 3
});
