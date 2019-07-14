var todo = {
    "name":"Angular Session",
    "completed":true
}
//string templating - string interpolation (angular)
//var status:string = 'Your Task '+ (todo.completed? 'IS ':'IS NOT ')+'Completed';
//{{}} ${}
var status:string = `Your Task ${todo.completed? 'IS ':'IS NOT '}` +'Completed';
console.log(status);