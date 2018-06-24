let loopingTxt = ['create', 'zone out to music', 'play videos games', 'learn'];
// Get the navbar
const navbar = document.getElementById("navbar");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

textSequence(0);
function textSequence(i) {

    if (loopingTxt.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = loopingTxt[i];
            textSequence(++i);
        }, 1500); // 1 second (in milliseconds)

    } else if (loopingTxt.length == i) { // Loop
        textSequence(0);
    }

}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // navbar.classList.remove("not-sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
