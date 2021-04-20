var moneyTotal = 0;
document.querySelector("#money_total").innerHTML = "£" + moneyTotal.toFixed(2);

//* FRUITS *//
var lemon = 1;
var kiwi = 60;
var strawbery = 180;
var loadLemon = document.querySelector("#lemon");
var loadKiwi = document.querySelector("#kiwi");
var loadStrawbery = document.querySelector("#strawbery");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function lemonIncrease(){
    loadLemon.classList.add("loading", "load_lemon");
    await sleep(1000);
    moneyTotal = moneyTotal + lemon;
    document.querySelector("#money_total").innerHTML = "£" + moneyTotal.toFixed(2);
    loadLemon.classList.remove("loading", "load_lemon");
    return moneyTotal;
}

async function kiwiIncrease(){
    loadKiwi.classList.add("loading", "load_kiwi");
    await sleep(2000);
    moneyTotal = moneyTotal + kiwi;
    document.querySelector("#money_total").innerHTML = "£" + moneyTotal.toFixed(2);
    loadKiwi.classList.remove("loading", "load_kiwi");
    return moneyTotal;
}

async function strawberyIncrease(){
    loadStrawbery.classList.add("loading", "load_strawbery");
    await sleep(3000);
    moneyTotal = moneyTotal + strawbery;
    document.querySelector("#money_total").innerHTML = "£" + moneyTotal.toFixed(2);
    loadStrawbery.classList.remove("loading", "load_strawbery");
    return moneyTotal;
}