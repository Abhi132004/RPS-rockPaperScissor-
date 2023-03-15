if (localStorage.lsScore2 === NaN || localStorage.lsScore2 === undefined) {
    localStorage.setItem("lsScore2", 0);
}
if (localStorage.lsScore1 === NaN || localStorage.lsScore1 === undefined) {
    localStorage.setItem("lsScore1", 0);
}

let a = parseInt(localStorage.lsScore2);
let b = parseInt(localStorage.lsScore1);


let cscore;

let yscore;
if (a === NaN || a === undefined || a === 0) {
    cscore = 0;
    yscore = 0;
}

let reset = document.getElementById("reset");

let next1 = document.getElementById("next");
let next2 = document.getElementById("Pagain");

let fist = document.getElementById("fist");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");

let userChoice;
let choice;
let computerChoice;





let submain = document.getElementsByClassName("ft-box")
    // const myDiv = document.getElementById("fistFrame1").style.display = none;




const fistFrame1 = document.getElementById('fistFrame1')
const scissorFrame1 = document.getElementById('scissorFrame1')
const paperFrame1 = document.getElementById('paperFrame1')

const fistFrame2 = document.getElementById('fistFrame2')
const scissorFrame2 = document.getElementById('scissorFrame2')
const paperFrame2 = document.getElementById('paperFrame2');




const rulesbutton = document.getElementById("rules");
const close = document.getElementById("close");
const playAgain = document.getElementById("playAgain");
const playagain = document.getElementById("playagain");
const playaagain = document.getElementById("playaagain");
// Hide the div when the boolean is false


// fist.addEventListener(
//     "click",


// )


// const removeElement = () => {
//     submain.remove();
// }



fist.addEventListener("click",
    function() {
        next();
        userChoice = "fist";
        // const submainArray = Array.from(submain);
        // submainArray.forEach(function(element) {
        //     element.parentNode.removeChild(element);
        // });

        document.getElementById("youP").style.display = "block";
        document.getElementById("pcP").style.display = "block"
        document.getElementById("ftbox").style.display = "none";
        document.getElementById("ftb").style.display = "block";
        showdialogue();
    });
paper.addEventListener("click", function() {
    next();
    userChoice = "paper";
    // const subMainArray = Array.from(submain);
    // subMainArray.forEach(function(element) {
    //     element.parentNode.removeChild(element);
    // })

    document.getElementById("youP").style.display = "block";
    document.getElementById("pcP").style.display = "block"
    document.getElementById("ftbox").style.display = "none";
    document.getElementById("ftb").style.display = "block";
    showdialogue();
});
scissor.addEventListener("click",
    function() {
        next();
        userChoice = "scissor";
        document.getElementById("youP").style.display = "block";
        document.getElementById("pcP").style.display = "block"
        document.getElementById("ftbox").style.display = "none";
        document.getElementById("ftb").style.display = "block";
        showdialogue();

    });

// showdialogue();

const showdialogue = () => {
    console.log(userChoice);
    if (userChoice == "fist") {
        choice = 0;
    } else if (userChoice == "paper") {
        choice = 2;
    }
    if (userChoice == "scissor") {
        choice = 1;
    }

    const arr1 = [fistFrame1, scissorFrame1, paperFrame1];
    const arr2 = [fistFrame2, scissorFrame2, paperFrame2]

    // const randomIndex1 = Math.floor(Math.random() * 3);
    arr1[choice].style.display = 'block';

    const randomIndex2 = Math.floor(Math.random() * 3);

    arr2[randomIndex2].style.display = 'block';
    arr2[(randomIndex2 + 1) % 3].style.display = "none";
    arr2[(randomIndex2 + 2) % 3].style.display = "none";


    if (arr2[randomIndex2] === fistFrame2) {
        computerChoice = "fist";
    } else if (arr2[randomIndex2] === scissorFrame2) {
        computerChoice = "scissor";
    } else if (arr2[randomIndex2] === paperFrame2) {
        computerChoice = "paper";
    }

    console.log(computerChoice);









    // User Win/lose choice
    if (userChoice === "fist" && randomIndex2 === 1) {

        a;
        yscore = a + 1;
        a++;

        document.getElementById("lost").style.display = "none";
        document.getElementById("tie").style.display = "none";


        let win = document.getElementById("win");
        win.style.display = 'block';
        document.getElementById("number2").innerHTML = yscore;
        // localStorage.setItem()
        winRender();
        // loadBorderFrames();

        localStorage.setItem("lsScore2", yscore);

    } else if (userChoice === "fist" && randomIndex2 === 2) {
        b;
        cscore = b + 1;
        b++;

        document.getElementById("win").style.display = "none";
        document.getElementById("tie").style.display = "none";
        lostRender();


        document.getElementById("number1").innerHTML = cscore;
        let lost = document.getElementById("lost");
        lost.style.display = 'block';
        localStorage.setItem("lsScore1", cscore);

    } else
    if (userChoice === "scissor" && randomIndex2 === 0) {
        b;
        cscore = b + 1;
        b++;
        lostRender();



        document.getElementById("win").style.display = "none";
        document.getElementById("tie").style.display = "none";


        document.getElementById("number1").innerHTML = cscore;
        lost.style.display = 'block';
        localStorage.setItem("lsScore1", cscore);
    } else if (userChoice === "scissor" && randomIndex2 === 2) {
        a;
        yscore = a + 1;
        a++;



        document.getElementById("lost").style.display = "none";
        document.getElementById("tie").style.display = "none";


        win.style.display = 'block';
        document.getElementById("number2").innerHTML = yscore;
        winRender();
        localStorage.setItem("lsScore2", yscore);


    } else if (userChoice === "paper" && randomIndex2 === 0) {
        a;
        yscore = a + 1;
        a++;

        document.getElementById("lost").style.display = "none";
        document.getElementById("tie").style.display = "none";


        win.style.display = 'block';
        document.getElementById("number2").innerHTML = yscore;
        winRender();
        localStorage.setItem("lsScore2", yscore);
    } else if (userChoice === "paper" && randomIndex2 === 1) {
        b;
        cscore = b + 1;
        b++;
        lostRender();

        document.getElementById("win").style.display = "none";
        document.getElementById("tie").style.display = "none";




        document.getElementById("number1").innerHTML = cscore;
        lost.style.display = 'block';
        localStorage.setItem("lsScore1", cscore);
    }

    if (userChoice === computerChoice) {
        let tie = document.getElementById("tie");
        tie.style.display = "block";
        document.getElementById("win").style.display = "none";
        document.getElementById("lost").style.display = "none";
        document.getElementById("border").style.display = "none";
        document.getElementById("borderA").style.display = "none";
        document.getElementById("tieaudio").play();
    }

    // document.getElementById("ftb").style.display = block;


}


