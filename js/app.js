// Enemies our player must avoid

/*
To do list:  Add collision detection.  Add reset function for
when player touches enemy or reaches top.  Figure out how to
make enemies appear in different rows.  Add score 
function/lives.

Fun stuff:  Add collectibles.  Add Battletoad super mode when
enough collectibles are grabbed.  Incremental difficulty 
increase.

*/

// Variables for player movement boundaries.
var maxY = 404;
var minY = 0;
var maxX = 404;
var minX = 0;
//var playerStartX = 202;
//var playerStartY = 404;


/*
var GetX = function(x) {
    var x = Math.round(x) * 101;
    console.log(x);
    return x;
}

var GetY = function(y) {
    var y = Math.round(y) * 171;
    console.log(y);
    return y;
}
*/
//var enemyStart;





var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    this.y = 220;
    this.speed = Math.random() * 300 + 40;

/*
    this.x = GetX(3 * Math.random());
    this.y = GetY(4 * Math.random());
*/

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

//    this.x = GetX * Math.random * dt;

    this.x += dt * this.speed;

    if(this.x > maxX) {
        this.x = 0;
    }

/*
for(var i = 0; i < allEnemies.length; i++) {
    this.x = allEnemies[i].x;
    this.y = allEnemies[i].y;
};
*/

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

    this.x = 202;
    this.y = 404;

    this.sprite = 'images/char-boy.png';
};

//Add check collisions function.

Player.prototype.display = function(greeting) {
    console.log(greeting + " " + this.name);
};

Player.prototype.update = function(dt) {
//If statement for detecting enemy collision.  Does not work correctly.

/*
    if(this.x <= Enemy.x + 40 && this.x >= Enemy.x - 40 && this.y >= Enemy.y + 40 && this.y <= Enemy.y - 40 ){
        this.x = 202;
        this.y = 404;
    };
*/

//If statement for detecting when player reaches top.  Does work correctly.
    if(this.y < minY){
        this.x = 202;
        this.y = 404;
    };

//
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {

  if(direction == 'up' && this.y > minY)
    this.y -= 85.5;
  else if(direction == 'down' && this.y < maxY)
    this.y += 85.5;
  else if(direction == 'left' && this.x > minX)
    this.x -= 101;
  else if(direction == 'right' && this.x < maxX)
    this.x += 101;

    console.log(direction);
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

var allEnemies = [new Enemy(0, 220), new Enemy(0, 440), new Enemy(0, 660)];
var player = new Player();

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
