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
//   var description = {
//     hour: description.value.trim(),
//   };

//   alert(localStorage.getItem("description"));
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

//var nine = localStorage.getItem('hour9')
//if (nine) $('#hour9').val(nine) = nine