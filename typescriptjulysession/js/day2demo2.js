"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.demo = function () {
        return 10;
    };
    return Parent;
}());
//var p = new Parent();
var TodoApp = /** @class */ (function (_super) {
    __extends(TodoApp, _super);
    //private id:number=0;
    //private age:number=0;
    function TodoApp(id, age) {
        if (age === void 0) { age = 0; }
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.age = age;
        _this.arr = [{ name: 'Sabari' }, { name: 'Balaji' }];
        return _this;
        // this.id=id;
        //this.age=age;
    }
    TodoApp.prototype.demo = function () {
        return _super.prototype.demo.call(this) + 10;
    };
    TodoApp.prototype.getAllTodo = function (id) {
        //let age=10;
        return this.arr;
    };
    return TodoApp;
}(Parent));
exports.TodoApp = TodoApp;
var todoobj = new TodoApp(10);
var myTodo = { completed: true, name: '' };
//# sourceMappingURL=day2demo2.js.map