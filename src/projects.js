// Get the modal
const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
const modal3 = document.getElementById('modal-3');
const modal4 = document.getElementById('modal-4');
const modal5 = document.getElementById('modal-5');
const modal6 = document.getElementById('modal-6');

// Get the button that opens the modal
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6];

let closing = (e) =>{
  e.target.parentElement.style.display = "none";
}

// let modalDisplay = (e) =>{
//   e.target
// }
// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close");

// When the user clicks the button, open the modal
btn1.addEventListener('click', () =>{
  modal1.style.display = "flex";
});
btn2.addEventListener('click', () =>{
  modal2.style.display = "flex";
});
btn3.addEventListener('click', () =>{
  modal3.style.display = "flex";
});
btn4.addEventListener('click', () =>{
  modal4.style.display = "flex";
});
btn5.addEventListener('click', () =>{
  modal5.style.display = "flex";
});
btn6.addEventListener('click', () =>{
  modal6.style.display = "flex";
});
// When the user clicks on <span> (x), close the modal
span[0].addEventListener('click', closing);
span[1].addEventListener('click', closing);
span[2].addEventListener('click', closing);
span[3].addEventListener('click', closing);
span[4].addEventListener('click', closing);
span[5].addEventListener('click', closing);
