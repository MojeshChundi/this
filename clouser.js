
// //Bind
// let student={age:20};

// function age(){
// return this.age;
// }
// let bound=age.bind(student);
// console.log(bound())

// //call ,bind

// let student1={age:20};
// function age(){
//     return this.age;
//     }
//     console.log(age.call(student1))
//     console.log(age.apply(student1))

// let multiply=function(x,y){
//     console.log(x*y)
// }
// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(5)
// let multiplyByThree=multiply.bind(this,3);
// multiplyByThree(5)
let multiply=function(x){
   return function (y){
    console.log(x*y)
   }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(3);
let multiplyByThree=multiply(3);
multiplyByThree(3);


