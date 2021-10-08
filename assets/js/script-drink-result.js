var apiKey = "&app_key=1";
var searchInput = $("#search-input");
var searchForm = $("#search-form");
var apiRecipeURL = "https://www.thecocktaildb.com/drink/";
var allDrinks = {};
var allFavoriteDrinkJSON = localStorage.getItem("favorite-drinks");

function handleFormSubmit(event) {
  event.preventDefault();
  var query = searchInput.val().trim();
    if (query) {
    searchDrinks(query);
    searchInput.val("");
    }
}

function searchDrinks(query) {
  var url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    query +
    apiKey;

    $("#drinks-container").empty();
    allDrinks = {};
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log(data.drinks);
      var loopCnt;
      if(data.drinks.length < 10 ) {
        loopCnt = data.drinks.length;
      } else {
        loopCnt = 10;
      }
      for (var i = 0; i < loopCnt; i++) {
        var drink = data.drinks[i];
        var urlRecipe = apiRecipeURL + drink.idDrink + '-' + drink.strDrink.replace(" ", "-");
        drink['recipe-url'] = urlRecipe;
        // Save drinks to allDrinks object for later
        allDrinks[drink.idDrink] = drink;
        var drinkCard = $("#hidden-drink").clone(true);
        drinkCard.find(".card-title").text(drink.strDrink);
        drinkCard.find(".recipe-link").attr("href", urlRecipe);
        drinkCard.find(".favorite-btn").attr("drink-id", drink.idDrink);
        drinkCard.appendTo("#drinks-container");
        // Set new id to recipe container to override hidden and make it show 
        drinkCard.attr("id", "show-drink");
      }
    });
}

searchForm.on("click", handleFormSubmit);

$(".favorite-btn").on("click", function() {
    var drinkId = $(this).attr("drink-id");
    // Get saved favorite drinks
    var favoriteDrinksJSON = localStorage.getItem("favorite-drinks");
    var favoriteDrinks = {};
    // Check if there are previously saved drinks
    if(favoriteDrinksJSON != null) {
        // If there are saved drinks, convert it to an object so we can add to it
        favoriteDrinks = JSON.parse(favoriteDrinksJSON);
    }
    if(!(drinkId in favoriteDrinks)) {
        // Add favorite drink
        favoriteDrinks[drinkId] = allDrinks[drinkId];
        // Save new drink list to local storage
        localStorage.setItem("favorite-drinks", JSON.stringify(favoriteDrinks));
        var favoriteBtn = $("#hidden-btn").clone(true);
        favoriteBtn.attr("id", "");
        favoriteBtn.attr("href", favoriteDrinks[drinkId].urlRecipe);
        favoriteBtn.text(favoriteDrinks[drinkId].strDrink);
        favoriteBtn.appendTo("#favorite-btn-container");
        console.log(drinkId);
    
    }
});

// Check localstorage has "favorite-drinks" variable
if(allFavoriteDrinkJSON != null) {
    // Convert your json data into an object
    var allFavoriteDrink = JSON.parse(allFavoriteDrinkJSON);
    // Loop through objects
    for(const drink in allFavoriteDrink) {
        // Get drink
        var favoriteDrink = allFavoriteDrink[drink];
        // Select and copy your hidden favorite button template
        var favoriteBtn = $("#hidden-btn").clone(true);
        // Build your recipe api url
        var recipeURL = apiRecipeURL + favoriteDrink.idDrink + '-' + favoriteDrink.strDrink.replace(" ", "-");
        // remove the id so that the hidden styling won't be there
        favoriteBtn.attr("id", "");
        // update the href to the api url
        favoriteBtn.attr("href", recipeURL);
        // Change the button text to the drink name
        favoriteBtn.text(favoriteDrink.strDrink);
        // append new button to the favorite section
        favoriteBtn.appendTo("#favorite-btn-container");
    }
}

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
}