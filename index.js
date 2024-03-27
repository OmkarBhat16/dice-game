var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber1);
var randomNumner2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumner2);

var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "./images/" + "dice" + randomNumner2 + ".png";
console.log(randomDiceImage1);
console.log(randomDiceImage2);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumner2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumner2) { //player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else { //draw
  document.querySelector("h1").innerHTML = "Draw!";
}