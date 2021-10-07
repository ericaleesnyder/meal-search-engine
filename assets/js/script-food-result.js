//HOMEPAGE

//navbar - grab from Ragha's page and then:
//confirm links work

//search bar - user input is an ingredient
//when you click search, 
//brings you to the food results page
//food results page uses the user input as the query variable to display recipes on cards

//food results page
//if the user wants a different ingredient, the search tool re-runs the api pull with new query variable
//WHEN search is initiated
//THEN recipe cards are created with an icon to click on for a favorite, name (label), cuisine type, dish type, meal type, a link
//the user can "favorite" a recipe - favorited recipes stored in aside (think weather homework) - and the favorites page gets these variables too
//ADD NEXT BUTTON FOR DRINKS SEARCH PAGE

//drinks results page
//Search tool still in top left - user types ingredient and chooses alcoholic vs non alcoholic
//WHEN search is initiated
//THEN recipe cards are created with an icon to click on for a favorite, name (label), cuisine type, dish type, meal type, a link
//the user can "favorite" a recipe - favorited recipes stored in aside (think weather homework) - and the favorites page gets these variables too
//ADD NEXT BUTTON FOR FAVORITES PAGE

//FAVORITES PAGE NEEDS TO GET THE USER SELECTIONS FROM PREVIOUS TWO PAGES - local storage
//all of the favorited recipes (food and drinks) will be displayed
//each recipe card has the name + link

//VALERIA - search button savies the user input as query variable to local storage AND brings user to food results page
//ELENA - set variables based on API pulls for :
//name (label)
//cuisine type
//dish type
//meal type
//url

//ERICA - work on "favorite" funtionality
//after elena creates variables, JS for creating the cards with the stuff
//give riri an array with placeholder recipes and links so she can write the JS to create cards from the array
// [{"chicken parmesan", "https://......"},
//{"chicken parmesan", "https://......"},
//{"risotto", "https://......"}]

//RAGHAD - write the JS to create cards from the array

// var favoritedRecipes = [
//   {name: "chicken parmesan", url: "https://cafedelites.com/crispy-chicken-parmesan/"},
//   {name: "eggplant parmesan", url: "https://www.foodnetwork.com/recipes/food-network-kitchen/eggplant-parmesan-recipe-2008982"},
//   {name: "margarita", url: "https://www.liquor.com/recipes/margarita/"},
// ]

// function getParams() {
//      // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//      var searchParamsArr = document.location.search;
   
//      // Get the query and format values
//      var query = searchParamsArr[0].split('=').pop();
   
//      getRecipes(query);
//    }
var userFavs = document.getElementById('user-favorites')
var favoritedRecipes = []

var cardDisplay = document.getElementById('card-display');
var favBtn = document.getElementsByClassName('favorite-button');
var drinksPage = document.getElementById('drinks-page');
var newSearch = document.getElementById('new-search');
var ingredientSearch = document.getElementById('ingredient-search');

var query = document.location.search.substr(1);
var searchTitle = document.getElementById('search-title');
searchTitle.textContent = query.substr(2) + ' Recipes';

function getRecipes() {
  
  var url =
  "https://api.edamam.com/api/recipes/v2?type=public&" +
  query +
  "&app_id=618defa3&app_key=c8342ea913a133a4c769f56f5867b798&random=true";


  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var hits = data.hits;
      console.log(hits); 
      
      for (var i=0; i < 11; i++){
        renderRecipes(hits[i]);
      }
    }
    );
}

if (query !== ""){
  getRecipes();
}

function renderRecipes (recipeData) {
  var cardCol = document.createElement("div");
  cardCol.setAttribute('class', "col s12");

  var cardBgrnd = document.createElement("div");
  cardBgrnd.setAttribute('class',"card recipe-card darken-1");
  
  var card = document.createElement("div");
  card.setAttribute('class',"card-content white-text");

  var cardTitle = document.createElement('span');
  cardTitle.setAttribute('class',"card-title");
  cardTitle.textContent = recipeData.recipe.label;

  var recipeDataCuisine = document.createElement('p');
  recipeDataCuisine.textContent = recipeData.recipe.cuisineType[0];

  var recipeDataMeal = document.createElement('p');
  recipeDataMeal.textContent = recipeData.recipe.mealType[0];

  var cardAction = document.createElement('div');
  cardAction.setAttribute('class', 'card-action');
  
  var cardUrl =document.createElement('a');
  cardUrl.setAttribute('href', recipeData.recipe.url);
  cardUrl.setAttribute('target', 'blank')
  cardUrl.textContent = "Recipe Link"

  var newFavBtn = document.createElement('a');
  newFavBtn.setAttribute('class',"btn-floating btn waves-effect waves-light favorite-button");

  var icon = document.createElement('i');
  icon.setAttribute('class', 'material-icons');
  icon.textContent = '+';

  cardDisplay.appendChild(cardCol);
  cardCol.appendChild(cardBgrnd);
  cardBgrnd.appendChild(card);
  card.appendChild(cardTitle);
  card.append(recipeDataCuisine);
  card.append(recipeDataMeal);
  card.append(cardAction);
  cardAction.appendChild(cardUrl);
  cardAction.appendChild(newFavBtn);
  newFavBtn.appendChild(icon);
}

function renderFavs () {
  userFavs.innerHTML="";
  
  for (var i =0; i < favoritedRecipes.length; i++) {
    var recipeAdd = favoritedRecipes[i].name;
    var urlAdd = favoritedRecipes[i].url;
    var favoritedBtn = document.createElement('a');
    
    favoritedBtn.textContent = recipeAdd
    favoritedBtn.setAttribute('data-index', i);
    favoritedBtn.setAttribute('class', 'waves-effect waves-light btn button');
    favoritedBtn.setAttribute('href', urlAdd)
    favoritedBtn.setAttribute('target', 'blank');
    
    userFavs.appendChild(favoritedBtn);
  }
};

function init () {
  var storedFavs = JSON.parse(localStorage.getItem('fav food'));
  if (storedFavs !== null){
    favoritedRecipes = storedFavs
  }
  renderFavs();
}

function storeFav () {
  localStorage.setItem('fav food', JSON.stringify(favoritedRecipes));
}

cardDisplay.addEventListener('click', function (event) {
  var element = event.target;
 
  if (element.matches('i')) {
    var recipeName = element.parentElement.parentElement.parentElement.firstChild.textContent;
    var recipeUrl = element.parentElement.parentElement.firstChild.href;
    console.log(recipeUrl);
    
    favoritedRecipes.push({name: recipeName, url: recipeUrl});
    
    renderFavs();
    storeFav();
  }
})

function newFoodSearch(event) {
  event.preventDefault();
  var searchInput = ingredientSearch.value;

  var newQuery = './food-results.html?q='+ searchInput;
  location.assign(newQuery);
}

newSearch.addEventListener('click', newFoodSearch);

drinksPage.addEventListener('click', function() {
  var drinksLocation = "./drink-results.html";
  location.assign(drinksLocation);
})

init();


// FOR "BACK TO FOOD RECIPE RESULTS" BTN:
// ADD EVENT LISTENER 
// (CAN REMOVE THE A TAG BC THE A IS WITHIN A BUTTON. KEEP THE TEXT, BUT REMOVE THE A)
// ON CLICK
// WINDOW.HISTORY.BACK 

// backButton.addEventListener('click', 'function() {
//     window.history.back();
// })

// might need a prevent default, we'll find out 