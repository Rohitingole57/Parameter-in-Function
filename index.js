//PARAMETERS IN FUNCTION.
function kabutar(x,y){
    var sum = x + y;
    console.log("kabutar answer is", sum);
}
kabutar(5,10);

//DYNAMIC & RETURN THE FUNCTION
function kabu(x,y,z){
    var sum = x + y + z ;
    return sum;
}
var result = kabu(5,10,10);
console.log("the returned value is", result);

//PRINT THE SQUARE 
function square(a){
    var sq = a*a;
    return sq;
}
var y = square(5);
console.log("square of the",y); 

//solving problem related to the squaring rhe result of sum
function summ(a,b){
    var smmm = a + b;
    return smmm;
}

function squaree(result){
 var sqqq = result*result;
 return sqqq;
}

function printVaribale(n){
    console.log("the square of the sum is",n);
}

var result = summ(20,30);
console.log("The sum is",result);

var result2 = squaree(result);
printVaribale(result2); 

//Given x =20; find the square of "x" multiply the result by 10 and print the step2 output

function square(x){
    var sq = x*x;
    return sq;
}

function multiplyby10(result){
    var mul = result / 10;
    return mul;
}

function printVaribale(n){
    console.log("the x divided by 10 is",n);
}

var result = square(10);
console.log("sqaure is",result);

var output = multiplyby10(result);

printVaribale(output);
