'use strict';

let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let img = document.querySelector(".dice");
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let current1 = document.getElementById("current--0");
let current1Score = 0
let current2 = document.getElementById("current--1");
let score1 = document.getElementById("score--0");
let mainScore1 = 0;
let mainScore2 = 0;
let score2 = document.getElementById("score--1");
let current2Score=0;

function Roll() {
    let num = (Math.floor(Math.random() * 6) + 1); //1-6

    // console.log(num);
    img.src = `dice-${num}.png`;
    if (player1.className.includes("player--active")) {
        current1Score += (num);
        current1.innerHTML = current1Score;
    }else{
        current2Score += (num);
        current2.innerHTML = current2Score;
    }
    console.log(img.src)
    if (img.src.includes(`dice-1.png`)) {
    
        if (player1.className.includes("player--active")) {
            current1.innerHTML = 0;
            current1Score = 0;
            player1.classList.remove("player--active")
            player2.classList.add("player--active")
        } else {
            current2.innerHTML = 0;
            current2Score = 0;
            console.log("ELSE");
            player2.classList.remove("player--active")
            player1.classList.add("player--active")
        }
    }
}

function Hold() {
    console.log(player1.className);
    if (player1.className.includes("player--active")) {
        player1.classList.remove("player--active")
            player2.classList.add("player--active")
        mainScore1 += current1Score;
        score1.innerHTML = mainScore1;
        // if (mainScore1>=30) {
        //     player1.classList.add("player--winner")
        //     score1.innerHTML = mainScore1;
        //     current1.innerHTML = current1Score;
        // }
    } else {
        console.log("ELSE");
        player2.classList.remove("player--active")
        player1.classList.add("player--active")
        mainScore2 += current2Score;
        score2.innerHTML = mainScore2;
        // if (mainScore2>=30) {
        //     player2.classList.add("player--winner")
        //     score2.innerHTML = mainScore2;
        //     current2.innerHTML = current2Score;
        // }
    }
    current1Score = 0;
    current2Score=0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
 
    if (mainScore1>=30) {
        player1.classList.add("player--winner")
        btnRoll.removeEventListener("click",Roll)
        btnHold.removeEventListener("click",Hold)
        player2.classList.remove("player--active")
        img.src="";
    }
    console.log(typeof(mainScore2));
    if (mainScore2>=30) {
        player2.classList.add("player--winner")
        btnRoll.removeEventListener("click",Roll)
        btnHold.removeEventListener("click",Hold)
        player1.classList.remove("player--active")
        img.src="";
    }
}
btnNew.addEventListener("click", function () {
    current1Score = 0;
    current2Score=0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
    score1.innerHTML=0;
    score2.innerHTML=0;
    mainScore1=0;
    mainScore2=0;
    img.src="";
    player2.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player1.classList.add("player--active")
    btnRoll.addEventListener("click",Roll)
    btnHold.addEventListener("click",Hold)
   
})
btnRoll.addEventListener("click", Roll)

btnHold.addEventListener("click", Hold)





