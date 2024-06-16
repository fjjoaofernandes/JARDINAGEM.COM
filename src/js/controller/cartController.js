document.addEventListener('DOMContentLoaded', () => {
    const quantityControlButtons = document.querySelectorAll('.quantity-control button');
    const cartSummaryTotal = document.querySelector('.cart-summary p');

    quantityControlButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const quantitySpan = event.target.parentElement.querySelector('span');
            let quantity = parseInt(quantitySpan.textContent);

            if (event.target.textContent === '+') {
                quantity++;
            } else if (event.target.textContent === '-' && quantity > 1) {
                quantity--;
            }

            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.closest('.cart-item').remove();
            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-info p').textContent.replace('Preço: R$', '').trim());
            const quantity = parseInt(item.querySelector('.quantity-control span').textContent);
            total += price * quantity;
        });
        cartSummaryTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    updateTotalPrice();
});
