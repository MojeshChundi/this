

class student{
    static count=0;
    constructor(name , age , phoneNumber, marks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.marks=marks;
        student.count++;
    }
    eligible(marks){

        return (age)=>{

        if(this.marks<40)return false;
        return true;
    }
    }
    trackCount(){
        console.log(student.count);
    }
}
let john=new student("john",20,12345,39);
let ram=new student("ram",20,12345,37);
let rajesh=new student("rajesh",12345,45);
let jagadeesh=new student("jagadeesh",20,12345,56);
let bobby=new student("bobby",20,12345,90);
let arr=[];
arr.push(john,ram,rajesh,jagadeesh,bobby);
let sorted=arr.sort((a,b)=>{
  return  a.marks-b.marks
}).filter(ele=>{
    if(ele.marks>40){
        console.log(ele.name)
    }
})


