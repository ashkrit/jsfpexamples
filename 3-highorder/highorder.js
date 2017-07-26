function sumScores() {
    var total = 0;
    for (index = 0; index < scores.length; index++) {
        total += scores[index];
    }
    return total;
}

function sumItems() {
    var total = 0;
    for (index = 0; index < items.length; index++) {
        total += items[index];
    }
    return total;
}


function sum(values) {
    var total = 0;
    for (index = 0; index < values.length; index++) {
        total += values[index];
    }
    return total;
}

function mul(values) {
    var total = 1;
    for (index = 0; index < values.length; index++) {
        total *= values[index];
    }
    return total;
}

function apply(values, fn, intialValue) {
    var acc = intialValue;
    for (index = 0; index < values.length; index++) {
        acc = fn(acc, values[index]);
    }
    return acc;
}

console.log(apply([10, 20], (x, y) => x + y, 0))
console.log(apply([10, 20], (x, y) => x * y, 1))


function f_sum(values) {
    return values.reduce((acc, value) => { return acc + value; }, 0);
}

function f_mul(values) {
    return values.reduce((acc, value) => { return acc * value; }, 1);
}

function reduceValue(values, fn, initialValue) {

    return values.reduce((acc, value) => {
        return fn(acc, value);
    }, initialValue);

}


reduceValue([1,2,3,4,5], function(x,y) { return x+y}, 0)

reduceValue([1,2,3,4], function(x,y) { return x * y}, 1)
reduceValue([ [1,2,3,4] , [10,20]], function(x,y) { return x.concat(y)}, [])

reduceValue([ 1,2,3,4,1,4], function(x,y) { 
    var count = x[y] || 0;
    x[y] = count + 1;
    return x;
}, {})


var pairSum = function (firstPair) {
    return (secondPair) => secondPair + firstPair;
}