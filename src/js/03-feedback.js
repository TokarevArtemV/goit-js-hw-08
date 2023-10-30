import _ from 'lodash';
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formInput = document.querySelector('.feedback-form');

initForm();

formInput.addEventListener('input', _.throttle(saveFormToLocalStoradge,500));
formInput.addEventListener('submit', submitForm);

function initForm() {
  let obj = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (obj) {
    obj = JSON.parse(obj);
    Object.entries(obj).forEach(([key, value]) => {
      formInput.elements[key].value = value;
    });
  }
}

function saveFormToLocalStoradge(evt) {
  evt.preventDefault;
  const objData = {};
  new FormData(formInput).forEach((value, key) => {
    objData[key] = value;
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(objData));
  return objData;
}

function submitForm(evt) {
  evt.preventDefault();
  console.log(saveFormToLocalStoradge(evt));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formInput.reset();
}
