const container = document.getElementById('container');
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const registerPrompt = document.getElementById('registerPrompt');
const loginPrompt = document.getElementById('loginPrompt');

registerButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

registerPrompt.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

loginPrompt.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});