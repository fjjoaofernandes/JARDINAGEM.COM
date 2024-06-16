document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-btn');
    loginButton.addEventListener('click', () => {
        console.log('Login button clicked');
        window.location.href = 'login.html';
    });

    const headerIcons = document.querySelectorAll('.header-icons a');
    headerIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            console.log('Header icon clicked:', event.target.alt);
        });
    });

});
