



//-- SEARCH SAVES THE INPUT AND TAKES IT TO THE NEXT PAGE --//
var searchFormEl = document.querySelector('#searchForm');
function handleSearchFormSubmit(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector('#searchBox').value;

    if (!searchInputVal) {
        console.error('You need a search input value!');
        return;
        }

    var queryString =
        './food-results.html?q=' + searchInputVal;
            

    location.assign(queryString);
    
}
document.querySelector('#searchForm').addEventListener('submit', handleSearchFormSubmit);
//searchFormEl.addEventListener('submit', handleSearchFormSubmit);
console.log("Valeria Test");
//----------------SENDS YOU TO THE NEXT PAGE-------//


 // this is the JQUry function for the navbar must be copied
$(document).ready(function () {
  $(".sidenav").sidenav();
});


