// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm A"));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    
    $(".time-block").each(function () {
    const timeBlock = parseInt($(this).attr("id").split("-")[1]);
    const currentHour = dayjs().hour(); 
    if (timeBlock < currentHour) {
        $(this).addClass("past");
      } else if (timeBlock === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
  }
   // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  const savedTime = localStorage.getItem('hour-${currentHour}');
  if (savedTime) {
    $(this).find('textarea').val(savedTime);
  }
});

  $('.saveBtn').on('click', function () {
    const timeBlock = $(this).closest('.time-block');
    const currentHour = timeBlock.attr('id').split('-')[1];
    const eventDescription = timeBlock.find('textarea').val();
  });  

  localStorage.setItem(`hour-${currentHour}`, eventDescription);
  });
