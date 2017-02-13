'use strict';

var stores = [pike, seaTac, seaCenter, capHill, alki];
function randomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookPerHrArray: [],
  CookPerHr: function(){
    for (var i = 0; i < 15; i++){
      var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
      console.log(cookies);
      this.cookPerHrArray.push(cookies);
    }
  }
};
var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  CookPerHr: function(){
    for (var i = 0; i < 15; i++){
      var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
      console.log(cookies);
      this.cookPerHrArray.push(cookies);
    }
  }
};

var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  CookPerHr: function(){
    for (var i = 0; i < 15; i++){
      var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
      console.log(cookies);
      this.cookPerHrArray.push(cookies);
    }
  }
};

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  CookPerHr: function(){
    for (var i = 0; i < 15; i++){
      var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
      console.log(cookies);
      this.cookPerHrArray.push(cookies);
    }
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  CookPerHr: function(){
    for (var i = 0; i < 15; i++){
      var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
      console.log(cookies);
      this.cookPerHrArray.push(cookies);
    }
  }
};

console.log('Pike');
pike.CookPerHr();

//console.log(pike.cookPerHrArray);
// console.log(pike);
function display(store){
  var total = 0;
  for (var i = 6; i < 21; i++){
    if (i < 13){
      console.log(i + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
    } else {
      var time = i - 12;
      console.log(time + 'pm: ' + store.cookPerHrArray[i - 6] + ' cookies');
    }
    total += store.cookPerHrArray[i - 6];
  }
  console.log('Total: ' + total + ' cookies');
};

for (var i = 0; i < stores.length; i++){
  var location = stores[i];
  //location.CookPerHr();
  //console.log(location.name);
  display(location);
}
//display(pike);
//display(alki);
