const template = document.querySelector('#product-template');
const productContainer = document.querySelector('#product-container');

const data = [
      { image: 'dogfood.jpg', product: 'Dog Food', price: "$100" },
      { image: 'catfood.jpg', product: 'Cat Food', price: "$50" },
      { image: 'ratfood.jpg', product: 'Rat Food', price: "$10" },
      { image: 'fishfood.jpg', product: 'Fish Food', price: "$1" },
      { image: 'doghouse.jpg', product: 'Dog House', price: "$100" },
      { image: 'aquarium.jpg', product: 'Aquarium', price: "$500" }
];

data.forEach(item => {
      const row = template.content.cloneNode(true);
      row.querySelector('.card-img-top').setAttribute('src', `assets/img/${item.image}`);
      row.querySelector('.card-title').textContent = item.product;
      row.querySelector('.card-text').textContent = item.price;
      productContainer.appendChild(row);
});

