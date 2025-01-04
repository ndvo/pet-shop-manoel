document.addEventListener('DOMContentLoaded', () => {

      insertLocalStorage();
      fillProductsData();

      function fillProductsData() {
            let template = document.querySelector('#product-template');
            let productContainer = document.querySelector('#product-container');
           
            let productsData = JSON.parse(localStorage.getItem('products')) || [];

            productsData.forEach(item => {
                  const row = template.content.cloneNode(true);
                  row.querySelector('.card-img-top').setAttribute('src', `assets/img/${item.image}`);
                  row.querySelector('.card-title').textContent = item.name;
                  row.querySelector('.card-text').textContent = "$ " + item.price.toFixed(2);
                  productContainer.appendChild(row);
            });
      }
});




