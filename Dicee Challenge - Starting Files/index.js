var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);
console.log(randomNumber2);


var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src",`images/dice${randomNumber1}.png`);
image2.setAttribute("src",`images/dice${randomNumber2}.png`);

var winnerText;
if (randomNumber1>randomNumber2){
    winnerText = "player 1 win The Game";
}
else if(randomNumber2>randomNumber1){
    winnerText = "player 2 win the Game";
}
else{
    winnerText = "draw"
}
document.querySelector("h1").innerText = winnerText;