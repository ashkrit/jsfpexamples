function printOnScreen(str, height, width) {
    var elem = document.createElement("div");
    elem.textContent = str;
    elem.style.position = 'absolute';
    elem.style.top = height;
    elem.style.left = width;
    return elem;
}


let value = 10;
let plus1 = value + 1;

function addItems(cartItems, itemName, price, qty) {
    return cartItems.concat({
        itemName, price, qty
    });
}


function clone(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone));
}

function pureAddItems(cartItems, itemName, price, qty) {
    return clone(cartItems).concat({
        itemName, price, qty
    });
}


//Lazy Function

function f() {
    console.log("Why i am called");
    return 0;
}
var x = 9;


if(x === 10 && f() === 0 ) {
    console.log("This is 10");
}

var y = f();
if(x === 10 && y === 0 ) {
    console.log("This is 10");
}


var y = f;
if(x === 10 && y() === 0 ) {
    console.log("This is 10");
}