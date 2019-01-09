//list of products
const listProducts = document.getElementById("listProducts");

listProducts.innerHTML = products.map(item=>`<li>${item.name}</li>`).join('');

//search for products

const searchBox = document.getElementById('searchBox');
const searchInput = searchBox.toLowerCase;
const searchSubmit = document.getElementById('searchSubmit');
const searchResults = document.getElementById('searchResults');

const results = products.filter(item=>item.name.indexOf(searchInput) > -1);

searchSubmit.addEventListener('click', function(){
  searchResults.innerHTML = results.map(result=>`<p>${result.name}</p>`)})