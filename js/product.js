const template = document.querySelector('#product-template');
const tableContainer = document.querySelector('#product-div-table');

const data = [
  { product: 'Dog Food', price: $100 },
  { product: 'Cat Food', price: $50 },
  { product: 'Rat Food', price: $10 },
  { product: 'Fish Food', price: $1 },
  { product: 'Dog House', price: $100 },
  { product: 'Aquarium', price: $500 },
];

data.forEach(item => {
  const row = template.content.cloneNode(true);
  row.querySelector('.cell:nth-child(1)').textContent = item.product;
  row.querySelector('.cell:nth-child(2)').textContent = item.price;
  tableContainer.appendChild(row);
});
