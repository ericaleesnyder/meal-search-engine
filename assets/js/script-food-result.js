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





var userFavs = document.getElementById('user-favorites')
var favoritedRecipes = []

var cardDisplay = document.getElementById('card-display');
var favBtn = document.getElementsByClassName('favorite-button');

var query = "chicken";

// edaman api test
function getRecipes() {
  // var id = "618defa3";
  // var key = "c8342ea913a133a4c769f56f5867b798"

  var url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    query +
    "&app_id=618defa3&app_key=c8342ea913a133a4c769f56f5867b798&random=true";

  fetch(url)
    .then(function (response) {
      //   console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var hits = data.hits;
      console.log(hits); 
      
      for (var i=0; i < hits.length; i++){
        renderRecipes(hits[i]);
      }
      // var result = hits[i]
      // var name = result.recipe.label;
      // var cuisineType = result.recipe.cuisineType[0];
      // var mealType = result.recipe.mealType[0];
      // var url = result.recipe.url;
    });
}

getRecipes();

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
  cardTitle.append(recipeDataCuisine);
  recipeDataCuisine.append(recipeDataMeal);
  recipeDataMeal.append(cardAction);
  cardAction.appendChild(cardUrl);
  cardUrl.append(newFavBtn);
  newFavBtn.appendChild(icon);
}

function renderFavs () {
  userFavs.innerHTML="";
  
  for (var i =0; i < favoritedRecipes.length; i++) {
    var recipeAdd = favoritedRecipes[i].name;
    var favoritedBtn = document.createElement('a');
    
    favoritedBtn.textContent = recipeAdd
    favoritedBtn.setAttribute('data-index', i);
    favoritedBtn.setAttribute('class', 'waves-effect waves-light btn button')
    
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
  event.preventDefault();
  
  var element = event.target;
 
  if (element.matches('i')) {
    var recipeName = element.parentElement.parentElement.parentElement.firstChild.nextSibling.textContent;
    console.log(recipeName);
    
    
    favoritedRecipes.push({name: recipeName, url:"url"});
    
      
    renderFavs();
    storeFav();
  }

})

init();