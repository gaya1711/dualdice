var random_number1=Math.floor(Math.random() *5)+1;
var random_number2=Math.floor(Math.random() *5)+1;
var randomImgSource1="./images/dice"+random_number1+".png";
var randomImgSource2="./images/dice"+random_number2+".png";
var images1=document.querySelectorAll('img')[0];
images1.setAttribute('src',randomImgSource1);
var images2=document.querySelectorAll('img')[1];
images2.setAttribute('src',randomImgSource2);
if (random_number1 > random_number2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins';
} else if (random_number2 > random_number1) {
    document.querySelector('h1').innerHTML = 'Player 2 wins';
} else if (random_number1 === random_number2) {
    document.querySelector('h1').innerHTML = 'Its a tie';
}

