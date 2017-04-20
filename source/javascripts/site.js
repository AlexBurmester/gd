// This is where it all goes :)


// moves navbar to bottom when window is less than 640px wide

$(window).on('resize', function() {
  if ($(window).width() < 640) {
      $("#expertise").appendTo("#content-bar");
  } else {
      $("#expertise").appendTo("#sidebar");;
  }
});