const circle = {
    radius: 1, 
    location: {
        x: 1, 
        y: 1,
    },
    draw: function() {
        console.log("draw a circle");
    }
}

/*
    A function inside the object called method, and it can be called like this --> objectName.methodName() 
*/
circle.draw();
console.log(circle.location.x);