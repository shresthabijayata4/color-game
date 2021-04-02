


var container = document.getElementsByClassName('div_col')
var randomcolor = ["Green", "Blue", "Red", "Orange", "Violet", "Indigo", "Cyan", "Yellow ", "Purple"];
var score = 0;
var textColor;



function changeColor1() {

    var arr = [];

    var random = Math.floor(Math.random() * 9);
    const color = document.getElementById("color-name").innerHTML = randomcolor[random];
    document.getElementById('color-button').style.background = randomcolor[random];
    textColor = color.toLowerCase();
    console.log(textColor);

    for (y = 0; y < container.length; y++) {
        do {
            var randnum = Math.floor((Math.random() * 9));
        } while (arr[randnum])
        arr[randnum] = true;
        container[y].style.backgroundColor = randomcolor[randnum];

    }

}


function settime() {
    var interval = setInterval(changeColor1, 3000);
    for (var i = 0; i < container.length; i++) {


        container[i].addEventListener("click", function clickColor() {

            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor);



            if (clickedColor === textColor) {
                score += 1;

            }

            else {

                if (score > 0) {
                    score -= 1;
                } else if (score <= 0) {
                    score = 0;
                    alert("Game Over!! want to restart?");
                    window.location.reload();
                }
            }
            clearInterval(interval);
            changeColor1();
            interval = setInterval(changeColor1, 3000);
            document.getElementById("show-score").innerHTML = score;


        })

    }
}

settime();












// function showColor1() {


//     var arr = [];

//     var randnum = Math.floor((Math.random() * 9));


//     console.log(textColor);



// }

// function changeColor() {

//     setInterval(
//         function () {
//             var arr = [];


//             for (y = 0; y < container.length; y++) {
//                 do {
//                     var randnum = Math.floor((Math.random() * 9));
//                 } while (arr[randnum])
//                 arr[randnum] = true;


//                 container[y].style.backgroundColor = randomcolor[randnum];
//             }
//         }, 3000);
// }





// function showColor() {
//     setInterval(
//         function () {
//             var arr = [];

//             var randnum = Math.floor((Math.random() * 9));
//             // container[y].style.backgroundColor = randomcolor[randnum];
//              const color= document.getElementById('color-name').innerHTML = randomcolor[randnum];
//              document.getElementById('color-button').style.background =  randomcolor[randnum];

//             textColor = color.toLowerCase();
//             console.log(textColor);


//         }, 3000);
// }




// changeColor();
// showColor();





