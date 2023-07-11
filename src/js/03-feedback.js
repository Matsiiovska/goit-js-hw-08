import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(inputData, 500));
form.addEventListener('submit', formSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function inputData(evt) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function formSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || mewssage.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}

    




