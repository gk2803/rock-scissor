let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoice(){
    const choices = ["r", "p", "s"]
    const randomInt = Math.floor(Math.random()*3);
    return choices[randomInt];
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;

    result_div.innerHTML=`${letterToWord(user)} beats ${letterToWord(computer)}. You win!`;
    

}

function defeat(user,computer){
    computerScore++;
    compScore_span.innerHTML=computerScore;
    user = letterToWord(user);
    computer = letterToWord(computer);
    result_div.innerHTML=`${user} loses to ${computer}. You lose :(`;
    document.getElementById(user).classList.add('green-glow');

}

function tie(user,computer){
  user=letterToWord(user);
  result_div.innerHTML=`You both selected ${user}. It's a tie!`;

}

function letterToWord(letter){
  if(letter==="r") return "Rock";
  if(letter==="s") return "Scissors";
  return "Paper";
}



function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "sr":
      case "rp":
      case "ps":
        defeat(userChoice, computerChoice);
        break;
      case "ss":
      case "pp":
      case "rr":
        tie(userChoice,computerChoice);
        break;
    }
}


function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })
  paper_div.addEventListener('click',function(){
    game("p");
  })
  scissors_div.addEventListener('click',function(){
    game("s");
  })
}

main();
