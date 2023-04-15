// class Flower{
//     constructor(name){
//         this.name=name;
//     }
//     print(color){
//         console.log(`the color of ${this.name} is ${color}`);
//     }
// }
// class Rose extends Flower{
//     constructor(color){
//         super("Rose");
//         this.color=color
//     }
//     colorOfRose(){
//         return "Red";
//     }
// }
// const rose1 = new Rose();
// const color = rose1.colorOfRose();
// rose1.print(color);
// class Sunflower extends Flower{
//     constructor(color){
//         super("Sunflower");
//         this.color=color
//     }
//     colorOfSunflower(){
//         return "Yellow";
//     }
// }
// const sun1 = new Sunflower();
// const scolor = sun1.colorOfSunflower();
// sun1.print(scolor);


class Fruit{
    constructor(name){
        this.name=name;
    }

    print(vitamin){
       console.log(`the vitamin in ${this.name} is ${vitamin}`);
    }
}
class Apple extends Fruit{
    constructor(vitamin){
        super("Apple")
        this.vitamin=vitamin;
    }
    vitaminOfApple(){
        return "A";
    }
}
const app1=new Apple();
const vitamin=app1.vitaminOfApple();
app1.print(vitamin);
class Orange extends Fruit{
    constructor(vitamin){
        super("Orange")
        this.vitamin=vitamin;
    }
    vitaminOfOrange(){
        return "C"
    }
}
const ora1=new Orange();
const ovitamin=ora1.vitaminOfOrange();
ora1.print(ovitamin);