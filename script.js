
let score = 0;

function startSimulation(){
document.getElementById("scenario").innerText =
"You connect to public WiFi called 'Free_Airport_Wifi'. What do you do?";
}

function simulationAnswer(choice){

let result = document.getElementById("simulationResult");

if(choice === "ignore"){
score++;
result.innerText = "Correct. This could be a fake network attack.";
result.style.color = "green";
}

else{
result.innerText = "Incorrect. Fake networks can steal data.";
result.style.color = "red";
}

}

function quizAnswer(answer){

let result = document.getElementById("quizResult");

if(answer === true){
score++;
result.innerText = "Correct answer.";
result.style.color="green";
}

else{
result.innerText = "Incorrect.";
result.style.color="red";
}

}

function checkHiring(){

let message = document.getElementById("hiringResult");

if(score >= 2){
message.innerText = "Congratulations. You passed and are ready to join the company.";
message.style.color="green";
}

else{
message.innerText = "You did not pass. Please review the course and try again.";
message.style.color="red";
}

}
