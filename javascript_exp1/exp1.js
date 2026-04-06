function getMarks() {
        let num = document.getElementById("subjects").value;
        let marksDiv = document.getElementById("marksInput");
        marksDiv.innerHTML = "";
        for (let i = 1; i <= num; i++) {
            marksDiv.innerHTML += 
                `<input type="number" id="mark${i}" placeholder="Enter marks for Subject ${i}">`;
        }
    }
    function calculateResult() {
        let num = document.getElementById("subjects").value;
        let total = 0;

        for (let i = 1; i <= num; i++) {
            let mark = parseFloat(document.getElementById(`mark${i}`).value);
            total += mark;
        }
        let average = total / num;
        let grade;
        if (average >= 90) grade = "A+";
        else if (average >= 75) grade = "A";
        else if (average >= 60) grade = "B";
        else if (average >= 50) grade = "C";
        else grade = "F";
        let result = (average >= 40) ? "PASS" : "FAIL";

        document.getElementById("output").innerHTML = `
            Total Marks: ${total} <br>
            Average Marks: ${average.toFixed(2)} <br>
            Grade: ${grade} <br>
            Result: ${result}
        `;
    }