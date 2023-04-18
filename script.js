// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var currentDay = $('#currentDay');
  var timeBlockContainer = $('#time-block-container');

  // Load event function from local storage
  function loadEvent() {

    $('#9 .description').val(localStorage.getItem('desc9'));
    $('#10 .description').val(localStorage.getItem('desc10'));
    $('#11 .description').val(localStorage.getItem('desc11'));
    $('#12 .description').val(localStorage.getItem('desc12'));
    $('#13 .description').val(localStorage.getItem('desc13'));
    $('#14 .description').val(localStorage.getItem('desc14'));
    $('#15 .description').val(localStorage.getItem('desc15'));
    $('#16 .description').val(localStorage.getItem('desc16'));
    $('#17 .description').val(localStorage.getItem('desc17'));

  };

  
  // Event listener on the save button on click to run the saveEvent() function
  timeBlockContainer.on('click', '.saveBtn' ,function(event) {
    event.preventDefault();

    //saveEvent
    var element = $(this);
    var textareaE = element.siblings('textarea');
    var textareaJqueryE = $(textareaE[0]);
    var id = textareaJqueryE.parent().attr('id');
    var val = textareaJqueryE.val();
    localStorage.setItem('desc'+id, val);

    
  });

  
  // Got this idea from stack overflow
  function timeBlock () {

    let currentHour = dayjs().hour();
  
    $('.time-block').each(function () {

      let timeBlock = $(this).attr('id');

      if(currentHour == timeBlock) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');

      } else if (currentHour < timeBlock) {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass("future");

      } else if (currentHour > timeBlock) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      }
      
  })};

  timeBlock();
  loadEvent();

  //Add code to display the current date in the header of the page.
  currentDay.text(dayjs().format('dddd, MMMM DD'));
});
