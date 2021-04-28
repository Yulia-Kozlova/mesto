import Card from './Card.js';
import FormValidator from './FormValidator.js';
import initialCards from './initial-сards.js';

const selectorsValidator = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  });

const formElementProfile = document.querySelector('.popup__content_type_profile');
const formElementNewCard = document.querySelector('.popup__content_type_card');

const formValidatorProfile = new FormValidator(selectorsValidator, formElementProfile);
const formValidatorCard = new FormValidator(selectorsValidator, formElementNewCard);

// choose modalsexport
const popupTypeProfile = document.querySelector('.popup_type_profile');
const popupNewCard = document.querySelector('.popup_type_card');
const popupTypeImage = document.querySelector('.popup_type_image');

// Open modal buttons
const openPopupButtonProfile = document.querySelector('.profile__button-pencil');
const openPopupButtonNewCard = document.querySelector('.profile__button-plus');

//Close modal buttons
const closePopupButtonProfile = popupTypeProfile.querySelector('.popup__close-button_type_profile');
const closePopupButtonNewCard = popupNewCard.querySelector('.popup__close-button_type_card');
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close-button_type_image');

//Close modal overlays
const popupOverlayProfile = popupTypeProfile.querySelector('.popup__overlay_type_profile');
const popupOverlayNewCard = popupNewCard.querySelector('.popup__overlay_type_card');
const popupOverlayImage = popupTypeImage.querySelector('.popup__overlay_type_image');

//consts for modalprofile
const nameInput = popupTypeProfile.querySelector('.popup__input_type_name');
const jobInput = popupTypeProfile.querySelector('.popup__input_type_job');
const buttomSave = popupTypeProfile.querySelector('.popup__save_type_profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//consts for modal new cards
const namePlaceInputNewCard = popupNewCard.querySelector('.popup__input_type_place');
const linkInputNewCard = popupNewCard.querySelector('.popup__input_type_link');
const buttomSaveNewCard = popupNewCard.querySelector('.popup__save_type_card');
const photoCard = document.querySelector('.cards__photo');
const nameCard = document.querySelector('.cards__text');

//consts for modal Image
const popupFigure =popupTypeImage.querySelector('.popup__figure');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupFigcaption = popupTypeImage.querySelector('.popup__figcaption');

//consts for template
const cardsBox = document.querySelector('.cards');
// const templateCardItem = document.querySelector('.cards-template').content.querySelector('.cards__container');

function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    const closeOnEscape = document.querySelector('.popup_opened')
    closePopup(closeOnEscape)
  }
}

function openPopupProfile() {
  openPopup(popupTypeProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function submitHandlerForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupTypeProfile);
}

function createCard(item) {
  const card = new Card({
    name: item.name,
    link: item.link,
  }, '.cards-template');
  return card.createCard();
}

function submitHandlerFormNewCard (evt) {
  evt.preventDefault();
  addCard();
  closePopup(popupNewCard);
  formElementNewCard.reset();
}

function addCard() {
const cardElement = createCard({
      name: namePlaceInputNewCard.value,
      link: linkInputNewCard.value
    });
cardsBox.prepend(cardElement);
}

export function clickHandlerImage(element) {
  popupImage.src = element.link;
  popupFigcaption.textContent = element.name;
  popupImage.alt = element.name;
  openPopup(popupTypeImage);
}
initialCards.forEach((item) => { cardsBox.prepend(createCard(item)) } );
// initialCards.forEach((item) => {
//   const card = new Card(item, '.cards-template');
//   const cardElement = card.createCard();
//   cardsBox.prepend(cardElement);
// });

formElementProfile.addEventListener('submit', submitHandlerForm);
formElementNewCard.addEventListener('submit', submitHandlerFormNewCard);

openPopupButtonProfile.addEventListener('click', openPopupProfile);
openPopupButtonNewCard.addEventListener('click', () => {
  formValidatorCard.disableSubmitButton();
  openPopup(popupNewCard);
});
closePopupButtonProfile.addEventListener('click', () => closePopup(popupTypeProfile));
closePopupButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
popupImageCloseButton.addEventListener('click', () => closePopup(popupTypeImage));

popupOverlayProfile.addEventListener('click', () => closePopup(popupTypeProfile));
popupOverlayNewCard.addEventListener('click', () => closePopup(popupNewCard));
popupOverlayImage.addEventListener('click', () => closePopup(popupTypeImage));

formValidatorCard.enableValidation();
formValidatorProfile.enableValidation();
