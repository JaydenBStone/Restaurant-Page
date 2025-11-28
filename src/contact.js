export default function loadContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const title = document.createElement('h1');
  title.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = '📞 Phone: 0400 123 456';

  const email = document.createElement('p');
  email.textContent = '✉️ Email: info@jaydensrestaurant.com';

  contact.append(title, phone, email);
  return contact;
}
