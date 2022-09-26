// random number between 1 and 6

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImageSource1 = "images/" + "dice" + randomNumber1 + ".png";
const randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";

const image1 = document.getElementById("img1");
image1.setAttribute("src", randomImageSource1);

const image2 = document.getElementById("img2");
image2.setAttribute("src", randomImageSource2);

function rollDice() {
if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Anietie wins &#128154";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Chi wins &#9989";
} else {
    document.querySelector("h2").innerHTML = "Draw!! &#128079";
}
}

rollDice();
