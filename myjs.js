let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const comp_rock = document.getElementById("c-rock");
const comp_paper = document.getElementById("c-paper");
const comp_scissors = document.getElementById("c-scissors");
const comp_choices = document.getElementsByClassName("c-choice");



function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    user = letterToWord(user);
    computer = letterToWord(computer);
    result_div.innerHTML=`${user} beats ${computer}. You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(()=>document.getElementById(user).classList.remove("green-glow"),500);

}

function defeat(user,computer){
    computerScore++;
    compScore_span.innerHTML=computerScore;
    user = letterToWord(user);
    computer = letterToWord(computer);
    result_div.innerHTML=`${user} loses to ${computer}. You lose :(`;


}

function tie(user,computer){
  user=letterToWord(user);
  result_div.innerHTML=`You both selected ${user}. It's a tie!`;

}

function letterToWord(letter){
  if(letter==="r") return "rock";
  if(letter==="s") return "scissors";
  return "paper";
}

function getComputerChoice(){
    const choices = ["r", "p", "s"]
    const randomInt = Math.floor(Math.random()*3);
    return choices[randomInt];
}

function compStyle(choice){
  let x;
  if(choice==="r"){
    x = comp_rock.classList.add("comp-selection");
  } else if (choice==="s"){
    x =comp_scissors.classList.add("comp-selection");
  }else{
    x = comp_paper.classList.add("comp-selection");
  }
  return x;
}

function removeCompStyle(){
  for(let i=0; i<comp_choices.length; i++){
    comp_choices[i].classList.remove("comp-selection");
  }
}

function game(userChoice){
    removeCompStyle();

    const computerChoice = getComputerChoice();

    let x = compStyle(computerChoice);

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
