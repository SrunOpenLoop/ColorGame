var color = [];
var numSquare = 6;
var correctColor;
var Sqaures = document.querySelectorAll(".square");
var rgb = document.querySelector(".rgb");
var displayRGB = document.querySelector("#messenge");
var resetBtn = document.querySelector("#reset");

var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
hardMode.classList.add("selected");

easyMode.addEventListener("click", function() {
  numSquare = 3;
  easyMode.classList.add("selected");
  hardMode.classList.remove("selected");
  color = generateColor(numSquare);
  correctColor = pickColor();
  rgb.textContent = correctColor;
  for (i = 0; i < Sqaures.length; i++) {
    if (!color[i]) {
      Sqaures[i].style.display = "none";
    }
    Sqaures[i].style.backgroundColor = color[i];
  }
  resetBtn.textContent = "New Colors";
  document.querySelector(".head").style.backgroundColor = "steelblue";
  displayRGB.textContent = "";
});

hardMode.addEventListener("click", function() {
  numSquare = 6;
  hardMode.classList.add("selected");
  easyMode.classList.remove("selected");
  color = generateColor(numSquare);
  correctColor = pickColor();
  rgb.textContent = correctColor;
  for (i = 0; i < Sqaures.length; i++) {
    Sqaures[i].style.backgroundColor = color[i];
    Sqaures[i].style.display = "block";
  }
  resetBtn.textContent = "New Colors";
  document.querySelector(".head").style.backgroundColor = "steelblue";
  displayRGB.textContent = "";
});

color = generateColor(numSquare);
correctColor = pickColor();
rgb.textContent = correctColor;

for (i = 0; i < Sqaures.length; i++) {
  Sqaures[i].style.backgroundColor = color[i];
}
//!error
for (i = 0; i < Sqaures.length; i++) {
  Sqaures[i].addEventListener("click", function() {
    if (correctColor == this.style.backgroundColor) {
      displayRGB.textContent = "CORRECT";
      document.querySelector(".head").style.backgroundColor = correctColor;
      for (i = 0; i < Sqaures.length; i++) {
        Sqaures[i].style.backgroundColor = correctColor;
      }
      resetBtn.textContent = "Play Again?";
    } else {
      displayRGB.textContent = "Try Again";
      this.style.background = "blueviolet";
    }
  });
}

resetBtn.addEventListener("click", function() {
  color = generateColor(numSquare);
  correctColor = pickColor();
  rgb.textContent = correctColor;
  for (i = 0; i < Sqaures.length; i++) {
    Sqaures[i].style.backgroundColor = color[i];
  }
  resetBtn.textContent = "New Colors";
  document.querySelector(".head").style.backgroundColor = "steelblue";
  displayRGB.textContent = "";
});

function generateColor(numSquare) {
  var arr = [];
  for (i = 0; i < numSquare; i++) arr.push(randomColor());
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}
