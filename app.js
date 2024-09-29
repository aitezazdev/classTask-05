var btn = document.querySelector("button");
var input = document.querySelector("input");
var outputYear = document.getElementById("year-text");
var outputMonth = document.getElementById("month-text");
var outputDay = document.getElementById("day-text");

btn.addEventListener("click", function() {
    var date = new Date(input.value);
    var currentDate = new Date();
    var year = currentDate.getFullYear() - date.getFullYear();
    var month = currentDate.getMonth() - date.getMonth();
    var day = currentDate.getDate() - date.getDate() + 1;
    outputYear.innerHTML = year;
    outputMonth.innerHTML = month;
    outputDay.innerHTML = day;
})