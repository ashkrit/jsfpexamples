var numbers = [1,2,3,4,5,6,7,8,9];

function doItYourSelf(numbers) {
    var sum=0;
    for(var index = 0 ; index < numbers.length; index++) {

        if(numbers[index]%2==0) {
            sum += numbers[index]*2;
        }
    }
    return sum;
}




function iwillDo(numbers) {
    return numbers
    .filter( value => value%2==0)
    .map(value => value*2)
    .reduce((acc,currentValue) => acc+currentValue,0);
}