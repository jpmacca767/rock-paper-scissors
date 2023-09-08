# rock-paper-scissors
Rock Paper Scissors for the Odin Project

Some pseudo-code for the project

Requirements

The game is played against the computer

A function called getComputerChoice will randomly pick either R, P or S

A function to play a round of RPS that needs two parameters
  -- playerSelection (case insensitive)
  -- computerSelection
Returns a string to say "You lose! Paper beats Rock" or "You win! Rock beats Scissors."

A function called game()
Play a five round game that keeps score and reports the winner or loser at the end.

Use console.log to display the results at the end of each round

User prompt() to get input from the user

Plan

Start by outputting instructions for the game
>>Done

Assign the computer choice and store
>>Done

Prompt the player for their choice
>>Done

Need to make sure one of these is input and prompt again if not!
>>Not Done

(Loop starts here)

set counter to 1
>>Done

Run the game
 >> Check the selection
 >> Rock beats Scissors
 >> Scissors beats Paper
 >> Paper beats Rock

Output result

Increment player or computer score by one
Output current score
 if counter <=5 loop again

 if greater than 5 print out final score and declare the winner
Break out of loop

Thanks for playing...game over...
>>
