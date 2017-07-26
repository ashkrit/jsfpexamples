function convertFX(value,rate) {
    return value * rate;
}

console.log("INR" , convertFX(5, 45) )
console.log("HKD" , convertFX(5, 5) )
console.log("JPY" , convertFX(5, 80) )

function toCurrency(rate) {
    return function(inrValue) {
        return convertFX(inrValue,rate);
    }
}

var toInr = toCurrency(45);
var toHKD = toCurrency(5);
var toJPY = toCurrency(80);

console.log("INR" , toInr(5) )

console.log("HKD" , toHKD(5) )

console.log("JPY" , toJPY(5) )




