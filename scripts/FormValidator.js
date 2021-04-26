class FormValidator {
	constructor(selectors, popupFormValidadateSelector) {
    this._selectors = selectors;
    this._popupFormValidadateSelector = popupFormValidadateSelector
	}
  _showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectors.errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = '';
  };

  _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)){
        buttonElement.setAttribute('disabled', true)
        buttonElement.classList.add(this._selectors.inactiveButtonClass);
      } else {
        buttonElement.removeAttribute('disabled')
        buttonElement.classList.remove(this._selectors.inactiveButtonClass);
    }
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._selectors.inputSelector));
    const buttonElement = formElement.querySelector(this._selectors.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (e) => {
        this._checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._selectors.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    })
  }
}
const formValidator = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
  });

  formValidator.enableValidation();
