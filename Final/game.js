let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("Age").value


    greetParagraph.innerHTML = "You said it was founded in " + age + "  " + "in" + fname + " " + lname + " " + "!";
}
