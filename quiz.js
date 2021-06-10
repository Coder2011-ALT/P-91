var operation = "";
function makePage() {
    var name1 = localStorage.getItem("Name 1: ");
    var name2 = localStorage.getItem("Name 2: ");
    var score1 = 0;
    var score2 = 0;
    document.getElementById("player1_name").innerHTML = name1 + ": ";
    document.getElementById("player2_name").innerHTML = name2 + ": ";
    document.getElementById("player1_score").innerHTML = score1;
    document.getElementById("player2_score").innerHTML = score2;
    document.getElementById("player_question").innerHTML = "Question Turn - " + name1;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + name2;
}

// function mult() {
//     console.log("multiplication");
//     operation = "multiplication";
//     window.location = "quiz.html";
// }

// function sub() {
//     console.log("subtraction");
//     operation = "subtraction";
//     window.location = "quiz.html";
// }

// function add() {
//     console.log("addition");
//     operation = "addition";
//     window.location = "quiz.html";
// }

// function divi() {
//     console.log("division");
//     operation = "division";
//     window.location = "quiz.html";
// }

function send() {
    console.log("sending operation...");
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    mult_ans = parseInt(num1) * parseInt(num2);
    localStorage.setItem("Answer:", mult_ans);
    mult_ques = "<h4>" + num1 + "X" + num2 + "</h4>";
    mult_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    mult_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    row = mult_ques + mult_ans_inp + mult_check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    /* if (operation == "multiplication") {
        console.log("mult");
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
        mult_ans = parseInt(num1) * parseInt(num2);
        mult_ques = "<h4>" + num1 + "X" + num2 + "</h4>";
        mult_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
        mult_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
        row = mult_ques + mult_ans_inp + mult_check_btn;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
    if (operation == "addition") {
        console.log("add");
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
        add_ans = parseInt(num1) + parseInt(num2);
        add_ques = "<h4>" + num1 + "+" + num2 + "</h4>";
        add_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
        add_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
        row = add_ques + add_ans_inp + add_check_btn;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
    if (operation == "division") {
        console.log("divide");
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
        divi_ans = parseInt(num2) / parseInt(num1);
        divi_ques = "<h4>" + num2 + "/" + num1 + "</h4>";
        divi_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
        divi_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
        row = divi_ques + divi_ans_inp + divi_check_btn;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
    if (operation == "subtraction") {
        console.log("sub");
        num1 = document.getElementById("number1").value;
        num2 = document.getElementById("number2").value;
        sub_ans = parseInt(num1) - parseInt(num2);
        sub_ques = "<h4>" + num1 + "-" + num2 + "</h4>";
        sub_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
        sub_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
        row = sub_ques + sub_ans_inp + sub_check_btn;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    } */
}

function check() {
    console.log("Function is working");
    userAns = document.getElementById("ans").value;
    realAns = localStorage.getItem("Answer:");
    console.log("User Answer, ", ans, ", Real Answer, ", realAns);
    if(userAns == realAns) {
        score1 += 1;
        document.getElementById("player1_score").innerHTML = score1;
        document.getElementById("player2_score").innerHTML = score2; 
    }
}