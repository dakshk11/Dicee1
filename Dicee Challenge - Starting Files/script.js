var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var rondo = `images/dice${randomNumber1}.png`
var rondo1 = `images/dice${randomNumber2}.png`
document.getElementsByTagName("img")[0].setAttribute("src", rondo)
document.getElementsByTagName("img")[1].setAttribute("src", rondo1)

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}