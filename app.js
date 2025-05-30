let score = document.querySelector(".score");
let neddle = document.querySelector(".neddle");
let btn = document.querySelector(".btn");
let newGame = document.querySelector(".newGame");

let startTime = Date.now();

let rotationSpeed = 180/2000;

let player = "X";

let strength=[];

btn.addEventListener("click", () => {
    neddle.classList.add('pause');
    let now = Date.now();
    let elapsed = now - startTime;
    let angle = Math.round((elapsed*rotationSpeed)%180);
    if (angle === 0) {
       return startTime=Date.now();
    }

    var val;
    if (angle <= 90){
        val = Math.round((100/90)*angle);
    } else if(angle >= 90){
        val = Math.round((100/90)*(180 -angle));
    } else if (angle === 90){
        val = 100;
    }

    strength.push(val);
    console.log(strength);

    score.innerText = `Your score is ${val}`;

    if(player == "X"){
        score.innerText += "\nThis is O player's turn";
        player = "O";
    } else {
        score.innerText += "\nThis is X player's turn";
        player = "X";
    }


});


newGame.addEventListener("click", () =>{
    neddle.classList.remove('neddle');
    setTimeout(() =>{
        neddle.classList.remove('pause');
        neddle.classList.add('neddle');
    }, 10);

    setTimeout(()=>{
        if(strength[0]>strength[1]){
            alert("Player 'O' won");
            location.reload()
        }else {
            alert("Player 'X' won")
            location.reload()
        }
    }, 2000);
})






