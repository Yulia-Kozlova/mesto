import {clickHandlerImage} from './script.js';

export default class Card {
	constructor(data, cardSelector) {
    this._text = data.name;
		this._image = data.link;
    this._cardSelector = cardSelector;
	}

  _getTemplate() {
  	const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__container')
      .cloneNode(true);
  return cardElement;
  }
  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.cards__photo').src = this._image;
  	this._element.querySelector('.cards__text').textContent = this._text;
    this._element.querySelector('.cards__text').alt = this._text;
  	return this._element;
}
_setEventListeners() {
  this._element.querySelector('.cards__button').addEventListener('click', () => {
    this._handleLikeClick();
  });
  this._element.querySelector('.cards__button-delete').addEventListener('click', () => {
    this._element.remove();
  });
  this._element.querySelector('.cards__photo').addEventListener('click', () => {
  clickHandlerImage({ link: this._image, name: this._text });
  });
}

_handleLikeClick() {
  this._element.querySelector('.cards__button').classList.toggle('cards__button_color_black');
}
}

