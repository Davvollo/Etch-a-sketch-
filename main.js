function CreateDiv() {
  let div = document.createElement("div");
  div.setAttribute("class", "paint");
  div.style.backgroundColor = "#fff";
  div.style.border = "1px solid #333";
  let Canvas = document.getElementById("Canvas");
  Canvas.appendChild(div);
}

function MakeCanvas(number) {

  let howMuch = number * number;

  let Canvas = document.getElementById("Canvas");
  Canvas.innerHTML = "";
  Canvas.style.gridTemplateColumns = "repeat(" + number + ",1fr)";
  Canvas.style.gridTemplateRows = "repeat(" + number + ",1fr)";

  for (var i = 0; i < howMuch; i++) {
    CreateDiv();
  }
  CreateEventListeners();
}

function GetRandomColor() {
  color = "RGB(" + Math.floor(Math.random()*255) + "," +
                Math.floor(Math.random()*255) + "," +
                Math.floor(Math.random()*255) + ")";
}

function CreateEventListeners() {
  var divs = document.getElementsByClassName('paint');

  for (var i=0; i < divs.length; i++) {
    divs[i].addEventListener("mouseover", function (event){
      if (paint == true) {
        if (whichColor == 1) color = "#000"
        if (whichColor == 2) color = "#fff"
        if (whichColor == 3) GetRandomColor();
        event.target.style.backgroundColor = color;
      }
    });
  };
}

var paint = true;
var whichColor = 1;
var color = "#000";
var Canvas = document.getElementById('Canvas');

Canvas.addEventListener("click", function() {
  paint = !paint;
})

var black = document.getElementById('black');
var white = document.getElementById('white');
var rainbow = document.getElementById('rainbow');
var restart = document.getElementById('start_button');

black.addEventListener("click", function() {
  whichColor = 1
})

white.addEventListener("click", function() {
  whichColor = 2
})

rainbow.addEventListener("click", function() {
    whichColor = 3
})

restart.addEventListener("click", function() {
    var input = prompt("Type how big you want the canvas, just the number");
    var number = parseInt(input);
    if (isNaN(number)) {
      alert("Invalid value!");
    } else {
      MakeCanvas(number);
    }
})

MakeCanvas(16);
