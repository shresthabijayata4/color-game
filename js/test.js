var score = 0;
// creating div
function creatingDiv() {
    let mainDiv = document.createElement("div");
    mainDiv.id = "grid";
    mainDiv.setAttribute(
        "style",
        "padding : 20px; margin : 20px; border : 2px solid black; display : grid; grid-template-columns:repeat(3,1fr)"
    );
    document.body.appendChild(mainDiv);
}
// creating multiple div
function creatingMultipleDiv() {
    for (let i = 0; i < 9; i++) {
        let mainDivs = document.getElementById("grid");
        let div = document.createElement("div");
        div.className = "hello";
        div.id = `div${i}`
        div.setAttribute(
            "style",
            "padding:50px; margin:5px; border: 2px solid black"
        );
        mainDivs.appendChild(div);
    }
}
// creating div for color text 
function creatingTextAndScoreDiv() {
    let tsDiv = document.createElement("div");
    tsDiv.id = "flex";
    tsDiv.setAttribute(
        "style",
        "margin:20px; padding:5px; border: 2px solid black; display:flex; justify-content: space-evenly"
    );
    document.body.appendChild(tsDiv);
    for (let i = 10; i < 12; i++) {
        let div = document.createElement("div");
        div.id = `div${i}`;
        div.setAttribute(
            "style",
            "padding:50px; margin:2px; border: 2px solid black"
        );
        tsDiv.appendChild(div);
    }
    let div11 = document.getElementById("div11");
    // "Score  = " +
    div11.innerText = score;
}
// generate random bg color
function randomBgColor() {
    const bgColor = [
        "red",
        "green",
        "yellow",
        "blue",
        "pink",
        "gray",
        "brown",
        "orange",
        "purple",
    ];
    var arr = [],
        randomNumber,
        random;
    random = Math.floor(Math.random() * 9);
    document.getElementById("div10").style.backgroundColor = bgColor[random];
    for (let i = 0; i < 9; i++) {
        do {
            randomNumber = Math.floor(Math.random() * 9);
        } while (arr[randomNumber]);
        arr[randomNumber] = true;
        document.getElementById(`div${i}`).style.backgroundColor = bgColor[randomNumber];
    }
    let div11 = document.getElementById("div11");
    console.log(div11.innerText);
    if (parseInt(div11.innerText) < 0) {
        alert("Game Over!! restart");
        window.location.reload();
    }
}
// set interval function
function settingInterval() {
    var interval = setInterval(randomBgColor, 3000);
    let div11 = document.getElementById("div11");
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById(`div${i}`);
        div.addEventListener("click", function() {
            this.style.backgroundColor == document.getElementById("div10").style.backgroundColor ? score += 1 : score -= 1;
            div11.innerText = score;
            clearInterval(interval);
            randomBgColor();
            interval = setInterval(randomBgColor, 3000);
        })
    }
}
creatingDiv();
creatingMultipleDiv();
creatingTextAndScoreDiv();
settingInterval();