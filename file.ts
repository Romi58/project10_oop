class Person {
    name: string;
    age: number;
    isStudent: boolean;

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }

    greet() {
        let greeting = `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        if (this.isStudent) {
            greeting += ` I am a student.`;
        }
        console.log(greeting);
    }

    celebrateBirthday() {
        this.age++;
        console.log(`Happy birthday, ${this.name}! You are now ${this.age} years old.`);
    }

    checkStudentStatus() {
        if (this.isStudent) {
            console.log(`${this.name} is currently a student.`);
        } else {
            console.log(`${this.name} is not currently a student.`);
        }
    }

    static createAdult(name: string) {
        return new Person(name, 18, false);
    }
}


const person = new Person("Romaisa", 15, true);
person.greet();
person.celebrateBirthday();
person.checkStudentStatus();
const adult = Person.createAdult("Alice");
adult.greet();
