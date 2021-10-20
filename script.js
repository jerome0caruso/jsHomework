// exercise # 1
console.log("#1")
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
} 

function getFav(obj) {
    const f = []
    const theEnd = [];
    for(let key in obj) {
        f.push(obj[key])
    }
    for(let el of f) {
        if(el[0] instanceof Object) {
            for(let key in el[0]) {
                theEnd.push(`${key}: ${el[0][key]}`) //added like a key value pair tell what is was refering to.
            }
        } else if (Array.isArray(el)) {
            for(let i of el) {
                theEnd.push(i)
            }
        } else {
            theEnd.push(el)
        }
    }
    theEnd.forEach(item => console.log(item))
}

getFav(person3)



//----- exercise # 2 ------
console.log("#2")
class Person{
    constructor(name, age){
        this.name= name
        this.age = age
    }
    printInfo() {
        console.log(`${this.name} is ${this.age} old.`)
    }
    increaseAge() {
        this.age++
    }
}

const person1 = new Person('John', 55);
const person2 = new Person('Becky', 30);

person1.printInfo()
person2.printInfo()

person1.increaseAge()
person1.increaseAge()
person1.increaseAge()

person1.printInfo()


// ---------exercise # 3---------
console.log("#3")
const remover = arr => {
    const newArr = [...arr];
    arr.forEach((_, index) => {
        if(index % 2 === 0) {
            newArr.splice(index, 1, "even index");
        }
    })
    return newArr;
}

console.log(remover(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))