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

function CookieStore(name, minCust, maxCust, avgCookies){
  this.name = name,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookies = avgCookies,
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

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

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

// console.log('test');
for (var i = 0; i < stores.length; i++){
  stores[i].cookPerHr();
  stores[i].totalCookies();
}
console.log(pike.cookPerHrArray);
console.log(pike);

newElement('table', 'id', 'master-table', 'store-stats', '');
function renderHead(){
  newElement('thead', 'id', 'table-head', 'master-table', '');
  newElement('tr', 'id', 'row-header', 'table-head', '');
  newElement('th', 'class', 'table-header', 'row-header', 'Store');
}
function render(){
  for (var i = 0; i < timeArr.length; i++){
    newElement('th', 'class', 'table-header', 'row-header', timeArr[i]);
  }
  newElement('th', 'class', 'table-header', 'row-header', 'Daily Totals');
  newElement('tbody', 'id', 'table-body', 'master-table', '');
  for (var i = 0; i < stores.length; i++){
    newElement('tr', 'id', ('row' + i), 'table-body', '');
    newElement('th', 'class', storeStrings[i], ('row' + i), stores[i].name);
    for (var j = 0; j < stores[i].cookPerHrArray.length; j++){
      newElement('td', 'class', storeStrings[i], ('row' + i), stores[i].cookPerHrArray[j]);
      //console.log(i);
      //console.log(j);
    }
    newElement('td', 'class', storeStrings[i], ('row' + i), stores[i].totalCook);
    //console.log(stores[i].cookPerHrArray.length);
  }
}

renderHead();
render();
//----------------Demo area------------------------V
