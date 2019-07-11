// //Arrow Functioning (Lambdas)
// //Anonymous Function

// var cont = document.getElementById('container');

// function generateRandomNumbers(el){
//     this.count = 0;
//     el.innerHTML = this.count;
//        // _this =this;
//        //Arrow Functioning
//     el.addEventListener('click',()=>{
//         this.count+=1;
//         el.innerHTML = this.count;
//     })
// }
// new generateRandomNumbers(cont);

var ages:number[]=[12,23,34,45].filter(x=> x>25);

console.log(ages);