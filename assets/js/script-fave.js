var favoritedRecipes = [];

let storeFav = JSON.parse(localStorage.getItem("fav food")) || [];

function displayFavCards(favArr) {
  for (let i = 0; i < favArr.length; i++) {
    document.getElementById("cardDiv").innerHTML += `
     <div class="card small red lighten-5">
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
      `;
  }
}
displayFavCards(storeFav);

let storeFavDrinks = Object.values(
  JSON.parse(localStorage.getItem("favorite-drinks"))
);
function displayFavCardsDrinks(favArr) {
  for (let i = 0; i < favArr.length; i++) {
    document.getElementById("cardDiv").innerHTML += `
     <div class="card small teal lighten-5">
        <div class="card-content">
          <p>
          ${storeFavDrinks[i].strDrink}
          </p>
        </div>
        <div class="card-tabs">
          <ul class="card-action">
         <li class="tab"><a href="${storeFavDrinks[i]["recipe-url"]}">Link</a></li>
          </ul>
        </div>
      </div>
      `;
  }
}
displayFavCardsDrinks(storeFavDrinks);

// this is the JQUry function for the navbar must be copied
$(document).ready(function () {
  $(".sidenav").sidenav();
});
