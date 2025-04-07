// this is refering the current context...
const user = {
    username : "Rithik",
    loginCount : true,
    signedIn : false,

    getUserDetails: function(){
        // console.log("Got user details from Database");
        console.log(`Username : ${this.username}`); // apne saaman ki baat kar rhe hain..
        console.log(this);
    }
}
console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// constructor function..
// These are the example of constructor function..
// for one Object you can create multiple instance...
// new keyword is for making context..
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Rithik", 12, true);
const userTwo = new User("Chai", 11, false);
console.log(userOne);
console.log(userTwo);

// this keyowrd...
// firstly new keyword is creating empty object known as instance..
// step1 : first this keyword creating new object
// step2 : value pass on into the constructor function..
// step3 : inject ho jate hain..
// step4 : fir mil jayega...