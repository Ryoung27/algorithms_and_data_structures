class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
    }
    markLate(){
        this.tardies += 1;
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} number of times`
    }
}

let firstStudent = new Student("Blue", "Steele", 10);
let secondStudent = new Student("Red", "Forman", 11);

class Tree {

}

new Tree


data = new Array(1, 2, 3)
data.push()