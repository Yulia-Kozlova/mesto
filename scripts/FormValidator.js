export default class FormValidator {
	constructor(selectors, form) {
    this._selectors = selectors;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._selectors.inputSelector));
    this._buttonElement = this._form.querySelector(this._selectors.submitButtonSelector);
	}

  _showInputError(inputElement, errorMessage){
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectors.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.classList.remove(this._selectors.errorClass);
    errorElement.textContent = '';
  };

  disableSubmitButton() {
    this._buttonElement.classList.add(this._selectors.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton()
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (e) => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState();
      });
    });
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  enableValidation() {
    this._form.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
