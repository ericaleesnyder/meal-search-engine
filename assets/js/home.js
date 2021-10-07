
// var searchHistory = [];
// var form = ("#searchForm");
// var searchInput = ("#searchBox");
// var searchHistoryContainer = ("#search-history");


//MY ATTEMPT (: --Val--
// document.getElementById("btn").addEventListener("click", function(event) { 
//     event.preventDefault();
//     console.log('ITS WORKING')  
//     var textInput = document.querySelector("#searchBox").value;
//     var foodURL = "https://api.edamam.com/api/recipes/v2?type=public&q="+textInput+"&app_id=618defa3&app_key=c8342ea913a133a4c769f56f5867b798"
//     console.log(foodURL);
//     fetch(foodURL)
//     .then(function (response) {
//     return response.json();
//     })
//     .then(function (data) {
//     console.log(data);
// });
// });
//------NOT THIS>--
//for (var i = 0; i < data.length; i++) {
    // console.log(data[i].textInput);
    // } 
//MY ATTEMPT (: --VAL--

//-- DON'T MIX WITH CODE ABOVE --//
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
            console.log('yet?')

    location.assign(queryString);
    
}
document.querySelector('#searchForm').addEventListener('submit', handleSearchFormSubmit);
//searchFormEl.addEventListener('submit', handleSearchFormSubmit);
console.log("Valeria Test");
//----------------SENDS YOU TO THE NEXT PAGE-------
 //what errica will need to fetch params:
//  var resultTextEl = document.querySelector('#result-text');
//  var resultContentEl = document.querySelector('#result-content');
//  //-dont need- var searchFormEl = document.querySelector('#search-form');
 
//  function getParams() {
//    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//    var searchParamsArr = document.location.search;
 
//    // Get the query and format values
//    var query = searchParamsArr[0].split('=').pop();
 
//    searchApi(query);
//  }
 
//  function printResults(resultObj) {
//    console.log(resultObj);
 
//    // set up `<div>` to hold result content
//    var resultCard = document.createElement('div');
//    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
 
//    var resultBody = document.createElement('div');
//    resultBody.classList.add('card-body');
//    resultCard.append(resultBody);
 
//    var titleEl = document.createElement('h3');
//    titleEl.textContent = resultObj.title;
 
//    var bodyContentEl = document.createElement('p');
//    bodyContentEl.innerHTML =
//      '<strong>Date:</strong> ' + resultObj.date + '<br/>';
 
//    if (resultObj.subject) {
//      bodyContentEl.innerHTML +=
//        '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
//    } else {
//      bodyContentEl.innerHTML +=
//        '<strong>Subjects:</strong> No subject for this entry.';
//    }
 
//    if (resultObj.description) {
//      bodyContentEl.innerHTML +=
//        '<strong>Description:</strong> ' + resultObj.description[0];
//    } else {
//      bodyContentEl.innerHTML +=
//        '<strong>Description:</strong>  No description for this entry.';
//    }
 
//    var linkButtonEl = document.createElement('a');
//    linkButtonEl.textContent = 'Read More';
//    linkButtonEl.setAttribute('href', resultObj.url);
//    linkButtonEl.classList.add('btn', 'btn-dark');
 
//    resultBody.append(titleEl, bodyContentEl, linkButtonEl);
 
//    resultContentEl.append(resultCard);
//  }
 







 //--------------------THE FOOD DISPLAY-----------
// function getParams() {
//     // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//     var searchPArr = document.location.search;
//     // Get the query and format values
//     var query = searchPArr[0].split('=').pop();
//     console.log(query);
  
//     //searchApi(query);
// };
//-- DON'T MIX WITH CODE ABOVE YET--//
  


//VALERIA - search button savies the user input as query variable to local storage AND brings user to food results page
//ELENA - set variables based on API pulls for :
//name (label)
//cuisine type
//dish type
//meal type

