export default function loadHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const title = document.createElement('h1');
  title.textContent = "Jayden's Restaurant";

  const description = document.createElement('p');
  description.textContent = 'The best food in town. Fresh, fast, and fire.';

  home.append(title, description);
  return home;
}
