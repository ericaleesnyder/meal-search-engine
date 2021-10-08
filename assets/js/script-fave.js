//RAGHAD - write the JS to create cards from the array

var favoritedRecipes = [];


let storeFav = JSON.parse(localStorage.getItem("fav food")) || []; 
// console.log(storeFav[0].name)

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
            <li class="tab"><a href="${storeFav[i].url}" target="blank">Link</a></li>
          </ul>
        </div>
      </div>
      `
}};

displayFavCards(storeFav);

var favoriteDrinksJSON = localStorage.getItem("favorite-drinks");
var favoriteDrinks = {};
if(favoriteDrinksJSON != null) {
    // If there are saved drinks, convert it to an object so we can add to it
    favoriteDrinks = JSON.parse(favoriteDrinksJSON);
}
for(const drinkId in favoriteDrinks) {
    var drinkName = favoriteDrinks[drinkId].strDrink;
    console.log(favoriteDrinks[drinkId]);
    console.log(drinkName);
    var drinkUrl = favoriteDrinks[drinkId]['recipe-url'];
    console.log(drinkUrl);
    var newDrink = $("#drink-card").clone(true);
    newDrink.attr("id", "");
    newDrink.find(".drink-name").text(drinkName);
    newDrink.find(".tab").find("a").attr("href", drinkUrl);
    newDrink.appendTo("#cardDiv");
}

// when page load
// check local storage for the storeFav

// get values from the user input

// if value are valid

// display it in the screen

// var userInput = document.JSON
