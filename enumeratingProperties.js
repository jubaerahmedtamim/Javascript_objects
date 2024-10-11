function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.birthYear =  function(){
        return new Date().getFullYear() - age;
    }
}

const p1 = new Person("Shakib", 35, "Male")
const p2 = new Person("Tamim", 28, "Male")

// console.log(p1.birthYear());
// console.log(p2.birthYear());


//enumerating Properties from objects
for (const key in p1){
    console.log(key,p1[key]);
}


const keys = Object.keys(p2) // it is return the keys in an array.
console.log(keys);


if ("name" in p1){
    console.log("yes! This objects has a property called name");
}