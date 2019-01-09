const listProducts = document.getElementById("listProducts");

listProducts.innerHTML = products.map(item=>`<li>${item.name}</li>`);

const searchSubmit = document.getElementById('searchSubmit');
