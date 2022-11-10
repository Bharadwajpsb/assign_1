let a = 5;
let b = 10;
let c = 4;
let d = 8;
let f = 6;
var largest
if (a > b && a > c && a > d && a > f) {
    largest = a;
} else if (b > a && b > c && b > d && b > f) {
    largest = b;
} else if (c > a && c > b && c > d && c > f) {
    largest = c;
} else if (d > a && d > c && d > b && d > f) {
    largest = d;
} else {
    largest = f;
}
alert("The largest among five numbers is " +largest);
