
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__button-pencil');
let closePopupButton = popup.querySelector('.popup__closebutton');
let popupOverlay = popup.querySelector('.popup__overlay');
let formElement = popup.querySelector('.popup__content');
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');
let buttomSave = popup.querySelector('.popup__save');
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
