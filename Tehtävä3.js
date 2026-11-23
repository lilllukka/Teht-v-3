// main.js
let points = 0;
let autoPerSec = 0;
let perClick = 1;
let clicks = 0;

const Nighthunter = document.querySelector("#Nighthunter");
const Pusher = document.querySelector("#Pusher");
const Screamer = document.querySelector("#Screamer");
const Berserker = document.querySelector("#Berserker");
const Gooseberry = document.querySelector("#Gooseberry");
const Franco = document.querySelector("#Franco");
const Easterman = document.querySelector("#Easterman");
const surpriseButton = document.querySelector("#surpriseButton");


let NHprice = 20;
let Pprice = 100;
let Sprice = 500;
let Bprice = 1000;
let GBprice = 5000;
let Fprice = 10000;
let EMprice = 50000;
let SupPrice = 100000;

const pointDisplay = document.querySelector("#pointDisplay");
const clickButton = document.querySelector("#clickButton");
const perClickDisplay = document.querySelector("#perClick");
const priceDisplay = document.querySelector("#priceDisplay");

function updatePoints() {
    pointDisplay.textContent = "Points: " + points;
}


function render() {
    pointDisplay.textContent = "Points: " + points;
    perClickDisplay.textContent = "Points per click: " + perClick;
    Nighthunter.disabled = points < NHprice;
    Pusher.disabled = points < Pprice;
    Screamer.disabled = points < Sprice;
    Berserker.disabled = points < Bprice;
    Gooseberry.disabled = points < GBprice;
    Franco.disabled = points < Fprice;
    Easterman.disabled = points < EMprice;
    surpriseButton.style.display = Easterman.style.display === "none" ? "block" : "none";
    surpriseButton.disabled = points < SupPrice;
}

document.querySelector("#clickButton").addEventListener("click", () => {
    points += perClick;
    render();
})

document.querySelector("#Nighthunter").addEventListener("click", () => {
    if (points >= NHprice) {
        points -= NHprice;
        perClick += 10;
        Nighthunter.style.display = "none";
        render();
    }
})

document.querySelector("#Pusher").addEventListener("click", () => {
    if (points >= Pprice) {
        points -= Pprice;
        autoPerSec += 5;
        Pusher.style.display = "none";
        render();
    }
})

document.querySelector("#Screamer").addEventListener("click", () => {
    if (points >= Sprice) {
        points -= Sprice;
        perClick += 100;
        Screamer.style.display = "none";
        render();
    }
})

document.querySelector("#Berserker").addEventListener("click", () => {
    if (points >= Bprice) {
        points -= Bprice;
        perClick += 200;
        Berserker.style.display = "none";
        render();
    }
})

document.querySelector("#Gooseberry").addEventListener("click", () => {
    if (points >= GBprice) {
        points -= GBprice;
        perClick += 500;
        Gooseberry.style.display = "none";
        render();
    }   
})

document.querySelector("#Franco").addEventListener("click", () => {
    if (points >= Fprice) {
        points -= Fprice;
        perClick += 100;
        Franco.style.display = "none";
        render();
    }   
})

document.querySelector("#Easterman").addEventListener("click", () => {
    if (points >= EMprice) {
        points -= EMprice;
        perClick += 500;
        Easterman.style.display = "none";
        render();
    }
})

document.querySelector("#surpriseButton").addEventListener("click", () => {
    if (points >= SupPrice) {
        points -= SupPrice;
        alert("Surprise! You wasted a lot of time here, thx!");
        points += 1000000;
        surpriseButton.style.display = "none";
        render();
}
})

render();