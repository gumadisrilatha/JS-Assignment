//area of a triangle

const side1 = 5;
const side2 = 6;
const side3 = 7;
const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);
console.log(area);

//diagonal of a square

const length = 9;
const diagonal = length * Math.sqrt(2);
console.log(Math.round(diagonal));

//Area and circumference of a circle

const radius = 4;
const circleArea = radius * radius * Math.PI;
console.log(circleArea);
const circumference = 2 * Math.PI * radius;
console.log(circumference);

//larger of two numbers

function integer(a, b) {
  if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is:" + a);
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is:" + b);
  }
}
integer(5, 6);
