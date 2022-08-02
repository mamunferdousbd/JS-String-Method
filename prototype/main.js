// The prototype is a property available with all JavaScript objects.
// The prototype property allows you to add new properties and methods to strings.

/********************************
 * Warning
 ********************************/
// You are not advised to change the prototype of an object that you do not control.
//You should not change the prototype of built in JavaScript datatypes like:
// Numbers, Strings, Arrays, Dates, Booleans,Function,Objects
/******************************************************
 * Only change the prototype of your own objects.
 *****************************************************/

function employee(name,jobtitle,born){
    this.name= name;
    this.jobtitle= jobtitle;
    this.born= born;
};
employee.prototype.salary = 3500; //for adding new property in object
const mamun = new employee("abdullah al Mamun","ts tech",1986);
console.log(mamun.name);
console.log(mamun.jobtitle);
console.log(mamun.born);
console.log(mamun.salary);


