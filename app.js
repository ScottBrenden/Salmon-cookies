'use strict';
// function newElement(elType, elAttribute, elAttributeName, elText, elParentId){
  // var element = document.createElement(elType);
  // element.setAttribute(elAttribute, elAttributeName);
  // element.textContent(elText);
  // var parentEl = getElementById(elParentId);
  // parentEl.appendChild(element);
// }
//var hourlyCookies = [];

var stores = [pike, seaTac, seaCenter, capHill, alki];
var storeStrings = ['pike', 'seaTac', 'seaCenter', 'capHill', 'alki'];

function randomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStore(name, minCust, maxCust, avg){
  this.name = name,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookies = avgCookies,
  this.cookPerHrArray = [];
}

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);
// console.log('Pike');

// pike.CookPerHr();

//console.log(pike.cookPerHrArray);
// console.log(pike);

function hrlist(store){
  var total = 0;
  var hrSalesList = [];
  var locEl = document.createElement('ul');
  for (var i = 6; i < 21; i++){
    if (i < 13){
      hrSalesList.push(i + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
      //console.log(i + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
    } else {
      var time = i - 12;
      hrSalesList.push(time + 'am: ' + store.cookPerHrArray[i - 6] + ' cookies');
      //console.log(time + 'pm: ' + store.cookPerHrArray[i - 6] + ' cookies');
    }
    total += store.cookPerHrArray[i - 6];
    //var
  }
  //var locEl = document.createElement('li');
  locEl.setAttribute('class', '');
  console.log(hrSalesList);
  console.log('Total: ' + total + ' cookies');
  return hrSalesList;
};
hrlist(pike);

for (var i = 0; i < stores.length; i++){
  var loc = stores[i];
  loc.CookPerHr();
  var locEl = document.createElement('div');
  locEl.setAttribute('id', storeStrings[i]);
  var holderEl = document.getElementById('store-stats');
  holderEl.appendChild(locEl);

  var storeEl = document.createElement('h1');
  storeEl.setAttribute('id', storeStrings[i] + 'H1');
  storeEl.textContent = loc.name;
  var divEl = document.getElementById(storeStrings[i]);
  divEl.appendChild(storeEl);
  console.log(loc.name);
  newListEl(storeStrings[i], hrlist(loc));
  hrlist(loc);
}

function newListEl(store, list){
  var locUnorderedEl = document.createElement('ul');
  locUnorderedEl.setAttribute('id', store + 'Ul');
  var divEl = document.getElementById(store);
  divEl.appendChild(locUnorderedEl);
  for (var i = 0; i < list.length; i++){
    var locListEl = document.createElement('li');
    locListEl.setAttribute('class', store + 'Li');
    locListEl.textContent = list[i];
    var UnorderedEl = document.getElementById(store + 'Ul');
    UnorderedEl.appendChild(locListEl);
  }
};
//display(pike);
//display(alki);
//----------------Demo area------------------------V

//
// CookieStore.prototype.cookPerHr = function(){
//   for (var i = 0; i < 15; i++){
//     var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//     //console.log(cookies);
//     this.cookPerHrArray.push(cookies);
//   }
// };

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
//   var avgCookiesEL = document,createElement('td');
//   avgCookiesEL.textContent = currentStore.avgCookies
//   rowEl.appendChild(avgCookiesEL);
//
//   tableEl.appendChild(rowEl);
// }

//document.body.appendChild(tableEl);

//---------------Old Code------------------V
// var pike = {
//   name: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookPerHrArray: [],
//   CookPerHr: function(){
//     for (var i = 0; i < 15; i++){
//       var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//       //console.log(cookies);
//       this.cookPerHrArray.push(cookies);
//     }
//   }
// };
//
// var seaTac = {
//   name: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookPerHrArray: [],
//   CookPerHr: function(){
//     for (var i = 0; i < 15; i++){
//       var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//       //console.log(cookies);
//       this.cookPerHrArray.push(cookies);
//     }
//   }
// };
//
// var seaCenter = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookPerHrArray: [],
//   CookPerHr: function(){
//     for (var i = 0; i < 15; i++){
//       var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//       //console.log(cookies);
//       this.cookPerHrArray.push(cookies);
//     }
//   }
// };
//
// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookPerHrArray: [],
//   CookPerHr: function(){
//     for (var i = 0; i < 15; i++){
//       var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//       //console.log(cookies);
//       this.cookPerHrArray.push(cookies);
//     }
//   }
// };
//
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookPerHrArray: [],
//   CookPerHr: function(){
//     for (var i = 0; i < 15; i++){
//       var cookies = Math.ceil(this.avgCookies * randomCust(this.minCust, this.maxCust));
//       //console.log(cookies);
//       this.cookPerHrArray.push(cookies);
//     }
//   }
// };
