// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
 // TODO: Get user input to create and return an array of employee objects
  // first name and last name and salary
  // return an array?
const collectEmployees = function () {
 
  let employee = [];
  let addEmployees = true;

  while (addEmployees) {
    let firstName = prompt('Enter employees first name:');
    let lastName = prompt('Enter employees last name:');
    let salary = parseFloat(prompt('Enter employees salary:'));

    employee.push({
      firstName,
      lastName,
      salary,
    });

    addEmployees = confirm('would you like to add another employee?');

  }
  console.log(employee)
  return employee;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

  let sum = 0;
  for (let index = 0; index < employeesArray.length; index++){
    sum += employeesArray[index].salary;
  }
   let averageSalary = sum / employeesArray.length;

  console.log(averageSalary,"Average Salary");
console.log(sum,"employeesArray.length");
  return averageSalary;
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

    let randomIndex = Math.floor(Math.random() * employeesArray.length);

   let randomElement = employeesArray[randomIndex];
    
    console.log(randomElement);

    return randomElement;

};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
