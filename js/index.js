const p1ScoreDOM = document.getElementById("p1Score");
const p2ScoreDOM = document.getElementById("p2Score");
const p1CardDOM = document.getElementById("p1Card");
const p2CardDOM = document.getElementById("p2Card");
const infoDOM = document.getElementById("infoText");
const newGameDOM = document.getElementById("invisible");
let heroes = ["rock", "paper", "scissors", "lizard", "spock"];
let delayInMilliseconds = 1000;

let p1Score = 0;
let p2Score = 0;
let winTieLose = "";
/* Information
0 rock
1 paper
2 scissors
3 lizard
4 spock

0 > 2 , 3
1 > 0 , 4
2 > 1 , 3
3 > 4 , 1
4 > 2 , 0
*/

function newGame(selection) {
  let randomOpponent = heroes[Math.floor(Math.random() * 5)];
  p1CardDOM.innerHTML =
    "<img class='img-fluid my-auto' src='./images/" + selection + ".png'>";
  p2CardDOM.innerHTML =
    "<img class='img-fluid' src='./images/" + randomOpponent + ".png'>";
  if (selection === randomOpponent) {
    infoDOM.innerHTML = "It's a tie.";
    winTieLose = "t";
  } else if (selection === "rock") {
    switch (randomOpponent) {
      case "paper":
        infoDOM.innerHTML = "Rock is covered by paper.";
        winTieLose = "l";
        break;
      case "scissors":
        infoDOM.innerHTML = "Rock crushes scissors.";
        winTieLose = "w";
        break;
      case "lizard":
        infoDOM.innerHTML = "Rock crushes lizard.";
        winTieLose = "w";
        break;
      case "spock":
        infoDOM.innerHTML = "Rock is vaporized by Spock.";
        winTieLose = "l";
        break;
      default:
        break;
    }
  } else if (selection === "paper") {
    switch (randomOpponent) {
      case "rock":
        infoDOM.innerHTML = "Paper covers rock.";
        winTieLose = "w";
        break;
      case "scissors":
        infoDOM.innerHTML = "Paper is cut by scissors.";
        winTieLose = "l";
        break;
      case "lizard":
        infoDOM.innerHTML = "Paper is eaten by lizard.";
        winTieLose = "l";
        break;
      case "spock":
        infoDOM.innerHTML = "Paper disproves Spock.";
        winTieLose = "w";
        break;
      default:
        break;
    }
  } else if (selection === "scissors") {
    switch (randomOpponent) {
      case "rock":
        infoDOM.innerHTML = "Scissors are crushed by rock.";
        winTieLose = "l";
        break;
      case "paper":
        infoDOM.innerHTML = "Scissors cut paper.";
        winTieLose = "w";
        break;
      case "lizard":
        infoDOM.innerHTML = "Scissors decapitate lizard.";
        winTieLose = "w";
        break;
      case "spock":
        infoDOM.innerHTML = "Scissors are smashed by Spock.";
        winTieLose = "l";
        break;
      default:
        break;
    }
  } else if (selection === "lizard") {
    switch (randomOpponent) {
      case "rock":
        infoDOM.innerHTML = "Lizard is crushed by rock.";
        winTieLose = "l";
        break;
      case "paper":
        infoDOM.innerHTML = "Lizard eats paper.";
        winTieLose = "w";
        break;
      case "scissors":
        infoDOM.innerHTML = "Lizard is decapitated by scissors.";
        winTieLose = "l";
        break;
      case "spock":
        infoDOM.innerHTML = "Lizard poisons Spock.";
        winTieLose = "w";
        break;
      default:
        break;
    }
  } else if (selection === "spock") {
    switch (randomOpponent) {
      case "rock":
        infoDOM.innerHTML = "Spock vaporizes rock.";
        winTieLose = "w";
        break;
      case "paper":
        infoDOM.innerHTML = "Spock is disproved by paper.";
        winTieLose = "l";
        break;
      case "scissors":
        infoDOM.innerHTML = "Spock smashes scissors.";
        winTieLose = "w";
        break;
      case "lizard":
        infoDOM.innerHTML = "Spock is poisoned by lizard.";
        winTieLose = "l";
        break;
      default:
        break;
    }
  }
  result(winTieLose);
}

function result(winTieLose) {
  switch (winTieLose) {
    case "w":
      p1Score++;
      p1ScoreDOM.innerHTML = p1Score;
      p1CardDOM.style.backgroundColor = "green";
      p2CardDOM.style.backgroundColor = "red";
      break;
    case "t":
      p1CardDOM.style.backgroundColor = "yellow";
      p2CardDOM.style.backgroundColor = "yellow";
      break;
    case "l":
      p2Score++;
      p2ScoreDOM.innerHTML = p2Score;
      p1CardDOM.style.backgroundColor = "red";
      p2CardDOM.style.backgroundColor = "green";
      break;
    default:
      break;
  }
  if (p1Score === 5) {
    infoDOM.innerHTML = "YOU WIN !";
    newGameDOM.classList.remove("invisible");
  } else if (p2Score === 5) {
    infoDOM.innerHTML = "YOU LOST !";
    newGameDOM.classList.remove("invisible");
  } else {
    setTimeout(() => {
      resetCards();
    }, delayInMilliseconds);
  }
}

function resetCards() {
  p1CardDOM.innerHTML = 
    `<div style="border-radius: 5px 5px 0 0;" class="flex-grow-1 d-flex justify-content-center align-items-center btn btn-outline-info fs-2"  onclick=newGame(this.innerHTML.toLowerCase())>Rock</div>
    <div class="flex-grow-1 d-flex justify-content-center align-items-center btn btn-outline-info fs-2" onclick=newGame(this.innerHTML.toLowerCase())>Paper</div>
    <div class="flex-grow-1 d-flex justify-content-center align-items-center btn btn-outline-info fs-2" onclick=newGame(this.innerHTML.toLowerCase())>Scissors</div>
    <div class="flex-grow-1 d-flex justify-content-center align-items-center btn btn-outline-info fs-2" onclick=newGame(this.innerHTML.toLowerCase())>Lizard</div>
    <div style="border-radius: 0 0 5px 5px;" class="flex-grow-1 d-flex justify-content-center align-items-center btn btn-outline-info fs-2 border-bottom-0" onclick=newGame(this.innerHTML.toLowerCase())>Spock</div>`;
  p2CardDOM.innerHTML = `<img class="img-fluid mx-auto my-auto" src="./images/logo.jpg" alt="">`;
  p1CardDOM.style.backgroundColor = "transparent";
  p2CardDOM.style.backgroundColor = "transparent";
}

function resetGame() {
  newGameDOM.classList.add("invisible");
  resetCards();
  p1Score = 0;
  p2Score = 0;
  p1ScoreDOM.innerHTML = p1Score;
  p2ScoreDOM.innerHTML = p2Score;
  infoDOM.innerHTML = "Pick Your Hero !";
}
