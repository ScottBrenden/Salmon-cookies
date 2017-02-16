'use strict';

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

function randomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStore(name, minCust, maxCust, avgCookies, identity){
  this.name = name,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookies = avgCookies,
  this.identity = identity,
  this.cookPerHrArray = [];
  this.totalCook = 0;
}

var timeArr = [];
for (var i = 6; i < 21; i++){
  if (i < 12){
    timeArr.push(i + ':00am');
  } else if (i == 12) {
    timeArr.push('12:00pm');
  } else {
    var time = i - 12;
    timeArr.push(time + ':00pm');
  }
};
//console.log(timeArr);

var storeStrings = ['pike', 'seaTac', 'seaCenter', 'capHill', 'alki'];

var pike = new CookieStore('1st and Pike', 23, 65, 6.3, 'pike');
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2, 'seaTac');
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7, 'seaCenter');
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3, 'capHill');
var alki = new CookieStore('Alki', 2, 16, 4.6, 'alki');

var stores = [pike, seaTac, seaCenter, capHill, alki];

CookieStore.prototype.cookPerHr = function(){
  for (var i = 0; i < 15; i++){
    var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
    //console.log(cookies);
    this.cookPerHrArray.push(cookies);
  }
};

CookieStore.prototype.totalCookies = function(){
  var total = 0;
  for (var i = 0; i < 15; i++){
    this.totalCook += this.cookPerHrArray[i];
  }
  return this.totalCookies;
};

for (var i = 0; i < stores.length; i++){
  stores[i].cookPerHr();
  stores[i].totalCookies();
}
console.log(pike.cookPerHrArray);
console.log(pike);

newElement('table', 'id', 'master-table', 'store-stats', '');
function displayTableHead(){
  newElement('thead', 'id', 'table-head', 'master-table', '');
  newElement('tr', 'id', 'row-header', 'table-head', '');
  newElement('th', 'class', 'table-header', 'row-header', 'Store');
  for (var i = 0; i < timeArr.length; i++){
    newElement('th', 'class', 'table-header', 'row-header', timeArr[i]);
  }
  newElement('th', 'class', 'table-header', 'row-header', 'Daily Totals');
  newElement('tbody', 'id', 'table-body', 'master-table', '');
}

CookieStore.prototype.render = function(){
  newElement('tr', 'id', ('row' + this.identity), 'table-body', '');
  newElement('th', 'class', this.identity, ('row' + this.identity), this.name);
  for (var i = 0; i < this.cookPerHrArray.length; i++){
    newElement('td', 'class', this.identity, ('row' + this.identity), this.cookPerHrArray[i]);
  }
  newElement('td', 'class', this.identity, ('row' + this.identity), this.totalCook);
  //console.log(stores[i].cookPerHrArray.length);
};

displayTableHead();

var newStoreForm = document.getElementById('new-store-form');
newStoreForm.addEventListener('submit', newStoreSubmit);

function newStoreSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  var name = event.target.cookieStoreName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  // Create a new object.
  var newStore = new CookieStore(name, minCust, maxCust, avgCookies);
  stores.push(newStore); // Pushes new store into stores array.

  newStore.cookPerHr();
  newStore.totalCookies();
  newStore.render();
}

for (var i = 0; i < stores.length; i++){
  stores[i].render();
}
//----------------Demo area------------------------V
