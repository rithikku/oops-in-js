// Saare user ko Password nahi dena... Agar password Encrypted hai toh Decrypted du...
class User {
    // Here constructor bhe value ko set kar rahi hai, or setter bhe value ko set kar rahi hai toh set kar rahi hai...Toh ye Race lag jayega.. 
    // Error: Maximum call stack size exceeded
    // Solution: you have to put _ in both getter and setter
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value; // you don't have to return the setter...
    }

    get password(){ // if you define getter then you also have to define the setter
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const rithik = new User("r@gmail.com", "12ab");
console.log(rithik.password);
console.log(rithik.email);
