document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-btn');
    loginButton.addEventListener('click', () => {
        console.log('Login button clicked');
        window.location.href = 'login.html';
    });

    const quantityControlButtons = document.querySelectorAll('.quantity-control button');
    quantityControlButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const quantitySpan = document.querySelector('.quantity-control span');
            let quantity = parseInt(quantitySpan.textContent);

            if (event.target.textContent === '+') {
                quantity++;
            } else if (event.target.textContent === '-' && quantity > 1) {
                quantity--;
            }

            quantitySpan.textContent = quantity;
        });
    });

    const addToCartButton = document.querySelector('.add-to-cart-btn');
    addToCartButton.addEventListener('click', () => {
        const productInfo = document.querySelector('.product-info');
        const productName = productInfo.querySelector('h2').textContent;
        const productPrice = productInfo.querySelector('.price').textContent;
        const quantity = parseInt(document.querySelector('.quantity-control span').textContent);

        console.log(`Product added to cart: ${productName}, Price: ${productPrice}, Quantity: ${quantity}`);
    });

    const buyNowButton = document.querySelector('.buy-now-btn');
    buyNowButton.addEventListener('click', () => {
        console.log('Buy Now button clicked');
        window.location.href = 'checkout.html';
    });

    const categoryAddToCartButtons = document.querySelectorAll('.category-item .add-to-cart-btn');
    categoryAddToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const categoryItem = event.target.closest('.category-item');
            const productName = categoryItem.querySelector('p').textContent;
            const productPrice = categoryItem.querySelector('.price').textContent;

            console.log(`Category product added to cart: ${productName}, Price: ${productPrice}`);
        });
    });

    const headerIcons = document.querySelectorAll('.header-icons a');
    headerIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            console.log('Header icon clicked:', event.target.alt);
        });
    });
});
