// import './sass/main.scss';
import data from './menu.json'; //завантаження бази
import makeMarkup from './templates/menu.hbs'; //завантаження шаблону у вигляді функції
import './styles.css'; //завантаження стилів

const menuRef = document.querySelector('.js-menu'); // ccилка на на список з HTML

menuRef.insertAdjacentHTML('beforeend', makeMarkup(data)); //виклик функціїї та передача даних аргументом

// ======тема=========
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  bodyRef: document.querySelector('body'), //
  inputRef: document.querySelector('#theme-switch-toggle'),
};

refs.inputRef.addEventListener('change', addTheme);
refs.inputRef.addEventListener('change', addlocalStorage);

function toChangeClass(addClass, removeClass) {
  refs.bodyRef.classList.add(addClass);
  refs.bodyRef.classList.remove(removeClass);
}

function addTheme(evt) {
  const check = refs.inputRef.checked;
  if (check) {
    toChangeClass(Theme.DARK, Theme.LIGHT);
    // refs.bodyRef.classList.add(Theme.DARK);
    // refs.bodyRef.classList.remove(Theme.LIGHT);
  } else {
    toChangeClass(Theme.LIGHT, Theme.DARK);
    // refs.bodyRef.classList.add(Theme.LIGHT);
    // refs.bodyRef.classList.remove(Theme.DARK);
  }
}

function addlocalStorage(evt) {
  const themeDark = refs.bodyRef.classList.contains(Theme.DARK);
  if (themeDark) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function populateTheme() {
  const getTheme = localStorage.getItem('theme');
  refs.bodyRef.classList.add(getTheme);
  const themeDark = refs.bodyRef.classList.contains(Theme.DARK);
  if (themeDark) {
    refs.inputRef.checked = true;
  }
}

populateTheme();
