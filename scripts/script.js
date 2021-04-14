
// choose modals
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
const formElement = popupTypeProfile.querySelector('.popup__content_type_profile');
const nameInput = popupTypeProfile.querySelector('.popup__input_type_name');
const jobInput = popupTypeProfile.querySelector('.popup__input_type_job');
const buttomSave = popupTypeProfile.querySelector('.popup__save_type_profile');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

//consts for modal new cards
const formElementNewCard = popupNewCard.querySelector('.popup__content_type_card');
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
const templateCardItem = document.querySelector('.cards-template').content.querySelector('.cards__container');

function toggleModalWindow(modal) {
  const form = modal.querySelector('.popup__form');
  buttomSaveNewCard.setAttribute('disabled', true);
  modal.classList.toggle('popup_opened');
  document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        toggleModalWindow(modal)
      }
    });
}

function openPopupProfile() {
  toggleModalWindow(popupTypeProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function submitHandlerForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  toggleModalWindow(popupTypeProfile);
}

function submitHandlerFormNewCard (evt) {
  evt.preventDefault();
  createCard({
    name: namePlaceInputNewCard.value,
    link: linkInputNewCard.value
  });
  toggleModalWindow(popupNewCard);
  formElementNewCard.reset()
}

function createCard(element) {
  const cardItem = templateCardItem.cloneNode(true);
  const deleteCardButton = cardItem.querySelector('.cards__button-delete');
  const photoCard  = cardItem.querySelector('.cards__photo');
  const cardDivName = cardItem.querySelector('.cards__name');
  const nameCard = cardItem.querySelector('.cards__text');
  const likeCardButton = cardItem.querySelector('.cards__button');

  nameCard.textContent = element.name;
  photoCard.src = element.link;
  photoCard.alt ="Здесь должно быть красивое фото";

  deleteCardButton.addEventListener('click', () => cardItem.remove())
  likeCardButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__button_color_black');
  });
  photoCard.addEventListener('click', () => clickHandlerImage(element));
  cardsBox.prepend(cardItem);
}

//функция добавления карточки
function addCard(element){
  cardsBox.prepend(element);
}

function clickHandlerImage (element) {
  popupImage.src = element.link;
  popupFigcaption.textContent = element.name;
  popupImage.alt ="Здесь должно быть красивое фото";
  toggleModalWindow(popupTypeImage);
}

formElement.addEventListener('submit', submitHandlerForm);
formElementNewCard.addEventListener('submit', submitHandlerFormNewCard);
initialCards.forEach(element => {createCard(element)});

openPopupButtonProfile.addEventListener('click', openPopupProfile);
openPopupButtonNewCard.addEventListener('click', () => toggleModalWindow(popupNewCard));

closePopupButtonProfile.addEventListener('click', () => toggleModalWindow(popupTypeProfile));
closePopupButtonNewCard.addEventListener('click', () => toggleModalWindow(popupNewCard));
popupImageCloseButton.addEventListener('click', () => toggleModalWindow(popupTypeImage));

popupOverlayProfile.addEventListener('click', () => toggleModalWindow(popupTypeProfile));
popupOverlayNewCard.addEventListener('click', () => toggleModalWindow(popupNewCard));
popupOverlayImage.addEventListener('click', () => toggleModalWindow(popupTypeImage));
