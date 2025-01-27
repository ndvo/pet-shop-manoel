

document.addEventListener('DOMContentLoaded', () => {
    insertLocalStorage();
    const productTableBody = document.getElementById('productTableBody');

    loadProducts();

    function renderProducts(products) {
        productTableBody.innerHTML = ''; 
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td class="text-center">
                    <img src="assets/img/${product.image}" alt="${product.name}" class="img-thumbnail" width="75">
                </td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td class="text-center">
                    <button class="btn btn-warning btn-sm me-2" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="removeProduct(${product.id})">Delete</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    }

    function getProductsFromStorage() {
        let listStorage = JSON.parse(localStorage.getItem('products')) || [];
        return listStorage;
    }

    function loadProducts() {
        const products = getProductsFromStorage();
        renderProducts(products);
    }

    window.editProduct = function (id) {
        let products = getProductsFromStorage();
        const product = products.find(p => p.id === id);
        const newName = prompt("Edit Product Name:", product.name);
        const newPrice = prompt("Edit Product Price:", product.price);

        if (newName && newPrice) {
            product.name = newName;
            product.price = parseFloat(newPrice);
            saveToLocalStorage(products);
            loadProducts();
        }
    }

    window.removeProduct = function (id) {
        let products = getProductsFromStorage();
        products = products.filter(product => product.id !== id);
        saveToLocalStorage(products);
        loadProducts();
    }

    function saveToLocalStorage(products) {
        localStorage.setItem('products', JSON.stringify(products));
    }
});
