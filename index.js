var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "inverted-dice-"+randomNumber1+".png";

var randomImageSource = randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//for dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "inverted-dice-"+randomNumber2+".png";

var randomImageSource2 = randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}