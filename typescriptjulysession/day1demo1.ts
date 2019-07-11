var age:string = "12";
let names:string|number="sabari"

names=12;
let veg:boolean[]=[false,true];
let fruits:[boolean,string,string]=[true,"abc","def"];
let [a,b,c]=fruits;

function getData(name:string,age?:Number){

}

getData("34");

// for(let tmp in fruits){
//     console.log(fruits[tmp]);
// }

for(let tmp of fruits){
    console.log(tmp);
}

function demo(){

    if(true){
        let price:number=10.5;
    }
    //console.log(price);
}
demo();
//string
//number
//String
class Employee{

}
age="34";//typeinference
console.log(age);