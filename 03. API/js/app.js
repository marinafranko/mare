//
// Test2();

// const Test2 = function(){
//     console.log("Test2");
// }



// Test();

// function Test(){
//     console.log("Test");
// }



// let a = 10;
// let b = 130;
// Init = (a , b) =>{
//     return  a + b;
   
// } 


// const res = Init(a, b);
// console.log(res);



// let Person = {
//     name : "Bill",
//     surname: "Gates",
//     age: 58,
//     data: {
//         day: 23,
//         month: 10,
//         year: 1956
//     }
// }


// console.log(Person.name);
// console.log(Person.age);

// let day = Person.data.day;


// console.log("Day:", day);

// console.log(Person.data);


// let arr = [4,6,"Tom",[8678,3453,"Test"]];

// console.log(arr);


// let arrPerson = [Person,Person];
// console.log(arrPerson);

class Dog {
    constructor(name, breed, age, power){
        this.name= name;
        this.breed = breed;
        this.age = age;
        this.power = power;
    }
    ShowDog(){
        console.log("Hello, my name is ", this.name, " Breed: ", this.breed, " Age: ", this.age, " Power: ", this.power);
    }
    Play(power){
        if(this.power <= 0 || this.power >= 100){
            this.Die();
        }
        else{
            this.power -= power;
            console.log("Power after play => ", this.power);
        }
    }
    Die(){
        console.log(this.name, " is dead!");
    }
    Eat(power){
        if(this.power <= 0 || this.power >= 100){
           this.Die();
        }
        else{
            this.power += power;
            console.log("Power after eat => ", this.power);
        }
    }
}
class HunterDog extends Dog{
    constructor(name, breed, age, power, speed){
        super(name, breed, age, power);
        this.speed = speed;
    }
    Hunter(power){
        if(this.power <= 0 || this.power >= 100){
            this.Die();
        }
        else{
            this.power -= power;
            console.log("Power after play => ", this.power);
        }
    }
    ShowDog(){
        console.log("Hello, my name is ", this.name, " Breed: ", this.breed, " Age: ", this.age, " Power: ", this.power, " Speed: ", this.speed);
    }
}
let Bob = new HunterDog("Bob", "Labrador", 2, 60, 30);
Bob.ShowDog();
let Rex = new Dog("Rex", "Bulldog", 2, 80);
Rex.ShowDog();
Rex.Play(20);

/*let Max = new Dog("Max", "Akita", 5, 50);
Max.ShowDog();*/
