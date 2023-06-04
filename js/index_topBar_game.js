const canvas = document.getElementById('canvas');
const topbar = document.getElementById('topBar');
const ctx = canvas.getContext('2d');
// let canvasWidth = canvas.width = topbar.offsetWidth;
// let canvasHeight = canvas.height = topbar.offsetHeight;
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.offsetHeight;
});

// 鸟相关
var bird = new Image();
bird.src = 0;// 鸟的图片位置
var birdIndex = 0;// 鸟的帧
var birdWigth = 52;// 鸟的宽度
var birdHeight = 28;// 鸟的高度
var birdX = 0;// 鸟的x坐标
var birdY = 0;// 鸟的y坐标
var birdMoveSpeed = 5;// 鸟的移动速度

// 云1相关
var cloud1 = new Image();
cloud1.src = "media/cloud/cloud-00.png";// 云1的图片位置
var cloud1Wigth = 60;// 云1的宽度
var cloud1Height = 60;// 云1的高度
var cloud1X = canvasWidth;// 云1的x坐标
var cloud1Y = 55;// 云1的y坐标
var cloud1MoveSpeed = 1;// 云1的移动速度

// 云2相关
var cloud2 = new Image();
cloud2.src = "media/cloud/cloud-01.png";// 云2的图片位置
var cloud2Wigth = 60;// 云2的宽度
var cloud2Height = 60;// 云2的高度
var cloud2X = canvasWidth*1.3;// 云2的x坐标
var cloud2Y = 10;// 云2的y坐标
var cloud2MoveSpeed = 2;// 云2的移动速度

function drawbird() {// 画鸟
    birdIndex++;
    if (birdIndex > 10) { birdIndex = 0; }
    bird.src = "media/bird/skeleton-animation_"+birdIndex.toString().padStart(2, '0')+".png";
    ctx.clearRect(birdX-birdMoveSpeed, birdY-birdMoveSpeed, birdWigth+birdMoveSpeed*2, birdHeight+birdMoveSpeed*2);
    ctx.drawImage(bird, birdX, birdY, birdWigth, birdHeight);
    requestAnimationFrame(drawbird);
}

function draw1cloud() {// 画云
    cloud1X -= cloud1MoveSpeed;
    if(cloud1X < -cloud1Wigth) cloud1X = canvasWidth;
    ctx.clearRect(cloud1X, cloud1Y, cloud1Wigth+cloud1MoveSpeed, cloud1Height);
    ctx.drawImage(cloud1, cloud1X, cloud1Y, cloud1Wigth, cloud1Height);
    requestAnimationFrame(draw1cloud);
}

function draw2cloud() {// 画云
    cloud2X -= cloud2MoveSpeed;
    if(cloud2X < -cloud2Wigth) cloud2X = canvasWidth;
    ctx.clearRect(cloud2X, cloud2Y, cloud2Wigth+cloud2MoveSpeed, cloud2Height);
    ctx.drawImage(cloud2, cloud2X, cloud2Y, cloud2Wigth, cloud2Height);
    requestAnimationFrame(draw2cloud);
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
    draw1cloud();
    draw2cloud();
    drawbird();
}