import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
  const content = document.querySelector('#content');
  content.textContent = '';
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  homeBtn.addEventListener('click', () => {
    clearContent();
    document.querySelector('#content').appendChild(loadHome());
  });

  menuBtn.addEventListener('click', () => {
    clearContent();
    document.querySelector('#content').appendChild(loadMenu());
  });

  contactBtn.addEventListener('click', () => {
    clearContent();
    document.querySelector('#content').appendChild(loadContact());
  });

  nav.append(homeBtn, menuBtn, contactBtn);
  document.body.prepend(nav);
}

export default function initialLoad() {
  createNav();
  const content = document.querySelector('#content');
  content.appendChild(loadHome()); // default tab
}
