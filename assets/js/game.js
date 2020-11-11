var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
//"WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or  SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    
    
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //award player money for winning
            playerMoney = playerMoney + 20;
            break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }

            //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
            //Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            //Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");

            }
        }
    };
// function to start a new game
var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
            // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
        for(var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }
        }
    }
    // play again
    endGame();
};

// function to end the entire game
var endGame = function() {
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }
    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();