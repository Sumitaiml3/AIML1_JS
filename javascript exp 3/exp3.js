let heading = document.getElementById("heading");
    let para = document.getElementById("para");
    let input = document.getElementById("inputText");
    document.getElementById("changeText").addEventListener("click", function() {
        heading.textContent = input.value || "No text entered!";
    });
    document.getElementById("changeColor").addEventListener("click", function() {
        document.body.style.backgroundColor =
            "#" + Math.floor(Math.random()*16777215).toString(16);
    });
    let size = 16;
    document.getElementById("increaseFont").addEventListener("click", function() {
        size += 2;
        para.style.fontSize = size + "px";
    });
    document.getElementById("togglePara").addEventListener("click", function() {
        if (para.style.display === "none") {
            para.style.display = "block";
        } else {
            para.style.display = "none";
        }
    });