document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        console.log('Username:', username);
        console.log('Password:', password);
    });

    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', (event) => {
        console.log('Forgot password clicked');
    });

    const registerButton = document.querySelector('.register-btn');
    registerButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        console.log('Register button clicked');
    });
});
