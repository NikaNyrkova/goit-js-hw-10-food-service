const bodyRef = document.body;
const inputCheckbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));

inputCheckbox.checked = localStorage.getItem('theme') === Theme.DARK;

inputCheckbox.addEventListener('change', onInputCheckboxChange);

function onInputCheckboxChange({target}) {
    if (target.checked) {
      bodyRef.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
      localStorage.setItem('theme', Theme.DARK)
      return;
      }

    if (target.checked === false) {
      bodyRef.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
      localStorage.setItem('theme', Theme.LIGHT)
      return;
      }
};


