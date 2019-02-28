
function peek() {

  var a = document.getElementById("div1");
  a.style.animation = "peek 2s";
  
  
}

function shy() {

  var b = document.getElementById("div2");
  b.style.animation = "move 3s 1";

  alert("Oh no! You Scared it!");

  document.getElementById("shyGuy").innerHTML = "It's feeling better now";
}
