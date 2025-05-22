const { use } = require("react");

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // uss method or property ko access dene se rokk deta hai...
        return `123`;
    }
}

const rithik = new User("Rithik");
// console.log(rithik.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());