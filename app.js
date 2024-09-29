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

  if (input.value == "" || birthDate > currentDate) {
    alert("Please enter a valid date");
    return;
  }

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

  // handle plurals
  if (years == 1) {
    year.textContent = "Year";
  }
  if (months == 1) {
    month.textContent = "Month";
  }
  if (days == 1) {
    day.textContent = "Day";
  }

  // handle single digit
  if (years < 10) {
    outputYear.textContent = "0" + years;
  } else {
    outputYear.textContent = years;
  }

  if (months < 10) {
    outputMonth.textContent = "0" + months;
  } else {
    outputMonth.textContent = months;
  }

  if (days < 10) {
    outputDay.textContent = "0" + days;
  } else {
    outputDay.textContent = days;
  }
});
