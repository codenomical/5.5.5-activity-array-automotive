//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

// creating a class Car to extend from the class Vehicle from vehicle.js. Using the constructor() to inherit the properties and methods from the parent class, but added properties unique to the class Car. Using the super() to call the constructor from the parent class so that I can use this in the child class.  

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

    }
// all the methods for the child class based on the assignment criteria.    
    loadPassengers(num) {
        const vacantSeating = this.passengers < this.maximumPassengers;
        if (vacantSeating) {
            this.passengers += num;
            console.log(`Number of passengers: ${num}. Safe to load under ${this.maximumPassengers}.`)
        } else {
            console.log(`Number of passengers: ${num}. Not safe to load! Total passengers over ${this.maximumPassengers} exceeds safety limit.`)
        }
    }

    start() {
        if(this.fuel > 0) {
            this.start = true;
            console.log("Engine activated!");
        } else {
            this.start = false;
            console.log("Engine not starting...");
        }    
    }

    scheduleService() {
        if (mileage > 30000) {
            this.scheduleService = true;
            console.log("Maintenance required at this time");
        } else {
            console.log("Maintenance not required at this time");
        }
    }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//Adding this, I wanted to test the Car class with a Car object to test the functionality.

let myCar = new Car("Ford", "Shelby", "2006", "color", "mileage");
myCar.start();
myCar.loadPassengers(3);
myCar.scheduleService(32000);
console.log(myCar);