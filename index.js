let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

let scoreHome = 0
let scoreGuest = 0


function homePlus1(){
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}
function homePlus2(){
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}
function homePlus3(){
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function guestPlus1(){
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}
function guestPlus2(){
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}
function guestPlus3(){
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function resetHome(){
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
}
function resetGuest(){
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
}
