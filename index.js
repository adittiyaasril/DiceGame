// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//random dice 1

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// random dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Winner

//if player 1 win
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
// if player 2 win
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
//if tie
else {
  document.querySelector("h1").innerHTML = "Tie";
}
