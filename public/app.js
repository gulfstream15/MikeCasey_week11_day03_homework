var app = function(){

  var url = 'https://api.punkapi.com/v2/beers';

  makeRequest(url, function () {
    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);
    render(beers);
  });

}

var makeRequest = function (url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

var render = function (beers) {
  var storedBeer = localStorage.getItem('selectedBeer');
  var beerToDisplay = null;

  if (storedBeer) {
    beerToDisplay = JSON.parse(storedBeer);
    var select = document.querySelector('#beers');
    select.selectedIndex = beerToDisplay.index;
  }
  else {
    beerToDisplay = beers[0];
  }

  populateSelect(beers);
  updateInfo(beerToDisplay);
}

window.addEventListener('load', app);