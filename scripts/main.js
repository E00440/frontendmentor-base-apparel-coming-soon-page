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
