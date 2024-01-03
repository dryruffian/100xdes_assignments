// Create a class car with a function to return its age

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const mycar = new Car("Duster", 2015);
console.log("Your Car is " + mycar.age() + " Years old.");


 
