

let moneyTotal = 0;
const moneyDiv = document.querySelector("#money_total")
moneyDiv.innerHTML = "$" + moneyTotal.toFixed(2);

//* FRUITS *//
// {
//     name: "lemon",
//     cost: 4,
//     money: 1,
//     time: 1,
//     quantity: 0,
// },

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let activeFruits = [];
// const fruit = fruits.filter((fru) => fru.name)[0];

let multiplier = 1;
const fruitButtons = document.querySelectorAll(".fruit");
fruitButtons.forEach(button => {
    button.addEventListener("click", async function(event) {
        const clickName = event.target.classList[1];
        const fruit = fruits.filter((fru) => fru.name == clickName)[0];
        let fruitDiv = document.getElementById(fruit.name);
        const multiplierDiv = button.parentElement.childNodes[3].childNodes[1].childNodes[3];
        console.log(multiplierDiv.innerHTML)
        console.log("selected fruit:", fruit)
        console.log("button: ",button)
        let multiplier = fruit.cost;
        if(clickName == fruit.name) {
            button.parentElement.style.cursor = "not-allowed";
            button.style.pointerEvents = "none";
            button.style.borderColor = "red";
            let nthDifference = Math.round((3.74 + (0.01 * (multiplier * multiplier)) + (0.25 * multiplier) + Number.EPSILON) * 100) / 100;
            multiplierDiv.innerHTML = Math.round(1.25 * (Number(multiplierDiv.innerHTML) + nthDifference) * 100) / 100;
            console.log("nthDifference: ",nthDifference)
            let duration = fruit.time;
            fruitDiv.style.animationDuration = duration + "s";
            fruitDiv.classList.add("loading", "load_fruit");
            await sleep((duration * 1000));
            moneyTotal = moneyTotal + fruit.money;
            moneyDiv.innerHTML = "£" + moneyTotal.toFixed(2);
            fruitDiv.classList.remove("loading", "load_fruit");
            button.style.pointerEvents = "all";
            button.parentElement.style.cursor = "pointer";
            button.style.borderColor = "#fff";
            if(moneyTotal > 999999) {
                moneyDiv.innerHTML = "$" + moneyTotal.toString()[0] + "." + moneyTotal.toString()[1] + moneyTotal.toString()[2] + " mil";
            } else if(moneyTotal > 999999999) {
                moneyDiv.innerHTML = "$" + moneyTotal.toString()[0] + "." + moneyTotal.toString()[1] + moneyTotal.toString()[2] + " bil";
            }
            console.log("moneyTotal: ", moneyTotal) 
            return moneyTotal;
        } else {
            console.log("test");
        }
    })
});

const buyFruitButtons = document.querySelectorAll(".buy");
buyFruitButtons.forEach(button => {
    button.addEventListener("click", async function(event) {
        const clickName = event.target.classList[1];
        
        console.log("buy button: ", button)
        console.log("buy click: ", event)
            console.log("fruit manager:", fruit);
            fruit.click();
            console.log("fruit.time: ",fruit.time)
            await sleep((fruit.time * 1000));
            fruit.click();
    })
})


function getCurrentFruit(selectedFruit) {
    console.log("FRUIT: ",fruits.filter((fruit) => fruit.name == selectedFruit)[0]);
}

function fruitManager(fruitName) {
    console.log("fruitName ", fruitName)
    let fruitButton = document.querySelector("." + fruitName);
    console.log("fruitsL ", fruits)
    const fruit = fruits.filter((fru) => fru.name == fruitName)[0];
    console.log("fruit: ", fruit)
    console.log("fruit name: ", fruit.name)
    let secondsDiv = document.querySelectorAll(".time:has(#${fruitName})");
    secondsDiv.innerHTML = fruit.time;
    console.log("secondsDiv: ",secondsDiv)
    // for (i=0;i<2;i++) {
    //     console.log(fruitButton, fruitName, fruit)
    //     fruitButton.click();
    //     fruit.cost = fruit.cost + ((fruit.cost * 20) / 100);
    //     fruit.money = fruit.money + ((fruit.money * 2) / 100);
    //     fruit.time = fruit.time - ((fruit.time * 2) / 100);
    //     console.log("fruit.cost: ",fruit.cost);
    //     console.log("fruit.money: ",fruit.money);
    //     console.log("fruit.time: ",fruit.time);
    //     sleep((fruit.time * 1000));
    // }

    // const fruitManagerButtons = document.querySelectorAll(".fruit");
    // fruitManagerButtons.forEach(button => {
    //     button.addEventListener("click", async function(event) {
    //         const clickName = event.target.classList[1];
    //         const fruit = fruits.filter((fru) => fru.name == clickName)[0];
    //         console.log("manager button: ", button)
    //         console.log("manager click: ", event)
    //         console.log("fruit manager target:", event.target);
    //         console.log("fruit.time: ", fruit.time)
    //         sleep((fruit.time * 1100));
    //         button.click();
    //     })
    // })
}




// setup item UX
// animation function for each fruit
// function to buy fruit
// function to sell fruit
// function to display seconds