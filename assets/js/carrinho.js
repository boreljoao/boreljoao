document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('add-to-cart');
    const cartBar = document.getElementById('cart-bar');
    const cartCount = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    function getCart() {
        return parseInt(localStorage.getItem('donationCart') || '0', 10);
    }
    function setCart(qty) {
        localStorage.setItem('donationCart', qty);
    }
    function updateCartBar() {
        const qty = getCart();
        cartCount.textContent = qty;
        if (qty > 0) {
            cartBar.style.display = 'flex';
        } else {
            cartBar.style.display = 'none';
        }
    }
    addToCartBtn.addEventListener('click', function() {
        let qty = getCart();
        qty++;
        setCart(qty);
        updateCartBar();
    });
    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'pagamento.html';
    });
    // Atualiza ao carregar
    updateCartBar();
}); 