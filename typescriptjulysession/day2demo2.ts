//contract for other codes
interface Todo{
    name:string,
    completed?:boolean
}

interface ITodoService{
    getAllTodo(id:number):Todo[];
}
 abstract class Parent{
     demo():number{
        return 10;
    }
}
//var p = new Parent();
export class TodoApp extends Parent implements ITodoService{

    demo():number{
        return super.demo()+10;
    }
     arr:Todo[]=[{name:'Sabari'},{name:'Balaji'}];
     //private id:number=0;
     //private age:number=0;
    constructor(public id:number,private age:number=0){
         super();
        // this.id=id;
        //this.age=age;
    }
    getAllTodo(id:number){
        //let age=10;
        return this.arr;
    }
}
let todoobj = new TodoApp(10);
let myTodo:Todo={completed:true,name:''};
