// alert("weather");

function formatDay() {
  let currentDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentMonth = new Month();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = [currentDate.getDay()];
  let date = [currentDate.getDate()];
  let month = [currentDate.getMonth()];
  let year = [currentDate.getYear()];
  return `${day} ${month} ${year}`;

  //   console.log(day);
}

let citySearched = document.querySelector("#city-name");
citySearched.innerHTML = response.data.name;
function search(city) {
  let apiKey = "9549a8e486fb2296dba66a7130be851f";
  let units = "metric";
  //   let apiUrl =
}
