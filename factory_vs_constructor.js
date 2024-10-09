// factory function
function createCircle (radius){
    return {
        radius,
        draw: function(){
            console.log('draw a circle for radius:',radius);
        }
    }
}
const circle1 = createCircle(1);
const circle2 = createCircle(5);

console.log(circle1.draw());
console.log(circle2.draw());

// constructor
function Circle(radius) {
    this.radius = radius,
    this.draw = function(){
        console.log("draw");
    }
}
const circle3 = new Circle(6);
console.log(circle3.draw());