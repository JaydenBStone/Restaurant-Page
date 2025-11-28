export default function loadMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const item1 = document.createElement('p');
  item1.textContent = '🔥 Signature Steak — $29';

  const item2 = document.createElement('p');
  item2.textContent = '🍝 Creamy Pasta — $18';

  menu.append(title, item1, item2);
  return menu;
}
