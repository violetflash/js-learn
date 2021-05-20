// btoa(string) - built-in function that converts string from ASCII to BASE64
// atob(string) - built-in function that converts string from BASE64 to ASCII

const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
    document.getElementById('message-form').classList.add('hide');
    document.getElementById('message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('message-form').classList.add('hide');
    document.getElementById('link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${btoa(input.value)}`;
    linkInput.select();
});