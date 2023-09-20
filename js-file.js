//my js file for rock paper scissors

//some variables to keep score

let round = 1;
let playerScore = 0;
let computerScore = 0;

//startTheGame function establishes the player pick and passes it to the game function

function startTheGame() {

    const buttonWrapper = document.getElementById('buttonWrapper');

    buttonWrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton)  {
                            return;
                        }
    })

    const playerSelection = event.target.firstChild.nodeValue;

    if (playerScore == 5 || computerScore == 5){
        return;
    }
    else {
    
    game(playerSelection);
    }
   
    }
        
    

//getComputerSelection functions picks one of Rock, Paper, Scissors randomnly
        
function getComputerSelection() {
    var array = ["Rock", "Paper", "Scissors"];
    var index = Math.floor(Math.random() * array.length);
    var computerSelection = array[index];
       return computerSelection;
    }

//Inserting DOM methods into the HTML to display results   
const resultsDisplayContainer = document.querySelector('#resultsDisplayContainer');
const picks = document.createElement('div');
const resultsDiv = document.createElement('div');
const score = document.createElement('div');
const cpuScore = document.createElement('div');
const finalResults = document.createElement('div');
const message = document.createElement('div');

resultsDisplayContainer.appendChild(picks);
resultsDisplayContainer.appendChild(resultsDiv);
resultsDisplayContainer.appendChild(score);
resultsDisplayContainer.appendChild(cpuScore);
resultsDisplayContainer.appendChild(finalResults);
resultsDisplayContainer.appendChild(message);

resultsDisplayContainer.setAttribute('style', 'white-space: pre;');
resultsDisplayContainer.style.textAlign = 'center';
resultsDisplayContainer.style.fontStyle = 'bold';
resultsDisplayContainer.style.fontSize = '25px';  

score.style.fontSize = '40px';
cpuScore.style.fontSize = '40px';


//the main game function - takes the player selection from the click as input

function game(playerSelection) {

    let computerSelection = getComputerSelection();

    //using this variable to get a set of matching pairs for the switch statement

    let selections = playerSelection + '-' + computerSelection;

    //output the round number to the browser followed by player/cpu picks

    resultsDiv.textContent = "\r\n";
    picks.textContent = "Seconds out! Round " + round + "!\r\nIt's " + playerSelection + " versus " + computerSelection + " ......";
    
    setTimeout(() => {
        playRound(selections);
    }, 1000)



    }



//separated the playRound function from the game function

function playRound(selections) {

    switch (selections) {
        case "Rock-Rock":
        case "Paper-Paper":
        case "Scissors-Scissors":
        ++round;
        resultsDiv.textContent = "A draw! \r\nThe scores are now " + playerScore + " for you and " + computerScore + " for the computer!";
        break;
    
        case "Rock-Scissors":
        case "Paper-Rock":
        case "Scissors-Paper":
        ++round;
        playerScore++;
        resultsDiv.textContent = "You win this round!! \r\nYou now have " + playerScore + " and it's " + computerScore + " for the computer!";
        break;
    
        case "Rock-Paper":
        case "Paper-Scissors":
        case "Scissors-Rock":
        ++round;
        computerScore++;
        resultsDiv.textContent = "You lose this round :-( \r\nYou have " + playerScore + " points and the computer has " + computerScore + "!";
        break;
    
        default:
        resultsDisplayContainer.textContent = "Houston we have some kind of problem here...let's try again!";
    }

    setTimeout(() => {

    score.textContent = "Player 1 Score: " + playerScore;
    cpuScore.textContent = "CPU Score: " + computerScore;

        }, 250);

    if (playerScore== 5 || computerScore== 5){

            setTimeout(() => {
                finalScores()
            } , 100);
                
            }
}
              

        function finalScores(){


        finalResults.textContent = "####### Final score is " + playerScore + " - " + computerScore + "  ####### "

        if (parseInt(playerScore) > parseInt(computerScore)) {
            message.textContent = "You win! Well Done!"
        } else if (parseInt(computerScore) > parseInt(playerScore)) {
            message.textContent = "Good try but you lose this time!"
        } else {
            message.textContent = "Good game - it's was a draw!"
        }
        

        //finalResults.textContent = "Thanks for playing today. I hope you enjoyed the game!"    
        }

        