
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__buttom-pencil');
let openPopupButtonPencil = document.querySelector('.profile__pencil');
let closePopupButton = document.querySelector('.popup__closebutton');
let popupOverlay = document.querySelector('.popup__overlay');

function openPopup() {
  popup.classList.add('popup__visible');
}
function closePopup() {
  popup.classList.remove('popup__visible');
}
openPopupButton.addEventListener('click', function() {
  openPopup();
});
openPopupButtonPencil.addEventListener('click', function() {
  openPopup();
});481
5*
closePopupButton.addEventListener('click', function(){
  closePopup();
});
popupOverlay.addEventListener('click', function(){
  closePopup();
});

let formElement = document.querySelector('.popup__content');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__job');
let buttomSave = formElement.querySelector('.popup__save');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
