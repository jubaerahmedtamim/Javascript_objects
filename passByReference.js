let a = 20;

const change = (val) => {
    return val = 2;
}

const changedValue = change(a) // pass by reference

console.log("value of a:",a);
console.log("value of change function:",changedValue);