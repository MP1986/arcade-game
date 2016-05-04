// Enemies our player must avoid

/*
To do list:  Add collision detection.  Add reset function for
when player touches enemy.  Figure out how to
make enemies appear in different rows.  

Fun stuff:  Add collectibles.  Add Battletoad super mode when
enough collectibles are grabbed.  Incremental difficulty 
increase.  Add score function/lives.

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
    this.width = 50;
    this.height = 50;
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

for(var i = 0; i < allEnemies.length; i++) {
    var spawnPoint = Math.random();

    if(this.x > maxX) {
        if(spawnPoint >= 0 && spawnPoint <= .33) {
            this.y = 220;
            this.x = 0;
        }
        else if(spawnPoint > .33  && spawnPoint <= .66) {
            this.y = 220 - 85.5;
            this.x = 0;
        }
        else if(spawnPoint > .66  && spawnPoint <= 1) {
            this.y = 220 - 85.5 - 85.5;
            this.x = 0;
        }
    }
};

};

/*
Enemy.prototype.respawn = function() {

for(var i = 0; i < allEnemies.length; i++) {
    var spawnPoint = Math.random();

    if(this.x > maxX) {
        if(spawnPoint >= 0 && spawnPoint <= .33) {
            this.y = 220;
            this.x = 0;
        }
        else if(spawnPoint > .33  && spawnPoint <= .66) {
            this.y = 220 + 85.5;
            this.x = 0;
        }
        else if(spawnPoint > .66  && spawnPoint <= 1) {
            this.y = 220 + 85.5 + 85.5;
            this.x = 0;
        }
    console.log(spawnPoint);
    }
};

}
*/

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
    this.width = 50;
    this.height = 50;

    this.sprite = 'images/char-boy.png';
};

//Add check collisions function.

Player.prototype.display = function(greeting) {
    console.log(greeting + " " + this.name);
};

Player.prototype.update = function(dt) {
//If statement for detecting enemy collision.  Does not work correctly.

/*
    if(this.x < Enemy.x + Enemy.width && this.x + this.width > Enemy.x && this.y < Enemy.y + Enemy.height && this.height + this.y > Enemy.y)
        {
            this.x = 202;
            this.y = 404;
        };
*/
//If statement for detecting when player reaches top.  Does work correctly.
    if(this.y < minY) {
        this.x = 202;
        this.y = 404;
    };

//
};

//Still not working.  Next I'll try adding rectangles.
var enemyCollision = function() {
    if(Player.x < Enemy.x + Enemy.width && Player.x + Player.width > Enemy.x && this.y < Enemy.y + Enemy.height && this.height + this.y > Enemy.y)
            {
                console.log("Test")
                Player.x = 202;
                Player.y = 404;
            };    
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
