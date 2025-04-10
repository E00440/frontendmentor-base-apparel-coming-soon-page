const emailElement = document.querySelector('.js-email-input');

const buttonElement = document.querySelector('.js-arrow-button');

const errorTextElement = document.querySelector('.js-error-text');

const errorIcon = document.querySelector('.js-error-icon');


buttonElement.addEventListener('click', () => {
  //checking if email is empty
  if (!emailElement.value || typeof emailElement.value !== 'string') {
    displayError();
    return;
  }

  //making sure there is only one @ symbol
  const atSymbolCount = countCharacter(emailElement.value, '@');
  if (atSymbolCount !== 1) {
    displayError();
    return;
  }

  //validating username and domain parts
  const parts = emailElement.value.split('@');
  const username = parts[0];
  const domain = parts[1];

  if (username.length === 0 || domain.length === 0) {
    displayError();
    return;
  }

  //make sure domain has at least one dot
  const dotCount = countCharacter(domain, '.');
  if (dotCount < 1) {
    displayError();
    return;
  }

  //make sure domain doesn't end with a dot
  if (domain.endsWith('.')) {
    displayError();
    return;
  }

  //check if domain ends with at least one letter
  const domainParts = domain.split('.');
  const lastPartDomain = domainParts[domainParts.length - 1];
  if (lastPartDomain.length < 2) {
    displayError();
    return;
  }

  const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
  for (let i = 0; i < emailElement.value.length; i++) {
    if (!validCharacters.includes(emailElement.value[i])) {
      displayError();
      return;
    }
  }

  validEmail();
})

emailElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    //checking if email is empty
    if (!emailElement.value || typeof emailElement.value !== 'string') {
      displayError();
      return;
    }

    //making sure there is only one @ symbol
    const atSymbolCount = countCharacter(emailElement.value, '@');
    if (atSymbolCount !== 1) {
      displayError();
      return;
    }

    //validating username and domain parts
    const parts = emailElement.value.split('@');
    const username = parts[0];
    const domain = parts[1];

    if (username.length === 0 || domain.length === 0) {
      displayError();
      return;
    }

    //make sure domain has at least one dot
    const dotCount = countCharacter(domain, '.');
    if (dotCount < 1) {
      displayError();
      return;
    }

    //make sure domain doesn't end with a dot
    if (domain.endsWith('.')) {
      displayError();
      return;
    }

    //check if domain ends with at least one letter
    const domainParts = domain.split('.');
    const lastPartDomain = domainParts[domainParts.length - 1];
    if (lastPartDomain.length < 2) {
      displayError();
      return;
    }

    const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
    for (let i = 0; i < emailElement.value.length; i++) {
      if (!validCharacters.includes(emailElement.value[i])) {
        displayError();
        return;
      }
    }

    validEmail();
  }
});

function displayError() {
  errorTextElement.innerHTML = '';

  errorTextElement.classList.remove('display-thank-you-text');

  emailElement.classList.add('red-outline');

  errorTextElement.innerHTML = 'Please provide a valid email';

  errorTextElement.classList.add('display-error-text');

  errorIcon.classList.add('display-error-icon');
}

function validEmail() {
  emailElement.classList.remove('red-outline');

  errorTextElement.innerHTML = '';

  errorTextElement.classList.remove('display-error-text');

  errorIcon.classList.remove('display-error-icon');

  errorTextElement.innerHTML = 'Thank You!';

  errorTextElement.classList.add('display-thank-you-text');

  setTimeout(() => {
    errorTextElement.innerHTML = '';
  }, 3000);

}


function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

//Big Mobile Phone

const emailElementPhone = document.querySelector('.js-email-input-phone');

const buttonElementPhone = document.querySelector('.js-arrow-button-phone');

const errorTextElementPhone = document.querySelector('.js-error-text-phone');

const errorIconPhone = document.querySelector('.js-error-icon-phone');


buttonElementPhone.addEventListener('click', () => {
  //checking if email is empty
  if (!emailElementPhone.value || typeof emailElementPhone.value !== 'string') {
    displayErrorPhone();
    return;
  }

  //making sure there is only one @ symbol
  const atSymbolCount = countCharacter(emailElementPhone.value, '@');
  if (atSymbolCount !== 1) {
    displayErrorPhone();
    return;
  }

  //validating username and domain parts
  const parts = emailElementPhone.value.split('@');
  const username = parts[0];
  const domain = parts[1];

  if (username.length === 0 || domain.length === 0) {
    displayErrorPhone();
    return;
  }

  //make sure domain has at least one dot
  const dotCount = countCharacter(domain, '.');
  if (dotCount < 1) {
    displayErrorPhone();
    return;
  }

  //make sure domain doesn't end with a dot
  if (domain.endsWith('.')) {
    displayErrorPhone();
    return;
  }

  //check if domain ends with at least one letter
  const domainParts = domain.split('.');
  const lastPartDomain = domainParts[domainParts.length - 1];
  if (lastPartDomain.length < 2) {
    displayErrorPhone();
    return;
  }

  const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
  for (let i = 0; i < emailElementPhone.value.length; i++) {
    if (!validCharacters.includes(emailElementPhone.value[i])) {
      displayErrorPhone();
      return;
    }
  }

  validEmailPhone();
})

