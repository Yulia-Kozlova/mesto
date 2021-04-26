import {openPopup} from './script.js';
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupFigcaption = popupTypeImage.querySelector('.popup__figcaption');

export class Card {
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
    // this._element.querySelector('.cards__photo').style.backgroundImage = `url(${this._image})`;
  	this._element.querySelector('.cards__text').textContent = this._text;
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
  this._clickHandlerImage();
  });
  const buttomSaveNewCard = document.querySelector('.popup__save_type_card');
  buttomSaveNewCard.setAttribute('disabled', true);
}
_handleLikeClick() {
  this._element.querySelector('.cards__button').classList.toggle('cards__button_color_black');
}
_clickHandlerImage () {
  popupImage.src = this._image;
  popupFigcaption.textContent = this._text;
  popupImage.alt = this._text;
  openPopup(popupTypeImage);
}
}
// initialCards.forEach((item) => {
  // const card = new Card(item, '.cards-template');
  // const cardElement = card.createCard();

  // Добавляем в DOM
//   document.querySelector('.cards').append(cardElement);
// });
