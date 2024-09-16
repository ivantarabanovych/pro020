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

const developer = new Developer("Ivan", 21, "web developer", 1500);

console.log(`${developer.name} earn from month: $${developer.calculateSalary()}`);
