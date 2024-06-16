document.addEventListener('DOMContentLoaded', () => {
    const recoveryForm = document.querySelector('form');

    recoveryForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = recoveryForm.querySelector('input[type="email"]').value;
        console.log('Email:', email);

    });

    const backToLoginLink = document.querySelector('.back-to-login');
    backToLoginLink.addEventListener('click', (event) => {
        event.preventDefault(); 

        console.log('Back to login clicked');
    });
});
