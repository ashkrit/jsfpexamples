function f(value) {
    return 1 + value;
}

var g = function(value) {
    return 1 + value;
}

var h = new Function("h","return  1 + 10");
console.log(f(10))
console.log(g(10))
console.log(h(10))
