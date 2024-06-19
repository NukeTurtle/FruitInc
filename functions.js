let moneyTotal = 0;
const moneyDiv = document.querySelector("#money_total")
moneyDiv.innerHTML = "$" + moneyTotal.toFixed(2);

//* FRUITS *//
const fruits = [
    {
        name: "lemon",
        cost: 4,
        money: 1,
        time: 1
    },
    {
        name: "kiwi",
        cost: 20,
        money: 60,
        time: 2
    },
    {
        name: "strawbery",
        cost: 400,
        money: 50080,
        time: 3
    },
    {
        name: "banana",
        cost: 2000,
        money: 500000,
        time: 4,
    },
]

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
        console.log("selected fruit:", fruit)
        console.log(button)
        let multiplier = fruit.cost;
        if(clickName == fruit.name) {
            button.parentElement.style.cursor = "not-allowed";
            button.style.pointerEvents = "none";
            button.style.borderColor = "transparent";
            const nthDifference = Math.round((3.74 + (0.01 * (multiplier * multiplier)) + (0.25 * multiplier) + Number.EPSILON) * 100) / 100;
            fruit.cost = nthDifference;
            console.log(nthDifference)
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

async function fruitManager(fruitName) {
    let fruitButton = document.querySelector("." + fruitName);
    console.log(fruitName.index)
    const fruit = fruits.filter((fru) => fru.name)[0];
    for (i=0;i<3;i++) {
        console.log(fruitButton, fruitName, fruit)
        fruitButton.click();
        fruit.cost = fruit.cost + ((fruit.cost * 20) / 100);
        fruit.money = fruit.money + ((fruit.money * 2) / 100);
        fruit.time = fruit.time - ((fruit.time * 2) / 100);
        console.log("fruit.cost: ",fruit.cost);
        console.log("fruit.money: ",fruit.money);
        console.log("fruit.time: ",fruit.time);
        await sleep((fruit.time * 1000));
    }

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

async function testFunc() {
    console.log("demo");
    await sleep(5000);
    console.log("test");
}