/*mostrare / nascondere il menu principale
(ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).*/


let ic = document.querySelector(".fas");

let hb = document.querySelector(".hamburger-menu");

let cl = document.querySelector(".close");


ic.addEventListener("click", function(){
  hb.className = hb.classList + " active";
});


cl.addEventListener("click", function(){
  hb.className = hb.classList - " active";
  hb.className = hb.classList + " hamburger-menu";
});