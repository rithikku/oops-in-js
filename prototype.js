let myName = "Rithik     ";
let myChannel = "Chai     "



// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman", "superman"];

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.rithik = function(){
    console.log(`Rithik is present in all objects `)
}

Array.prototype.heyRithik = function(){
    console.log("Rithik says hello");
}

// heroPower.rithik();
// myHeros.rithik();
// myHeros.heyRithik();
// heroPower.heyRithik(); // niche wale ko access diye hain uper wale ko thodi na milega..
// lekin agar top pe access de denge toh sabko jarur mile jayega... 


// inheriance 
const user = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = user; // Teacher has accessed to all student

// Modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport has all access the property of Teacher


let anotherUserName = "Chai or Code    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength();
"rithik".trueLength();
"iceTea".trueLength();