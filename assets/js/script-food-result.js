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

// function displayFoodResults(results) {
//   // console.log(results); 
//   // may need this to checkout the full data response 
//   for (var i = 0; i < results.length; i++) {
//   // the results should return an array of 20 items
//     var result = results[i];
    // var name = result.ingredients.lable; RESULTS.INGREDIENTS.LABLE WILL BE THE TEXT CONTENT FOR CARD-TITLE
//     var cuisineType = result.cuisineType[0];
//     var mealType = result.mealType[0];
//     var url = result.url;

//   //write code to display the variables
    
//   }
// }



var userFavs = document.getElementById('user-favorites')
var favoritedRecipes = []

var cardDisplay = document.getElementById('card-display');
var favBtn = document.getElementsByClassName('favorite-button');

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