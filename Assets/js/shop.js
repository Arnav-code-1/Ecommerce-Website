// shop.js
document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    displayProducts(products);
});

function displayProducts(products) {
    const shop = document.getElementById('shop');
    shop.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;
        productDiv.appendChild(productImg);

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.name;
        productDiv.appendChild(productTitle);

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        productDiv.appendChild(productPrice);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(addToCartButton);

        shop.appendChild(productDiv);
    });
}
