// Creates variable named 'title' that finds and captures all the text in an Anchor Tag that contains
// the text "(current)".
var title = $('a:contains("(current)")').text();

// Takes the text captured above and removes 9 characters from the end of the string.
// (we don't want to show "(current)" in our title).
title = title.substring(0, title.length - 9);

// Adding Wayside Waifs to the title.
title = "Wayside Waifs - " + title

// Takes the text we captured, and removed characters from, and puts it in the title tag for display.
$('title').text(title);