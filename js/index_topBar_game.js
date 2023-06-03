const canvas = document.getElementById('canvas');
const topbar = document.getElementById('topBar');
const ctx = canvas.getContext('2d');
let canvasWidth = canvas.width = topbar.offsetWidth;
let canvasHeight = canvas.height = topbar.offsetHeight;

window.addEventListener("resize", function() {
    canvasWidth = canvas.width = topbar.offsetWidth;
    canvasHeight = canvas.height = topbar.offsetHeight;
});

var bird = new Image();
bird.src = 0;
var birdIndex = 0;
var birdWigth = 52;
var birdHeight = 28;
var birdX = 0;
var birdY = 0;
var birdMoveSpeed = 5;

function drawbird() {
    birdIndex++;
    if (birdIndex > 10) { birdIndex = 0; }
    bird.src = "media/bird/skeleton-animation_"+birdIndex.toString().padStart(2, '0')+".png";
    ctx.clearRect(birdX-birdMoveSpeed, birdY-birdMoveSpeed, birdWigth+birdMoveSpeed*2, birdHeight+birdMoveSpeed*2);
    ctx.drawImage(bird, birdX, birdY, birdWigth, birdHeight);
    requestAnimationFrame(drawbird);
}

// 添加键盘监听,监听上下左右箭头,调整bird位置
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // left
            if(birdX > 0)
                birdX -= birdMoveSpeed;
            break;
        case 38: // up
            if(birdY > 0)
            birdY -= birdMoveSpeed;
            break;
        case 39: // right
            if(birdX < canvasWidth - birdWigth)
                birdX += birdMoveSpeed;
            break;
        case 40: // down
            if(birdY < canvasHeight - birdHeight)
            birdY += birdMoveSpeed;
            break;
    }
}, false);

function topBargame() {
    drawbird();
}