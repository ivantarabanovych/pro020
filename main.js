class Employee{
    constructor (name, age, position, baseSalary){
        this.name = name;
        this.age = age;
        this.position = position;
        this.baseSalary = baseSalary;
    }

    calculateSalary(){
        return this.baseSalary;
    }

    work(){
        return `${this.name}, виконує свої обов'язки на посаді ${this.position}`;
    }
}

class Developer extends Employee{
    constructor (name, age, position, baseSalary, programmingLanguage){
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    calculateSalary(){
        const codeBonus = 500;
        return this.baseSalary + codeBonus;
    }

    work(){
        return `${this.name}, виконує свої обов'язки на посаді ${this.position}, та отримує додатковий бонус за знання мови ${this.programmingLanguage}`;
    }
}

class Manager extends Employee{
    constructor(name, age, position, baseSalary, teamSize){
        super(name, age, position, baseSalary);
        this.teamSize = teamSize;
    }

    calculateSalary() {
        const bonusPerTeamSize = 100;
        return this.baseSalary + (this.teamSize * 100)
    }

    work(){
        return `${this.name}, виконує свої обов'язки на посаді ${this.position}, та керує командою яка складається з ${this.teamSize} осіб`;
    }
}

const employee = new Employee("Ivan", 21, "sys.Admin", 1500);
const developer = new Developer("Oleh", 21, "web developer", 1500, "C++", 500);
const manager = new Manager("Maria", 21, "manager", 1000, 8);

console.log(`${employee.name} Загальна заробітня плата: $${employee.calculateSalary()}`);
console.log(`${developer.name} Загальна заробітня плата: $${developer.calculateSalary()}`);
console.log(`${manager.name} Загальна заробітня плата: $${manager.calculateSalary()}`);

console.log(employee.work());
console.log(developer.work());
console.log(manager.work());


