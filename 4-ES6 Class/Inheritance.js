class Employee{
    constructor(name,position,salary){
      this.name=name;
      this.position=position;
      this.salary=salary;
    }
    basicSalary(){
      console.log('Basic Salary ' + this.salary);
    }
  }
  
  class PermanentEmployee extends Employee{
    constructor(name,position,salary){
      super(name,position,salary);
    }
    hourlyRate(){
     console.log('Hourly Rate: ' + Math.round((this.salary/30)/8));
    }
  }
  
  class ContractEmployee extends Employee{
    constructor(name,position,salary){
      super(name,position,salary);
    }
    hourlyRate(){
      console.log('Hourly Rate: ' + Math.round((this.salary/30)/8));
    }
  }
  
  const permanentemp = new PermanentEmployee('Farhan Ahmed','Software Engineer',80000);
  permanentemp.hourlyRate();
  
  const contratemp=new ContractEmployee('Rahul','Developer',60000);
  contratemp.hourlyRate();