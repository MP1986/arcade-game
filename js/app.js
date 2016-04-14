// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
//    this.name = name;
//Player y u no appear?    


    this.x = 0;
    this.y = 0;

    this.sprite = 'images/char-boy.png';
};

//Add check collisions function.

Player.prototype.display = function(greeting) {
    console.log(greeting + " " + this.name);
};

Player.prototype.update = function(dt) {
//Handles player movement I think.  Do I still need this?
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

console.log(Player.prototype.constructor);
console.log(Enemy.prototype.constructor);
/*
var new_player = new Player("NyarCat");
new_player.display("Kekekeke");
*/
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = [new Player()];



player.update = function(dt) {
//  Adding this fixed the problem.  Woot!
};

player.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
console.log(allEnemies);
console.log(player);
*/
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
