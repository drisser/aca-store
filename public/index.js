'use strict'

let cart = [];

// onload function

window.onload = function(){
    cart = JSON.parse(sessionStorage.getItem("cart"));
    if (!cart){
      cart = [];
    }
  }

//list of products

const listProducts = document.getElementById("listProducts");

listProducts.innerHTML = products.map(item=>`<li>${item.name}, ${item.price}<br>Rating: ${item.rating}/5 - Total Reviews: ${item.reviewed} <br><button onclick="viewDetails(${item._id-1})">Details</button></li>`).join('');

//search for products

const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

function searchProducts(){
    let filteredProducts = [];
    products.forEach((item) => {
        let nameArray = item.name.split(' ')
        nameArray.filter(names =>{
            if(names == searchBox.value){
                filteredProducts.push(item.name)
            }
        })
    })
    searchResults.innerHTML = filteredProducts.map(product => `<li>${product}</li>`).join('')
}

// show detailed view of product

const productDetail = document.getElementById("productDetail");

const selectNumber = `<select><option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option></select>`

function viewDetails(index) {
  productDetail.innerHTML = `<h3>Details</h3><br><p>${products[index].name}</p> <p>Info: ${products[index].description}</p> <p>Type: ${products[index].category}</p> <p>Rating: ${products[index].rating}/5</p> <button>Reviews <i class="fas fa-star-half-alt"></i></button> <button onclick="addToCart(${index})">Add To Cart <i class="fas fa-cart-plus"></i></button> ${selectNumber}`;
}

// create shopping cart, add iteams to shopping cart, use sessionStorage with cart

const shoppingCart = document.getElementById("shoppingCart");
function addToCart(index){
    cart.push(products[index].name, products[index].price), shoppingCart.innerHTML = `<h3>Shopping Cart</h3> ${cart}`; 
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function viewCart(){
    shoppingCart.innerHTML = `<h3>Shopping Cart</h3> ${cart}`
}

// use select feature by search bar

const selectProduct = document.getElementById("selectProduct");

function selectFood(){
    listProducts.innerHTML = products.map(item=>`<li>${item.name}</li>`).join('');
}



