function diceRandom() {

    var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
    var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;
    return [randomNumber1,randomNumber2];
}

function diceImage () {
    
    var randomNumbers = diceRandom();
    var randomNumber1 = randomNumbers[0];
    var randomNumber2 = randomNumbers[1];
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
    
    
    if (randomNumber1 == 1 ) {
         var image1 = image1.setAttribute("src", "Assets/images/dice1.png")
    } else if (randomNumber1 == 2) {
         var image1 = image1.setAttribute("src", "Assets/images/dice2.png");
    } else if (randomNumber1 == 3) {;
         var image1 = image1.setAttribute("src", "Assets/images/dice3.png");         
    } else if (randomNumber1 == 4) {
         var image1 = image1.setAttribute("src", "Assets/images/dice4.png");
    } else if (randomNumber1 == 5) {
         var image1 = image1.setAttribute("src", "Assets/images/dice5.png");
    } else {
         var image1 = image1.setAttribute("src", "Assets/images/dice6.png");
    }

    if (randomNumber2 == 1 ) {
         var image2 = image2.setAttribute("src", "Assets/images/dice1.png")
    } else if (randomNumber2 == 2) {
         var image2 = image2.setAttribute("src", "Assets/images/dice2.png");
    } else if (randomNumber2 == 3) {;
         var image2 = image2.setAttribute("src", "Assets/images/dice3.png");         
    } else if (randomNumber2 == 4) {
         var image2 = image2.setAttribute("src", "Assets/images/dice4.png");
    } else if (randomNumber2 == 5) {
         var image2 = image2.setAttribute("src", "Assets/images/dice5.png");
    } else {
         var image2 = image2.setAttribute("src", "Assets/images/dice6.png");
    }  


}