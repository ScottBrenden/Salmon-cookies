'use strict';
function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

var timeArr = [];
for (var i = 6; i < 21; i++){
  if (i < 13){
    timeArr.push(i + ':00am');
  // } else if (i = 12) {
  //   timeArr.push('12:00pm');
  } else {
    var time = i - 12;
    timeArr.push(time + ':00pm');
  }
};
console.log(timeArr);

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
  for (var i = 0; i < 15; i++){
    this.totalCookies += this.cookPerHrArray[i];
  }
};
// pike.cookPerHr();
// console.log('test');

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
  this.totalCookies = 0;
}

// console.log(pike.cookPerHrArray);
console.log(pike);

newElement('table', 'id', 'master-table', 'store-stats', '');
newElement('thead', 'id', 'table-head', 'master-table', '');
newElement('tr', 'id', 'row-header', 'table-head', '');
newElement('th', 'class', 'table-header', 'row-header', 'Store');
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
  }
  newElement('td', 'class', storeStrings[i], ('row' + i), stores[i].totalCookies);
}

// hrlist(pike);
// console.log(stores[0]);

//display(pike);
//display(alki);
//----------------Demo area------------------------V

// var tableEl = document.createElement('table');
//
// for(var i = 0; i < stores.length; i++){
//   var currentStore = stores[i];
//
//   var rowEl = document.createElement('tr');
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.name;
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.nimCust;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxCust;;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEL = document.createElement('td');
//   avgCookiesEL.textContent = currentStore.avgCookies;
//   rowEl.appendChild(avgCookiesEL);
//
//   tableEl.appendChild(rowEl);
// }
//
// document.body.appendChild(tableEl);

//---------------Old Code------------------V
// for (var i = 0; i < stores.length; i++){
//   console.log(stores[i]);
//   var loc = stores[i];
//   loc.cookPerHr();

//   newElement('div', 'id', storeStrings[i], 'store-stats', '');
//         // var locEl = document.createElement('div');
//         // locEl.setAttribute('id', storeStrings[i]);
//         // var holderEl = document.getElementById('store-stats');
//         // holderEl.appendChild(locEl);

//   newElement('h1', 'id', storeStrings[i] + 'H1', storeStrings[i], loc.name);
//         // var storeEl = document.createElement('h1');
//         // storeEl.setAttribute('id', storeStrings[i] + 'H1');
//         // storeEl.textContent = loc.name;
//         // var divEl = document.getElementById(storeStrings[i]);
//         // divEl.appendChild(storeEl);
//   console.log(loc.name);
//   newListEl(storeStrings[i], hrlist(loc));
//   hrlist(loc);
// }

// function newListEl(store, list){
//   var locUnorderedEl = document.createElement('ul');
//   locUnorderedEl.setAttribute('id', store + 'Ul');
//   var divEl = document.getElementById(store);
//   divEl.appendChild(locUnorderedEl);
//   for (var i = 0; i < list.length; i++){
//     var locListEl = document.createElement('li');
//     locListEl.setAttribute('class', store + 'Li');
//     locListEl.textContent = list[i];
//     var UnorderedEl = document.getElementById(store + 'Ul');
//     UnorderedEl.appendChild(locListEl);
//   }
// };

// function hrlist(store){
//   var total = 0;
//   //var hrSalesList = [];
//   //var locEl = document.createElement('ul');
//   for (var i = 6; i < 21; i++){
//     // if (i < 13){
//     //   hrSalesList.push(i + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
//     //   //console.log(i + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
//     // } else {
//     //   var time = i - 12;
//     //   hrSalesList.push(time + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
//     //   //console.log(time + 'pm: ' + store.cookPerHrArray[i - 6] + ' cookies');
//     // }
//     total += store.cookPerHrArray[i - 6];
//     //var
//   }
  //var locEl = document.createElement('li');
//   locEl.setAttribute('class', '');
//   console.log(hrSalesList);
//   console.log('Total: ' + total + ' cookies');
//
//   return hrSalesList;
// };
