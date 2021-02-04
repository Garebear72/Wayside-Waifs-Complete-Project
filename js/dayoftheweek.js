const currentDate = new Date();
const currentDay = currentDate.getDay();
// 0 = Sunday, 1 = Monday, and so on until 6 = Saturday

if (currentDay !== 1) {
    $('#sidedivtitle').text(`We're open!`);
}   else {
    $('#sidedivtitle').text(`We're closed.`);
}

if (currentDay == 0) {
    $('.sunHours').addClass('font-weight-bold')
} else if (currentDay == 1) {
    $('.monHours').addClass('font-weight-bold')
} else if (currentDay == 2) {
    $('.tuesHours').addClass('font-weight-bold')
} else if (currentDay == 3) {
    $('.wedHours').addClass('font-weight-bold')
} else if (currentDay == 4) {
    $('.thursHours').addClass('font-weight-bold')
} else if (currentDay == 5) {
    $('.friHours').addClass('font-weight-bold')
} else if (currentDay == 6) {
    $('.satHours').addClass('font-weight-bold')
}