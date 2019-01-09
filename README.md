# Intro
The purpose of this project is to build an Amazon.com like ecommerce website using the front end skills that we should possess by now. You may be suprised that you have already learned all the skills necessary to do this.


# Setup
* Fork, Clone, Create a pull request
* As you complete each feature of the app; add, commit and push so that we can track your progress
#

# Instructions

## Products
* Look at products.js. Here we have an array of hard coded product objects which is put into a global variable `products`. Feel free to change this data as you see fit.


## UI
* All UI decisions are up to you. You can make it as styled or unstyled as you want.
* Its a good idea to use string template literals to dynamically construct html strings.
* There should probably be one function responsible for creating each dynamic UI content.
### Products
* Our site is very simple, we only have a few hard coded products and we display all the products on the front page. Decide how you would like to display the products in your web page. Use `<div> <ul>` or `<ol>`. Show the product name, rating, number of reviews and price. Include a link or button that should be clicked on so that you can see the details of the product. Our store is very simple, we just show every product there is by default
### Search
* Create a textbox that is going to be used to type in a product to search for. Put a button next to it to initiate the search.
### Shopping Cart
* Create a button somwhere on the page "View Cart", that when clicked will show the products in the user's cart. This will be another list of products, but this one should only show the products that have been added to the cart. Add a button for each product for "remove".
* There should be button for checkout
### Product Detail
* Decide how to show one single product. Display all the information that is on a product object. There should be a button for "Add to Cart". Add a `<select>` for quantity. Hard code the options from 1 to 10.
### Category
* Put a `<select>` somewhere on the page that will list out all the different product categories. The default option should be "--Choose--".
### Checkout
* Create a Form with inputs for First Name, Last Name and Email Address. Also have a submit button that says "Place Order"
* Show the total price of the order.




## Functionality
* Write all your code in index.js. If you want to seperate the code out even more, feel free to add more .js files as you see fit.

### List Out Products
* Use the array of products to dynamically create the html however you see fit. The map function might be useful for this. Think about using loops and appendChild or innerHtml. 
### Search
* When the user clicks on the search button, retrieve the text that is in the textbox and use it to filter the array of products on name or description. Rerun the code that generates the html so that the UI updates to only show the filtered products.
### View Details
* When the user clicks on the view details link or button; clear the existing page content. Build the html needed to show the details of one product on the page.
### Are You Still There
* Keep track of the user's activity. Create a global variable to keep track of whether the user has interacted with the webpage in the last minute. The variable will be true or false. Set it to true.
* Register an onclick event handler on the html body which will change this variable to true every time anything on the page is clicked.
* Research how to use setInterval. Check the variable every minute to test whether it is true or false. If it is false, call `alert("Are you still there?");` and then change it to true. If it is true, change it to false.
### Shopping Cart
* Research sessionStorage. This is where we are going to store the data for the cart so that it will stay put even after the page is refreshed.
* Research JSON.parse and JSON.stringify
* sessionStorage only saves strings so we need to convert from an array to a string and visa versa
* Add an item to sessionStorage called "cart", it should be an array
### Add to Cart
* When add to cart is clicked from the product detail, retrieve the cart item from the sessionStorage. Convert it from a string to an array. Push the product object to this array. Convert the array back to a string and save it back into sessionStorage
### View Cart
* When the View Cart button is clicked, clear the screen and construct a list of the products that are in the cart. Also show a button "Checkout" that when clicked will show the check out form.
### Category
* When the category drop down is changed, filter the array of products on the category property and update the UI to show this.
### Checkout
* When the Checkout button is clicked change the UI to show the check out form.

## Debug  
* Make sure you know how to debug with console.log
* Ensure functions are being called by using console.log to see if the code was executed
## Open the page
* Simply open the index.html file in a chrome browser window. Double click on the file or use the menu -> file -> open file
* Refresh the browser whenever you make changes to see if they worked.
## Questions
* Why is storing the shopping cart in sessionStorage not the best choice?
* What should happen when the Place Order button is clicked?


## Server
* https://acastore.herokuapp.com/
