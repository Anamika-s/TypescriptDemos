class Employee
{
  empId :number;
  empName:string;
    
  constructor(empId : number, empName:string)
  {
      this.empId = empId;
      this.empName = empName;
  }

  DisplayDetails() : void 
  {
    console.log(this.empId);
    console.log(this.empName);
  }
}

class FullTimEmployee  extends Employee
{
    dept : string;
    salary : number;
  constructor(empId : number, empName : string , dept: string, salary : number) 
  { 
    super(empId, empName);
    this.dept = dept;
    this.salary = salary;

  }
  GetDetails() : void 
  {
    super.DisplayDetails();
    console.log("Dept is " + this.dept);
    console.log("Salary is " + this.salary);
    
  }
}
let employee =  new Employee(1,"ajay");
employee.DisplayDetails();

let fullTimEmployee = new   FullTimEmployee(101,"Ajay","HR", 22000);
fullTimEmployee.GetDetails();
