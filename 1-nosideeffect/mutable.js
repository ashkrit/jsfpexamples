function printInCenter(str) {
    var elem = document.createElement("div");
    elem.textContent = str;
    elem.style.position = 'absolute';
    elem.style.top = window.innerHeight / 2 + "px";
    elem.style.left = window.innerWidth / 2 + "px";
    document.body.appendChild(elem);
}

let value = 10;
let plus1 = ++value;

const cartItems = []
function addItems ( itemName, price,qty) {
    cartItems.push( {
        itemName,price,qty
    });
}