// const stylesNumber2 = () => {
//     document.getElementById("number2").style.color = "#252525";
//     document.getElementById("number2").style.fontSize = "60px";
//     document.getElementById("number2").style.fontWeight = "600";
//     document.getElementById("number2").style.position = "relative";
//     document.getElementById("number2").style.bottom = "15px";
// }





rulesbutton.addEventListener('click', function() {
    rulebox();
})

close.addEventListener('click', function() {
    let rules = document.getElementById("rulesbox")
    rules.style.display = 'none';
})

const rulebox = () => {
    let rules = document.getElementById("rulesbox")
    rules.style.display = 'block';
}

playAgain.addEventListener('click', function() {
    fistFrame1.style.display = 'none';
    scissorFrame1.style.display = 'none';
    paperFrame1.style.display = 'none';
    fistFrame2.style.display = 'none';
    scissorFrame2.style.display = 'none';
    paperFrame2.style.display = 'none';
    win.style.display = 'none';
    lost.style.display = 'none';
    tie.style.display = 'none';
    document.getElementById("ftbox").style.display = 'block';
    console.log(yscore);
    document.getElementById("next").style.display = "none";
    document.getElementById("rules").style.left = "94%";
    document.getElementById("borderA").style.display = "none";
    document.getElementById("youP").style.display = "none";
    document.getElementById("pcP").style.display = "none";
    document.getElementById("buttonaudio").play();

})
playagain.addEventListener('click', function() {
    fistFrame1.style.display = 'none';
    scissorFrame1.style.display = 'none';
    paperFrame1.style.display = 'none';
    fistFrame2.style.display = 'none';
    scissorFrame2.style.display = 'none';
    paperFrame2.style.display = 'none';
    win.style.display = 'none';
    lost.style.display = 'none';
    tie.style.display = 'none';
    document.getElementById("ftbox").style.display = 'block';
    console.log(yscore);
    document.getElementById("next").style.display = "none";
    document.getElementById("rules").style.left = "94%";
    document.getElementById("borderA").style.display = "none";
    document.getElementById("youP").style.display = "none";
    document.getElementById("pcP").style.display = "none";
    document.getElementById("buttonaudio").play();
})
playaagain.addEventListener('click', function() {
    fistFrame1.style.display = 'none';
    scissorFrame1.style.display = 'none';
    paperFrame1.style.display = 'none';
    fistFrame2.style.display = 'none';
    scissorFrame2.style.display = 'none';
    paperFrame2.style.display = 'none';
    win.style.display = 'none';
    lost.style.display = 'none';
    tie.style.display = 'none';
    document.getElementById("ftbox").style.display = 'block';
    console.log(yscore);
    document.getElementById("next").style.display = "none";
    document.getElementById("rules").style.left = "94%";
    document.getElementById("border").style.display = "none";
    document.getElementById("borderA").style.display = "none";
    document.getElementById("youP").style.display = "none";
    document.getElementById("pcP").style.display = "none"
    document.getElementById("buttonaudio").play();
})


// functions of next add on click button event listner

const next = () => {
    let nextb = document.getElementById("next");
    nextb.style.display = "block";

    nextb.style.left = "94%";
    document.getElementById("rules").style.left = "87%";

}

const nextt = () => {
    document.getElementById("main").style.display = "block";
    document.getElementById("main2").style.display = "none";
    document.getElementById("ftbox").style.display = "block";
    document.getElementById("ftb").style.display = "none";
    document.getElementById("next1").style.display = "none";
    document.getElementById("rules").style.left = "94%";
}

next2.addEventListener('click', function() {
    nextt();
})


next1.addEventListener('click', function() {
    document.getElementById("main").style.display = 'none';
    document.getElementById("main2").style.display = 'block';
    document.getElementById("next").style.display = "none";
    document.getElementById("next1").style.display = "none";
    document.getElementById("successaudio").play();
    document.getElementById("next1").style.left = "94%";
    document.getElementById("rules").style.left = "94%";
})

const lostRender = () => {
    document.getElementById("borderA").style.display = "block";
    document.getElementById("border").style.display = "none";
    document.getElementById("next").style.display = "none"
    document.getElementById("rules").style.left = "94%"
    document.getElementById("lostaudio").play();
}
const winRender = () => {
    document.getElementById("border").style.display = "block";
    document.getElementById("borderA").style.display = "none";
    document.getElementById("winaudio").play();
}
document.getElementById("number2").innerHTML = parseInt(localStorage.lsScore2);
document.getElementById("number1").innerHTML = parseInt(localStorage.lsScore1);