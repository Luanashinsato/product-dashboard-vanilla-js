// Task 2: Fetch Products with .then()
const BASE_URL = 'https://www.course-api.com/javascript-store-products'; // API URL for fetching product data

// Creating a function that uses fetch() with .then() to get product data from the base url 
function fetchProductsThen() {
  fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Error handling if the response is unsuccessful
      }
      return response.json(); // Parsing the response as JSON
    })
    .then(products => {
      products.forEach(product => console.log(product.fields.name));
    }) // Logging each product’s name to the console
    .catch(error => {
      console.error('Fetch failed:', error);
    }); // Using .catch() to log any errors
}