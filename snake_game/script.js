let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let cellSize = 50;
let cells = [[50, 50]];
let boardH = 600;
let boardW = 1000;
let direction = 'right';
let gameOver = false;
let foodCells = generateFood();
let score=0;

// Game loop
let intervalId = setInterval(() => {
    update();
    draw();
}, 200);

// Key controls
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' && direction !== 'up') direction = 'down';
    else if (e.key === 'ArrowUp' && direction !== 'down') direction = 'up';
    else if (e.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
    else if (e.key === 'ArrowRight' && direction !== 'left') direction = 'right';
});

// Update snake position
function update() {
    let headX = cells[cells.length - 1][0];
    let headY = cells[cells.length - 1][1];

    let newHeadX, newHeadY;

    if (direction === 'right') {
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if (newHeadX >= boardW || khelKhatam(newHeadX,newHeadY)) gameOver = true;
    } else if (direction === 'left') {
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if (newHeadX < 0 || khelKhatam(newHeadX,newHeadY)) gameOver = true;
    } else if (direction === 'up') {
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if (newHeadY < 0 || khelKhatam(newHeadX,newHeadY)) gameOver = true;
    } else if (direction === 'down') {
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if (newHeadY >= boardH || khelKhatam(newHeadX,newHeadY)) gameOver = true;
    }

    cells.push([newHeadX, newHeadY]);

    // Eat food
    if (newHeadX === foodCells[0] && newHeadY === foodCells[1]) {
        foodCells = generateFood();
        score+=1;
    } else {
        cells.shift();
    }
}

// Draw everything
function draw() {
    if (gameOver) {
        clearInterval(intervalId);
        ctx.font = '50px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Game Over!', boardW / 2 - 150, boardH / 2);
        return;
    }

    ctx.clearRect(0, 0, boardW, boardH);

    // Draw snake
    for (let cell of cells) {
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
    }

    // Draw food
    ctx.fillStyle = 'green';
    ctx.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);

    //draw score
    ctx.font='24px monospace'
    ctx.fillText(`Score: ${score}`,20,20)
}

// Generate food on grid
function generateFood() {
    return [
        Math.round((Math.random() * (boardW - cellSize)) / cellSize) * cellSize,
        Math.round((Math.random() * (boardH - cellSize)) / cellSize) * cellSize,
    ];
}

function khelKhatam(newHeadX,newHeadY){
    for(let cell of cells){
        if(cell[0]===newHeadX && cell[1]===newHeadY){return true;}
    }
    return false;
}
