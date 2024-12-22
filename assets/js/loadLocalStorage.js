
function getListProducts() {
    const data = [
        { id: 1, image: 'dogfood.jpg', name: 'Dog Food', price: 100},
        { id: 2, image: 'catfood.jpg', name: 'Cat Food', price: 50 },
        { id: 3, image: 'ratfood.jpg', name: 'Rat Food', price: 10 },
        { id: 4, image: 'fishfood.jpg', name: 'Fish Food', price: 1 },
        { id: 5, image: 'doghouse.jpg', name: 'Dog House', price: 100 },
        { id: 6, image: 'aquarium.jpg', name: 'Aquarium', price: 500 }
    ];
    return data;
}

function insertLocalStorage() {
    if (!localStorage.getItem('products')) {
        let listProducts = getListProducts();
        localStorage.setItem('products', JSON.stringify(listProducts));
    }
}


