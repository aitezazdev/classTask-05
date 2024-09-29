var btn = document.querySelector("button");
var input = document.querySelector("input");
var outputYear = document.getElementById("year-text");
var outputMonth = document.getElementById("month-text");
var outputDay = document.getElementById("day-text");
var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

btn.addEventListener("click", function () {
  var birthDate = new Date(input.value);
  var currentDate = new Date();

  var years = currentDate.getFullYear() - birthDate.getFullYear();
  var months = currentDate.getMonth() - birthDate.getMonth();
  var days = currentDate.getDate() - birthDate.getDate();

  // for negative months or days
  if (days < 0) {
    months--;
    days += 30;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  if (years == 1) {
    year.textContent = "Year";
  }
  if (months == 1) {
    month.textContent = "Month";
  }
  if (days == 1) {
    day.textContent = "Day";
  }

  outputYear.textContent = years;
  outputMonth.textContent = months;
  outputDay.textContent = days;
});
