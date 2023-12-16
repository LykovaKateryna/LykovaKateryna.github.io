function validateForm() {
    var form = document.getElementById("myForm");
    var errorMessages = document.getElementById("errorMessages");
    var fullName = document.getElementById("fullName").value;
    var variant = document.getElementById("variant").value;
    var group = document.getElementById("group").value;
    var phone = document.getElementById("phone").value;
    var idCard = document.getElementById("idCard").value;
    errorMessages.innerHTML = "";

    if (form.checkValidity()) {
        var successMessage = "Форма валідна! Дані відправлені.\n\n" +
                             "ПІБ: " + fullName + "\n" +
                             "Варіант: " + variant + "\n" +
                             "Група: " + group + "\n" +
                             "Телефон: " + phone + "\n" +
                             "ID-card: " + idCard;
        alert(successMessage);
    } else {
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];
            if (!element.checkValidity()) {
                errorMessages.innerHTML += element.title + ": " + element.validationMessage + "<br>";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createTable();
});

function createTable() {
    var table = document.getElementById("myTable");

    // Заповнення таблиці
    for (var i = 1; i <= 6; i++) {
        var row = table.insertRow(i - 1);
        for (var j = 1; j <= 6; j++) {
            var cell = row.insertCell(j - 1);
            cell.textContent = (i - 1) * 6 + j; // Заповнення номерами від 1 до 36
            cell.addEventListener("mouseover", changeColorOnMouseOver);
            cell.addEventListener("click", changeColorOnClick);
            cell.addEventListener("dblclick", changeRowColor);
        }
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorOnMouseOver(event) {
    var variant = 1;
    var cellValue = parseInt(event.target.textContent, 10);

    if (cellValue === variant) {
        event.target.style.backgroundColor = getRandomColor();
    }
}

function changeColorOnClick(event) {
    var variant = 1;
    var cellValue = parseInt(event.target.textContent, 10);
    if (cellValue === variant) {
    var selectedColor = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = selectedColor;
    }
}

function changeRowColor(event) {
    var variant = 1;
    var cellValue = parseInt(event.target.textContent, 10);
    var row = event.target.parentNode;
    if (cellValue === variant) {
    for (var i = 0; i < row.cells.length; i++) {
        row.cells[i].style.backgroundColor = document.getElementById("colorPicker").value;
    }
}
}