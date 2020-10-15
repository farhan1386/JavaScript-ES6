export class employee {
  constructor(name, position, salary) {
    this.name = name;
    (this.position = position), (this.salary = salary);
  }

  getAnnualIncome() {
    this.salary * 12;
  }
}

const emp1=new employee('Farhan Ahmed','Software Engineer',80000);
console.log(emp1);
