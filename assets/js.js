
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
///THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


//The current time
//var currentHour = moment().format("H");
//console.log(currentHour);
//console.log(parseInt(currentHour))
let date = moment();
document.getElementById("currentDay").innerHTML = moment();

var button = $(".saveBtn")

// save tasks to local storage
function saveTask() {

  for (let i = 0; i < 9; i++) {   
  
    localStorage.setItem(`notes${i}`, document.querySelector(`#am${i+8}`).value)
          
  }
  
};

//display task to the schedule
function displayTask(){
  var task0 = localStorage.getItem("notes0")
  document.getElementById("am8").value = task0;
  
  var task1 = localStorage.getItem("notes1")
  document.getElementById("am9").value = task1;
  
  var task2 = localStorage.getItem("notes2")
  document.getElementById("am10").value = task2
  
  var task3 = localStorage.getItem("notes3")
  document.getElementById("am11").value = task3;
  
  var task4 = localStorage.getItem("notes4")
  document.getElementById("am12").value = task4;
  
  var task5 = localStorage.getItem("notes5")
  document.getElementById("am13").value = task5;
  
  var task6 = localStorage.getItem("notes6")
  document.getElementById("am14").value = task6;
  
  var task7 = localStorage.getItem("notes7")
  document.getElementById("am15").value = task7;
  
  var task8 = localStorage.getItem("notes8")
  document.getElementById("am16").value = task8;
  
  var task9 = localStorage.getItem("notes9")
  document.getElementById("am17").value = task9;

 
};

displayTask()




// clears todos
function trash(){
  localStorage.clear();
  displayTask()
};







// };









// function displayTask(){

//   var task = localStorage.getItem(`notes${i}`, document.querySelector(`#am${i+8}`))
//   document.getElementsId(`#am${i+8}`).innerHTML = task
//   };
  
//   displayTask()

















// //document.querySelector(`notes${i}`).value = notes

// var car = [ {
//   key: "value", 
//   color: 'red',
//   make: "toyota",
//   year: 1995
// },
// {
//   key: "value", 
//   color: 'yellow',
//   make: "tesla",
//   year: 2016
// }
// ]

// console.log(car[1].year)

// //var savehr = this.parentNode.parentNode.childNodes[3].childNodes[1].id;
// //var task = this.parentNode.parentNode.childNodes[3].childNodes[1].value
// //$(document).ready(function () {
// //var savestask = document.getElementById("savebtn");





// //var tasknote = document.getElementById('am8');
// //var tasks = document.querySelector(".choreArea");

// //var tasks = document.querySelector('.choreArea');
// //var output_textArea = document.querySelector('.choreArea');
// var save = document.querySelector(".saveBtn");


// let tasks = document.getElementsByClassName('.choreArea')


// "notes3"
// "start a striung" + notes + "string continues"
// `start of the string ${notes} string continues`
// console.log(new Date().getUTCFullYear())

// tasks.value = localStorage.getItem("am8");
// tasks.value = localStorage.getItem("am9");
// tasks.value = localStorage.getItem("am10");


// tasks.addEventListener("keyup", event => {
// console.log(event)
//   localStorage.setItem("notes", event.target.value)
// });








// // $(button).click(function () {
 
// // });



// function updateOutput() {
//   console.log(this.parentNode.parentNode.childNodes[3].childNodes[1].id);
//   console.log(this.parentNode.parentNode.childNodes[3].childNodes[1].value);
// }
// var savehr = this.parentNode.parentNode.childNodes[3].childNodes[1].id;
// var task = this.parentNode.parentNode.childNodes[3].childNodes[1].value

// localStorage.setItem(savehr, task);
