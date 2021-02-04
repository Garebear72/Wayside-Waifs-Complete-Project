// just some variables to make the function im going to inevitable struggle with anyway look neater :)

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

// Code runs on page load and window resize
// I don't personally want to interrupt the flow of the code below so im writing all my comments up above and referencing to their line number if needed

// If the viewport is at least 768px wide (line #16), it'll receive a bootstrap defined class named "show" which is added to it in the html. Also, for accessibility reasons, the value of the aria-expanded attribute of the dropdown's toggle link will change to "true" as well. I don't have a lot of knowledge yet on accessibility feautures but it's one thing I do know how to do :D

// If someone is using my page on their phone, or on a very small screen (note the 768px width) then i chose to just unbind the handlers all together attached to the mouse events so that nothing unexpected happens

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});