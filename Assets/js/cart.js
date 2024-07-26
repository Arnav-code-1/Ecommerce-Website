// cart.js
let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    displayCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(cartItem => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';

        const cartItemName = document.createElement('span');
        cartItemName.textContent = `${cartItem.name} (x${cartItem.quantity})`;
        cartItemDiv.appendChild(cartItemName);

        const cartItemQuantity = document.createElement('input');
        cartItemQuantity.type = 'number';
        cartItemQuantity.value = cartItem.quantity;
        cartItemQuantity.min = '1';
        cartItemQuantity.addEventListener('input', (event) => updateQuantity(cartItem.id, event.target.value));
        cartItemDiv.appendChild(cartItemQuantity);

        const cartItemPrice = document.createElement('span');
        cartItemPrice.textContent = `$${(cartItem.price * cartItem.quantity).toFixed(2)}`;
        cartItemDiv.appendChild(cartItemPrice);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(cartItem.id));
        cartItemDiv.appendChild(removeButton);

        totalPrice += cartItem.price * cartItem.quantity;
        cartDiv.appendChild(cartItemDiv);
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function updateQuantity(id, newQuantity) {
    cart.forEach(item => {
        if (item.id === id) {
            item.quantity = parseInt(newQuantity, 10);
        }
    });
    displayCart();
}
