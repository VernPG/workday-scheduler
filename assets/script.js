// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayDisplayEl = $("#currentDay");

var today = dayjs().format("MMM DD, YYYY [at] hh:mm a");
function displayCurrentDay() {
  currentDayDisplayEl.text(today);
}

displayCurrentDay();
setInterval(displayCurrentDay, 1000);

// $(function () {});
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//



var saveBtn = $(".btn");

saveBtn.on('click', function(event){
  event.preventDefault();
  var description= $(this).siblings(".description").val();
  var hourId = $(this).siblings(".description").attr("id");
  console.log(hourId)
  localStorage.setItem(hourId, JSON.stringify(description));
})


function saveDescription(event) {
  var description = $(".description");

}
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//

function timeBlockColor (){
  var currHour = dayjs().get("hour");
  console.log(currHour)

  $(".time-block").each(function (){
    var hourId = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(hourId)
    if (hourId < currHour){
      $(this).addClass("past");
    } else if (hourId === currHour){
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    
  }
});
}
timeBlockColor()
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

$("#hour-9 .description").val(localStorage.getItem("hour9"));
$("#hour-10 .description").val(localStorage.getItem("hour10"));
$("#hour-11 .description").val(localStorage.getItem("hour11"));
$("#hour-12 .description").val(localStorage.getItem("hour12"));
$("#hour-13 .description").val(localStorage.getItem("hour13"));
$("#hour-14 .description").val(localStorage.getItem("hour14"));
$("#hour-15 .description").val(localStorage.getItem("hour15"));
$("#hour-16 .description").val(localStorage.getItem("hour16"));
$("#hour-17 .description").val(localStorage.getItem("hour17"));
