/*
File Name: ComplexCodeExample.js
Description: This is a complex JavaScript code showcasing several advanced concepts and techniques.
*/

// Employee Class
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getInfo() {
    return `Employee Information - Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
  }
}

// Manager Class
class Manager extends Employee {
  constructor(name, age, salary, teamSize) {
    super(name, age, salary);
    this.teamSize = teamSize;
  }

  getInfo() {
    return `${super.getInfo()}, Team Size: ${this.teamSize}`;
  }
  
  promoteEmployee(employee) {
    if (employee instanceof Employee) {
      employee.salary *= 1.1; // Increase salary by 10%
      console.log(`${employee.name} has been promoted! New Salary: ${employee.salary}`);
    } else {
      console.log("Invalid employee object!");
    }
  }
}

// Developer Class
class Developer extends Employee {
  constructor(name, age, salary, programmingLanguages) {
    super(name, age, salary);
    this.programmingLanguages = programmingLanguages;
  }

  getInfo() {
    return `${super.getInfo()}, Programming Languages: ${this.programmingLanguages.join(', ')}`;
  }
  
  developSoftware(project) {
    console.log(`Developing software for project: ${project}`);
  }
}

// Company Class
class Company {
  constructor(name, address, employees) {
    this.name = name;
    this.address = address;
    this.employees = employees;
  }

  getEmployeeCount() {
    return this.employees.length;
  }

  getAverageSalary() {
    const totalSalary = this.employees.reduce((acc, employee) => acc + employee.salary, 0);
    return totalSalary / this.employees.length;
  }
  
  printEmployeeInformation() {
    console.log(`Employee Information for ${this.name}:`);
    this.employees.forEach(employee => console.log(employee.getInfo()));
  }
}

// Usage Example

// Create Employees
const john = new Developer("John Smith", 30, 5000, ["JavaScript", "Python", "Java"]);
const jane = new Developer("Jane Doe", 28, 4500, ["C#", "JavaScript"]);
const mark = new Manager("Mark Johnson", 35, 8000, 10);

// Create Company
const company = new Company("ABC Corp", "123 Main St", [john, jane, mark]);

// Access and Modify Employee Details
john.developSoftware("Project A");
jane.developSoftware("Project B");
mark.promoteEmployee(jane);

// Get Company Statistics
console.log(`Total Employees: ${company.getEmployeeCount()}`);
console.log(`Average Salary: ${company.getAverageSalary()}`);

// Print Employee Information
company.printEmployeeInformation();