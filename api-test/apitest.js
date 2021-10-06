var query = "chicken";
var query2 = "vodka";

// edaman api test
function edamamTest() {
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
    });
}

edamamTest();

// cocktailDB test
function cocktailDBTest() {
  var url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + query2 +"&app_key=1";

  fetch(url)
    .then(function (response) {
      //   console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

cocktailDBTest();
