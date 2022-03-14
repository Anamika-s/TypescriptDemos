var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    Employee.prototype.DisplayDetails = function () {
        console.log(this.empId);
        console.log(this.empName);
    };
    return Employee;
}());
var FullTimEmployee = /** @class */ (function (_super) {
    __extends(FullTimEmployee, _super);
    function FullTimEmployee(empId, empName, dept, salary) {
        var _this = _super.call(this, empId, empName) || this;
        _this.dept = dept;
        _this.salary = salary;
        return _this;
    }
    FullTimEmployee.prototype.GetDetails = function () {
        _super.prototype.DisplayDetails.call(this);
        console.log("Dept is " + this.dept);
        console.log("Salary is " + this.salary);
    };
    return FullTimEmployee;
}(Employee));
var employee = new Employee(1, "ajay");
employee.DisplayDetails();
var fullTimEmployee = new FullTimEmployee(101, "Ajay", "HR", 22000);
fullTimEmployee.GetDetails();
