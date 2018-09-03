// Get the modal
const modal1 = document.getElementById('modal-1');

// Get the button that opens the modal
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.addEventListener('click', () =>{
  modal1.style.display = "flex";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () =>{
  modal1.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', () =>{
  if (event.target == modal1 || event.target == document.body) {
      modal1.style.display = "none";
  }
})
