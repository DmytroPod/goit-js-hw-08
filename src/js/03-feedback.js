import throttle from 'lodash.throttle';

const KEY_FEEDBACK = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));

let formSubmit = {};
populateMessageOutput();
function onFormInput(e) {
  formSubmit = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(KEY_FEEDBACK, JSON.stringify(formSubmit));
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (!refs.input.value || !refs.textarea.value) {
    alert('Заповніть всі поля!');
    return;
  }
  console.log(formSubmit);
  localStorage.removeItem(KEY_FEEDBACK);
  e.currentTarget.reset();
}

function populateMessageOutput() {
  const formData = localStorage.getItem(KEY_FEEDBACK);
  //   console.log(formData);
  if (formData) {
    formSubmit = JSON.parse(formData);
    refs.input.value = formSubmit.email;
    refs.textarea.value = formSubmit.message;
  }
}