emailElementPhone.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    //checking if email is empty
    if (!emailElementPhone.value || typeof emailElementPhone.value !== 'string') {
      displayErrorPhone();
      return;
    }

    //making sure there is only one @ symbol
    const atSymbolCount = countCharacter(emailElementPhone.value, '@');
    if (atSymbolCount !== 1) {
      displayErrorPhone();
      return;
    }

    //validating username and domain parts
    const parts = emailElementPhone.value.split('@');
    const username = parts[0];
    const domain = parts[1];

    if (username.length === 0 || domain.length === 0) {
      displayErrorPhone();
      return;
    }

    //make sure domain has at least one dot
    const dotCount = countCharacter(domain, '.');
    if (dotCount < 1) {
      displayErrorPhone();
      return;
    }

    //make sure domain doesn't end with a dot
    if (domain.endsWith('.')) {
      displayErrorPhone();
      return;
    }

    //check if domain ends with at least one letter
    const domainParts = domain.split('.');
    const lastPartDomain = domainParts[domainParts.length - 1];
    if (lastPartDomain.length < 2) {
      displayErrorPhone();
      return;
    }

    const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
    for (let i = 0; i < emailElementPhone.value.length; i++) {
      if (!validCharacters.includes(emailElementPhone.value[i])) {
        displayErrorPhone();
        return;
      }
    }

    validEmailPhone();
  }
});

function displayErrorPhone() {
  errorTextElementPhone.innerHTML = '';

  errorTextElementPhone.classList.remove('display-thank-you-text');

  emailElementPhone.classList.add('red-outline');

  errorTextElementPhone.innerHTML = 'Please provide a valid email';

  errorTextElementPhone.classList.add('display-error-text');

  errorIconPhone.classList.add('display-error-icon');
}

function validEmailPhone() {
  emailElementPhone.classList.remove('red-outline');

  errorTextElementPhone.innerHTML = '';

  errorTextElementPhone.classList.remove('display-error-text');

  errorIconPhone.classList.remove('display-error-icon');

  errorTextElementPhone.innerHTML = 'Thank You!';

  errorTextElementPhone.classList.add('display-thank-you-text');

  setTimeout(() => {
    errorTextElementPhone.innerHTML = '';
  }, 3000);

}





//desktop js
const emailElementTwo = document.querySelector('.js-email-input-two');

const buttonElementTwo = document.querySelector('.js-arrow-button-two');

const errorTextElementTwo = document.querySelector('.js-error-text-two');

const errorIconTwo = document.querySelector('.js-error-icon-two');


buttonElementTwo.addEventListener('click', () => {
  //checking if email is empty
  if (!emailElementTwo.value || typeof emailElementTwo.value !== 'string') {
    displayErrorDesktop();
    return;
  }

  //making sure there is only one @ symbol
  const atSymbolCount = countCharacter(emailElementTwo.value, '@');
  if (atSymbolCount !== 1) {
    displayErrorDesktop();
    return;
  }

  //validating username and domain parts
  const parts = emailElementTwo.value.split('@');
  const username = parts[0];
  const domain = parts[1];

  if (username.length === 0 || domain.length === 0) {
    displayErrorDesktop();
    return;
  }

  //make sure domain has at least one dot
  const dotCount = countCharacter(domain, '.');
  if (dotCount < 1) {
    displayErrorDesktop();
    return;
  }

  //make sure domain doesn't end with a dot
  if (domain.endsWith('.')) {
    displayErrorDesktop();
    return;
  }

  //check if domain ends with at least one letter
  const domainParts = domain.split('.');
  const lastPartDomain = domainParts[domainParts.length - 1];
  if (lastPartDomain.length < 2) {
    displayErrorDesktop();
    return;
  }

  const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
  for (let i = 0; i < emailElementTwo.value.length; i++) {
    if (!validCharacters.includes(emailElementTwo.value[i])) {
      displayErrorDesktop();
      return;
    }
  }

  validEmailDesktop();
})

emailElementTwo.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    //checking if email is empty
    if (!emailElementTwo.value || typeof emailElementTwo.value !== 'string') {
      displayErrorDesktop();
      return;
    }

    //making sure there is only one @ symbol
    const atSymbolCount = countCharacter(emailElementTwo.value, '@');
    if (atSymbolCount !== 1) {
      displayErrorDesktop();
      return;
    }

    //validating username and domain parts
    const parts = emailElementTwo.value.split('@');
    const username = parts[0];
    const domain = parts[1];

    if (username.length === 0 || domain.length === 0) {
      displayErrorDesktop();
      return;
    }

    //make sure domain has at least one dot
    const dotCount = countCharacter(domain, '.');
    if (dotCount < 1) {
      displayErrorDesktop();
      return;
    }

    //make sure domain doesn't end with a dot
    if (domain.endsWith('.')) {
      displayErrorDesktop();
      return;
    }

    //check if domain ends with at least one letter
    const domainParts = domain.split('.');
    const lastPartDomain = domainParts[domainParts.length - 1];
    if (lastPartDomain.length < 2) {
      displayErrorDesktop();
      return;
    }

    const validCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_@';
    for (let i = 0; i < emailElementTwo.value.length; i++) {
      if (!validCharacters.includes(emailElement.value[i])) {
        displayErrorDesktop();
        return;
      }
    }

    validEmailDesktop();
  }
});

function displayErrorDesktop() {
  errorTextElementTwo.innerHTML = '';

  errorTextElementTwo.classList.remove('display-thank-you-text');

  emailElementTwo.classList.add('red-outline');

  errorTextElementTwo.innerHTML = 'Please provide a valid email';

  errorTextElementTwo.classList.add('display-error-text');

  errorIconTwo.classList.add('display-error-icon');
}

function validEmailDesktop() {
  emailElementTwo.classList.remove('red-outline');

  errorTextElementTwo.innerHTML = '';

  errorTextElementTwo.classList.remove('display-error-text');

  errorIconTwo.classList.remove('display-error-icon');

  errorTextElementTwo.innerHTML = 'Thank You!';

  errorTextElementTwo.classList.add('display-thank-you-text');

  setTimeout(() => {
    errorTextElementTwo.innerHTML = '';
  }, 3000);

}