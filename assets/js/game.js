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
                // if we're not at the last enemy in the array
                if (playerHealth > 0 && i < enemyNames.length - 1) {
                    //ask if player wants to use the store before next round
                    var storeConfirm = window.confirm("The fight is over, visit store before the next round?");
                    // if yes, take them to the store function
                    if (storeConfirm) {
                        shop();
                    }
                }
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

var shop = function() {
    // ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE, or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            } 
            break;
        
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            // do nothing
            break;
    
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again to force player to pick a valid option
            shop();
            break;
        
    }
};

startGame();