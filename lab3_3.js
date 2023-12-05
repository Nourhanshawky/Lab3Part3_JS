var user={
    fullName:"nourhan shawkky",
    age:23,
    gender:"female",
    eat:function(meal){
        console.log("will eat "+ meal);
    }
}
var course={
    name:"javaScript",
    hours:33,
    Grade:100,
    prerequistes:"HTML & CSS"
}

//before using strict methods =>> this return true as object editable
console.log(Object.isExtensible(user));

//1-Returns the names of the properties and methods of an object.
//['fullName', 'age', 'gender', 'eat']
var keys = Object.keys(user);
console.log(keys);

//2-Returns an array of values of the properties of an object
//['nourhan shawkky', 23, 'female', ƒ]
var values = Object.values(user);
console.log(values);

//3-Returns an array of key/values of the enumerable properties of an object([key, value] pairs.)
var pairs = Object.entries(user);
console.log(pairs);

//4-Copy the values of all of the properties from one or more source objects to a one object. 
//Returns that one object.
var mergeObjects = Object.assign(user , course);
console.log(mergeObjects);

//5-Prevents the modification of existing property attributes and values,
//and prevents the addition of new properties
Object.freeze(user);
user.age= 22; //the age will not chanage.
console.log(user);

//6-Prevents the modification of attributes of existing properties,
// and prevents the addition of new properties.
Object.seal();
user.faculty="sc"; //this will add the faculty to user object

//7-Returns a value that indicates whether new properties can be added to an object.
//after using strict methods =>> this return false as object isnot editable
console.log(Object.isExtensible(user));

//9-number of proberties and methods in the objects
console.log(Object.keys(user).length);

//10-Returns the names of the own properties of an object
var x=Object.getOwnPropertyNames(user);
console.log(x);

//convert object to string
var str=user.toString();

////////////////////////////////////////////////EX2///////////////////

var fruits = ["apple", "banana", "kwiwi" ,"grapes"];
//1-add elements in the array ==>at the end
fruits.push("peach");
console.log(fruits);

//2-add elements in the array ==>in the firs
fruits.unshift("orange");

//3-get number of elements in array
console.log(fruits.length);

//4-sort array from A-Z
fruits.sort();
console.log(fruits);

//5-reverse array 
//['peach', 'orange', 'kwiwi', 'grapes', 'banana', 'apple']
fruits.reverse();
console.log(fruits);

//6-remove and return last element 
var lastelement = fruits.pop();
console.log(lastelement);


//7-remove and return first elemnt
var firstelement = fruits.shift();
console.log(firstelement);

//8-delete elements from array take start index you want to delete from and
//number of elements want to delete(optional)
fruits.splice(2 ,1);
console.log(fruits);

//9-returns the elements of an array that meet the condition.
var res = fruits.filter((fruit) => fruit.length < 6);
console.log(res);

//10-merge two or more arrays and returns a new array without modifying any existing arrays.
var fruits2 =["cherry","watermelon"];
var allFruits=fruits.concat(fruits2);
console.log(allFruits);

///////////////////////////////EX3///////////////////////////

//closure => gives you access to an outer function's scope from an inner function
//so hours (inner function) can access courseTitle from course(outer function)
function courses(){
    var courseTitle ="JavaScript";

    function hours(){
        console.log(courseTitle+ " is 33 hours");
    }
    hours();
}
courses();

function courses(){
    var courseTitle ="JavaScript";

    function hours(){
        console.log(courseTitle+ " is 33 hours");
    }
    return hours;
}
let fun =courses();
fun();
