


const Employee = (fn, ln, bn) => {
	Person.call(this, fn, ln)
	this.badgeNumber = bn
}

// 'this' is bound to the prototype
Employee.prototype.clockin = () => {
	this.isClockedIn = true
}

Employee.prototype.department = 'Same value for every Employee'

var emp = new Employee('John', 'Tester', 123)
emp.clockin()
console.log(emp)