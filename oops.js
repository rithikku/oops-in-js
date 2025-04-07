// this is refering the current context...
const user = {
    username : "Rithik",
    loginCount : 8,
    signedIn : false,

    getUserDetails: function(){
        // console.log("Got user details from Database");
        console.log(`Username : ${this.username}`); // bahar se saaman lena hai toh batana padega apne saaman ki baat kar rhe hain..
        console.log(this);
    }
}
console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// constructor function..
// These are the example of constructor function..

// for one Object you can create multiple instance...
// new keyword is for making context.. and this is called constructor function 

// const promiseOne = new Promise() // example
// const date = new Date() // example

function User(username, loginCount, isLoggedIn){
    this.username = username; // jo pass karenge usko assign karega
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// agar bina new keyowrd ke bina value pass karoge toh value overwrite kare dega..

const userOne = new User("Rithik", 12, true);
const userTwo = new User("Chai", 11, false);
console.log(userOne);
console.log(userTwo);

// new keyowrd...
// firstly new keyword is creating empty object known as instance..
// step1 : first this keyword creating new object
// step2 : constructor function can be called through new keyword
// step3 : this or argument can inject ho jate hain..
// step4 : fir mil jayega...
