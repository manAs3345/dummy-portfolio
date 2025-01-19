document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');

    function toggleMenu() {
        console.log(navMenu);
        navMenu.classList.toggle('visible');
        console.log('clicked');
    }

    hamburgerMenu.addEventListener('click', toggleMenu);
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (nameInput.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'Please enter your name.';
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        isValid = false;
        emailError.textContent = 'Please enter a valid email address.';
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        messageError.textContent = 'Please enter your message.';
    }

    if (isValid) {
        contactForm.submit();
    }
nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
    } else {
        emailError.textContent = '';
    }
});

messageInput.addEventListener('input', function() {
    if (messageInput.value.trim() !== '') {
        messageError.textContent = '';
    }
})});
