//methods are functions that are stored as object properties.
function person (name, age){
    this.name = name;
    this.age = age;
    this.changeName = function(name){
        this.name = name;
    }
}

const person1 = new person("David", 21)
person1.changeName('Tamim')
console.log(person1);

