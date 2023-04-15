class Car{
    constructor(a,b,c){
        this.name = a;
        this.price = b;
        this.mileage = c;
    }
    print(){
        console.log(`car name is ${this.name}`);
        console.log(`car price is ${this.price}`);
        console.log(`car mileage is ${this.mileage}`);
        console.log(`car wheels are ${this.wheels}`);
    }
}
Car.prototype.wheels = 4;
const car1 = new Car("celerio","5L",66);
car1.print();
const car2 = new Car("swift","6L",50);
car2.print();
const car3 = new Car("wagonr","4L",55);
car3.print();
const car4 = new Car("alto","3L",40);
car4.print();