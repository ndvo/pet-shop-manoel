const template = document.querySelector('#product-template');
const productContainer = document.querySelector('#product-container');

if (localStorage.getItem('products')) {
      console.log(localStorage.getItem('products'));
      let data = JSON.parse(localStorage.getItem('products')) || [];

      data.forEach(item => {
            const row = template.content.cloneNode(true);
            row.querySelector('.card-img-top').setAttribute('src', `assets/img/${item.image}`);
            row.querySelector('.card-title').textContent = item.name;
            row.querySelector('.card-text').textContent = "$ " + item.price.toFixed(2);
            productContainer.appendChild(row);
      });
}



