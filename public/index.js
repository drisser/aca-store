'use strict'

//list of products

const listProducts = document.getElementById("listProducts");

listProducts.innerHTML = products.map(item=>`<li>${item.name}, ${item.price}<br>Rating: ${item.rating}/5 - Total Reviews: ${item.reviewed} <br><button onclick="viewDetails()">Details</button></li>`).join('');

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

function viewDetails() {
  console.log("hello")
}


