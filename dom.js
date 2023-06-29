//traversing the DOM
var itemList=document.querySelector('#items');
//parentnode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='green';

//parentElement

//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='green';

//childNodes

//console.log(itemList.childNodes)
//console.log(itemList.children);
//itemList.children[1].style.backgroundColor='yellow';

//FirstChild

// console.log(itemList.firstChild);

 //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

 //nextsibling

// console.log(itemList.nextSibling);

 //nextElementSibling\

// console.log(itemList.nextElementSibling);

 //previoussibling

// console.log(itemList.previousSibling);

//previousElementSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent='Hello';

//createelement

//create a div
var mydiv=document.createElement('div');

//Add class

mydiv.className='hello';

//add id
mydiv.id='hello1';
mydiv.setAttribute('title','Hello Div');

console.log(mydiv);
//create text node
var mydivText=document.createTextNode('Hello World');

//add  text to div

mydiv.appendChild(mydivText);
var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(mydiv,h1);
