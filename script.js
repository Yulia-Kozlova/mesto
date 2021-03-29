
let popup = document.querySelector('.popup_type_profile');
let openPopupButton = document.querySelector('.profile__button-pencil');
let closePopupButton = popup.querySelector('.popup__close-button_type_profile');
let popupOverlay = popup.querySelector('.popup__overlay_type_profile');
let formElement = popup.querySelector('.popup__content_type_profile');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let buttomSave = popup.querySelector('.popup__save_type_profile');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
popupOverlay.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);



const popupNewCard = document.querySelector('.popup_type_card');
const openPopupButtonNewCard = document.querySelector('.profile__button-plus');
const closePopupButtonNewCard = popupNewCard.querySelector('.popup__close-button_type_card');
const popupOverlayNewCard = document.querySelector('.popup__overlay_type_card');
const formElementNewCard = popupNewCard.querySelector('.popup__content_type_card');
const namePlaceInputNewCard = popupNewCard.querySelector('.popup__input_type_place');
const linkInputNewCard = popupNewCard.querySelector('.popup__input_type_link');
const buttomSaveNewCard = popupNewCard.querySelector('.popup__save_type_card');
const photoCard = document.querySelector('.cards__photo');
const nameCard = document.querySelector('.cards__text');

function openPopupNewCard() {
  popupNewCard.classList.add('popup_opened');
}
function closePopupNewCard() {
  popupNewCard.classList.remove('popup_opened');
}
function formSubmitHandlerNewCard (evt) {
  evt.preventDefault();
  InsertCardItem({
    name: namePlaceInputNewCard.value,
    link: linkInputNewCard.value
  });
  closePopupNewCard();
}
openPopupButtonNewCard.addEventListener('click', openPopupNewCard);
closePopupButtonNewCard.addEventListener('click', closePopupNewCard);
popupOverlayNewCard.addEventListener('click', closePopupNewCard);
formElementNewCard.addEventListener('submit', formSubmitHandlerNewCard);


const popupTypeImage = document.querySelector('.popup_type_image');
const popupOverlayImage = popupTypeImage.querySelector('.popup__overlay_type_image');
const popupFigure =popupTypeImage.querySelector('.popup__figure');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupFigcaption = popupTypeImage.querySelector('.popup__figcaption');
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close-button_type_image');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(element => {InsertCardItem(element)})

function InsertCardItem(element) {
  const cardsBox = document.querySelector('.cards');
  const templateCardItem = document.querySelector('.cards-template').content.querySelector('.cards__container');
  const CardItem = templateCardItem.cloneNode(true);
  const deleteCardButton = CardItem.querySelector('.cards__button-delete');
  const photoCard  = CardItem.querySelector('.cards__photo');
  const cardDivName = CardItem.querySelector('.cards__name');
  const nameCard = CardItem.querySelector('.cards__text');
  const likeCardButton = CardItem.querySelector('.cards__button');

  nameCard.textContent = element.name;
  photoCard.src = element.link;

  deleteCardButton.addEventListener('click', () => CardItem.remove())
  likeCardButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__button_color_black');
  });
  photoCard.addEventListener('click', () => ImageClickHandler(element));
  cardsBox.append(CardItem);
}

function openPopupImage(element) {
  popupTypeImage.classList.add('popup_opened');
}
function closePopupImage() {
  popupTypeImage.classList.remove('popup_opened');
}
popupImageCloseButton.addEventListener('click', closePopupImage);
popupOverlayImage.addEventListener('click', closePopupImage);

function ImageClickHandler (element) {
  popupImage.src = element.link;
  popupFigcaption.textContent = element.name;
  openPopupImage();
}
