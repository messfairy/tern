function Person(){
    this.age = 18;
}
//say
Person.prototype.say = function(){

};
//walk
Person.prototype.wark = function(){

};
//Teacher
function Teacher(){
    this.students = [1, 2, 3];
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function(){

};
var person = new Person();
var teacher = new Teacher();
person.
teacher.

//{"query":{"type":"completions","types":true,"docs":true,"urls":true,"lineCharPositions":true,
//    "end":{"line":22,"ch":8,"xRel":1},"file":"Teacher.js"},"files":[]}