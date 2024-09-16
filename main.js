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
}

class Developer extends Employee{
    constructor (name, age, position, baseSalary, programmingLanguage){
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    calculateSalary(){
        const bonus = 500;
        return this.baseSalary + bonus;
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
}

const manager = new Manager("Ivan", 21, "manager", 1500, 25);

console.log(`${manager.name} earn from month: $${manager.calculateSalary()}`);
