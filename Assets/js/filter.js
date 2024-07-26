// filter.js
document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.price.toString().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
