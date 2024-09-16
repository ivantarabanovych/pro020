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

const employee = new Employee("Ivan", 21, "web developer", 1500);

console.log(`${employee.name} earn from month: $${employee.calculateSalary()}`);
