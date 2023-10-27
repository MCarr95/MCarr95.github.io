let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("Age").value

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}



function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + "You are correct";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + "You are wrong";
    } else {
        triviaAnswer.innerHTML = fname + "You are wrong";

    }
}
function truths() {
    let triviaAnswer = document.getElementById("truths-answer");

    let option1Selected = document.getElementById("option1").checked;
    let option2Selected = document.getElementById("option2").checked;
    let option3Selected = document.getElementById("option3").checked;

    if (option1Selected) {
        triviaAnswer.innerHTML = fname + "You are wrong";
    } else if (option2Selected) {
        triviaAnswer.innerHTML = fname + "You are wrong";
    } else {
        triviaAnswer.innerHTML = fname + "You are correct";

    }
}

