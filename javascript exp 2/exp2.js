var employees = [];
function addEmployee() {
    var name = document.getElementById("empName").value;
    var id = document.getElementById("empId").value;
    var salary = parseFloat(document.getElementById("empSalary").value);
    var dept = document.getElementById("empDept").value;
    if (name === "" || id === "" || isNaN(salary)) {
        alert("Please fill all details correctly!");
        return;
    }
    var empObj = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };
    employees.push(empObj);
    alert("Employee Added Successfully!");
    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";
}
function displayAll() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees added yet.";
        return;
    }

    var text = "<b>All Employees:</b><br>";
    for (var i = 0; i < employees.length; i++) {
        text += "Employee " + (i + 1) + ": ";
        for (var key in employees[i]) {
            text += key + "=" + employees[i][key] + ", ";
        }
        text += "<br>";
    }
    document.getElementById("output").innerHTML = text;
}
function filterSalary() {
    var highEarners = employees.filter(function(emp) {
        return emp.salary > 50000;
    });
    var text = "<b>Employees earning more than ₹50,000:</b><br>";
    for (var i = 0; i < highEarners.length; i++) {
        text += highEarners[i].name + " (₹" + highEarners[i].salary + ")<br>";
    }
    if(highEarners.length === 0) { 
    text += "None found."; 
    }
    document.getElementById("output").innerHTML = text;
}
function calcTotalSalary() {
    var total = 0;
    for (var emp of employees) {
        total += emp.salary;
    }
    document.getElementById("output").innerHTML = "<b>Total Salary Payout:</b> ₹" + total;
}
function calcAvgSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees to calculate.";
        return;
    }
    var total = 0;
    for (var emp of employees) {
        total += emp.salary;
        }
    var avg = total / employees.length;
    document.getElementById("output").innerHTML = "<b>Average Salary:</b> ₹" + avg.toFixed(2);
}
function countDept() {
    var count = 0;
    var targetDept = "IT";
    for (var emp of employees) {
        if (emp.department === targetDept) {
            count++;
        }
    }
    document.getElementById("output").innerHTML = "<b>Total Employees in " + targetDept + ":</b> " + count;
}