var hero = {
    x: 300,
    y: 500
}

var movementSpeed = 7;
var bulletSpeed = 5;
enemiesSpeed = 5;

var enemies = [{x: 50, y: 75},{x: 250, y:50},{x:450, y:100},{x:400, y:50}];

var bullets = [];

var start = true;

function displayHero(){
    document.getElementById('hero').style['top'] = hero.y + 'px';
    document.getElementById('hero').style['left'] = hero.x + 'px';
}

function displayEnemies() {
    var output = '';
    for (var i = 0; i < enemies.length; i++) {
        output += "<div class='enemy1' style='top:" + enemies[i].y + "px; left:" +enemies[i].x + "px;'></div>";
    }
    
    document.getElementById('enemies').innerHTML = output;
}

function dectectCollision() {
    for (var i = 0; i < bullets.length; i++) {
        var element = bullets[i];
        
    }
}


function displayBullets() {
    var newBullet = '';
    for (var i = 0; i < bullets.length; i++) {
        newBullet += "<div class='bullet' style='top:" + bullets[i].y + "px; left:" +bullets[i].x + "px;'></div>"; 
    }
    document.getElementById('bullets').innerHTML = newBullet;
}

function moveBullets() {
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].y -= bulletSpeed;
        for (var x = 0; x < enemies.length; x++) {
            if(Math.abs(bullets[i].y - enemies[i].y) < 20 && Math.abs(bullets[i].x - enemies[i].x) < 20){
                bullets[i].y = 1;
                enemies[i].y = 530;
                console.log('hit');
                
            }
        }
        
        if(bullets[i].y < 1){
            bullets[i] = bullets[bullets.length - 1];
            bullets.pop();
        }
    }
}

function moveEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].y += enemiesSpeed;
        if(enemies[i].y > 540){
            enemies[i].y = 0;
            enemies[i].x = Math.random()*600;
        }
    }
}



document.onkeydown = function(a){   
    if(start){
        startGame();
        start = false;
    } 
    if(a.key == 'ArrowUp'){
        hero.y -= movementSpeed;
    }
    else if (a.key == 'ArrowDown'){
        hero.y += movementSpeed;
    }
    else if (a.key == 'ArrowLeft') {
        hero.x -= movementSpeed;
    }
    else if(a.key == 'ArrowRight') {
        hero.x += movementSpeed;
    }
    if (a.key == ' '){
        bullets.push({x: hero.x + 6, y: hero.y - 15 })
        displayBullets();
        
    }
    displayHero();
}

function startGame(){
    setInterval(gameLoop, 50);
}

function gameLoop() {
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets()
}

// initialize game
displayHero();
displayEnemies();