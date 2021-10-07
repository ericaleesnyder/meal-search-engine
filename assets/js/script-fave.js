//RAGHAD - write the JS to create cards from the array

var favoritedRecipes = [];


let storeFav = JSON.parse(localStorage.getItem("fav food")) || []; 
console.log(storeFav[0].name)

function displayFavCards (favArr) {
  for(let i =0; i < favArr.length; i++){
     document.getElementById("cardDiv").innerHTML+=`
     <div class="card small">
        <div class="card-content">
          <p>
          ${storeFav[i].name}
          </p>
        </div>
        <div class="card-tabs">
          <ul class="card-action">
            <li class="tab"><a href="${storeFav[i].url}">Link</a></li>
          </ul>
        </div>
      </div>
      `
}};

displayFavCards(storeFav);



// when page load
// check local storage for the storeFav

// get values from the user input

// if value are valid

// display it in the screen

// var userInput = document.JSON
