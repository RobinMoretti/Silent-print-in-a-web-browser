import './style.css'

let printButton = document.getElementById("printing-ticket-button");
let toggleVisibilityButton = document.getElementById("toggle-ticket-visibility");
let sectionToPrint = document.getElementById("section-to-print");

printButton.addEventListener('click', function(){
  window.print(); 
})



toggleVisibilityButton.addEventListener('click', function(){
  sectionToPrint.classList.toggle("hidden");
})


