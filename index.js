// ---------------Question 1-----------

function checkingcase(){
    var string = prompt("Enter a string or a character");
    var ascii = string.charCodeAt();
    if (ascii >= 65 && ascii <=90){
        document.getElementById("cases").innerHTML = "uppercase";
    }
    else if (ascii >= 90 && ascii <=122 ){
        document.getElementById("cases").innerHTML = "lowercase";
    }
    else{
        document.getElementById("cases").innerHTML = "number";
    }
}

// ---------------- Question 2 ----------------- 

function checkinginteger(){
    var number1 = +prompt("Enter first number ");
    var number2 = +prompt("Enter second number");

    if (number1 > number2){
        document.getElementById("larger").innerHTML = number1 + " is greater";
    }
    else if (number2 > number1){
        document.getElementById("larger").innerHTML = number2  + " is greater";
    }

    else if (number2 == number1){
        document.getElementById("larger").innerHTML = "Both numbers are equal";
    }
}

// ------------------- Question 3 -------------------------- 

function checkingnumber(){
    var number = +prompt("Enter a number");
    if (number > 0){
        document.getElementById("number").innerHTML = "Entered number is poistive";
    }
    if (number < 0){
        document.getElementById("number").innerHTML = "Entered number is negative";
    }

    if (number ==0){
        document.getElementById("number").innerHTML = "Entered number is zero ";
    }
}

// -------------------- Question 4 -------------------------

function checkingvowel(){
    var character = prompt("Enter a character");

    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
        document.getElementById("vowel").innerHTML = "Character entered is a vowel";
    }

    else if (character == "A" || character == "E" || character == "I" || character == "O" || character == "U"){
        document.getElementById("vowel").innerHTML = "Character entered is a vowel";
    }
    else{
        document.getElementById("vowel").innerHTML = "not a vowel";
    }
}


// ---------------------- Question 5 --------------------- 

function passwordchecker(){
    var password = prompt("Enter the password");
    var correctpassword = "Admin";
    if (password == ""){
        document.getElementById("password").innerHTML = "Please enter your password!";
    }
    else if (password == correctpassword ){
        document.getElementById("password").innerHTML = "Correct! The password you entered matches the orignal password";
    }
    else {
        document.getElementById("password").innerHTML = "Incorrect Password";
    }
}

// ------------------------- Question 6 -----------------------

function fixing(){
    var greeting;
    var hour = 13;
    if (hour < 18){
        greeting = "Good day";
        document.getElementById("fixing").innerHTML = greeting;
    }
    else{
        greeting = "Good evening";
        document.getElementById("fixing").innerHTML = greeting;
    }
}


// ------------------------- Question 7 -------------------------- 

function time(){
    var time = +prompt("Enter time in 24 hrs format");
    if (time >= 0000 && time < 1200){
        document.getElementById("time").innerHTML = "Good Morning!"
    }
    else if (time == 1200 && time < 1700){
        document.getElementById("time").innerHTML = "Good Afternoon!"
    }
    else if (time == 1700 && time < 2100 ){
        document.getElementById("time").innerHTML = "Good Evening!"
    }
    else if (time >=2100 && time <= 2359){
        document.getElementById("time").innerHTML = "Good Night!"
    }
}






