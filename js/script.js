


var container = document.getElementsByClassName('div_col')
var randomcolor = [ "Green", "Blue", "Red", "Orange", "Violet", "Indigo", "Cyan", "Yellow ", "Purple"];

// var settime =  clickColor();
var score=0;
var textColor;

function changeColor() {

    setInterval(
        function () {
            var arr = [];


            for (y = 0; y < container.length; y++) {
                do {
                    var randnum = Math.floor((Math.random() * 9));
                } while (arr[randnum])
                arr[randnum] = true;
              

                container[y].style.backgroundColor = randomcolor[randnum];
            }
        }, 3000);
}


function changeColor1() {

    
      
            var arr = [];


            for (y = 0; y < container.length; y++) {
                do {
                    var randnum = Math.floor((Math.random() * 9));
                } while (arr[randnum])
                arr[randnum] = true;
              

                container[y].style.backgroundColor = randomcolor[randnum];
            }
        
}


function showColor1() {
    
       
            var arr = [];

            var randnum = Math.floor((Math.random() * 9));
            // container[y].style.backgroundColor = randomcolor[randnum];
             const color= document.getElementById('color-name').innerHTML = randomcolor[randnum];
             document.getElementById('color-button').style.background =  randomcolor[randnum];
           
            textColor = color.toLowerCase();
            console.log(textColor);
         

   
}





function showColor() {
    setInterval(
        function () {
            var arr = [];

            var randnum = Math.floor((Math.random() * 9));
            // container[y].style.backgroundColor = randomcolor[randnum];
             const color= document.getElementById('color-name').innerHTML = randomcolor[randnum];
             document.getElementById('color-button').style.background =  randomcolor[randnum];
           
            textColor = color.toLowerCase();
            console.log(textColor);
         

        }, 3000);
}



for (var i = 0; i < container.length; i++) {

    var settime = container[i].addEventListener("click", function clickColor(){
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
       
        //compare color to pickedColor
        if (clickedColor === textColor) {
            score += 1;
            changeColor1();
            showColor1();
            
            
        } 
        
        else {
            
            if (score > 0) {
                score -= 1;
              } else if (score <= 0) {
                score = 0;
                alert("Gameover");
              }
        }
        document.getElementById("show-score").innerHTML = score;
        console.log(settime);
       
    })
   
}

changeColor();
showColor();





