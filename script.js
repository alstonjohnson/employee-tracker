// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  const collectEmployees = function() {
    let addMore = true;
  
    while (addMore) {
      const userInputFN = prompt("Enter your first name");
      const userInputLN = prompt("Enter your last name");
      const salary = prompt("Enter your salary");
  
      const employee = {
        firstName: userInputFN,
        lastName: userInputLN,
        salary: salary,
      };
  
      employees.push(employee); 
  
      const table = document.getElementById("employee-table");
  
      const newRow = table.insertRow(); 
  
      const cell1 = newRow.insertCell();
      cell1.textContent = employee.firstName;
  
      const cell2 = newRow.insertCell();
      cell2.textContent = employee.lastName;
  
      const cell3 = newRow.insertCell();
      cell3.textContent = employee.salary;

      employee.salary = Number(employee.salary);

  
      addMore = confirm("Do you want to add another employee?");
    }
  };
 

// Display the average salary
  // TODO: Calculate and display the average salary

const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
    
  employees.forEach(employee => {
      totalSalary += employee.salary;
  });

  const avgSalary = totalSalary / employees.length;

  console.log(`Average Salary: $${avgSalary.toFixed(2)} for ${employees.length} employees`);
}


// Select a random employee
  // TODO: Select and display a random employee

const getRandomEmployee = function(employeesArray) {
const rdmIndex = Math.floor(Math.random() * employees.length);
    
const rdmEmployee = employees[rdmIndex];

console.log(`Random Employee: ${rdmEmployee.firstName} ${rdmEmployee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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
