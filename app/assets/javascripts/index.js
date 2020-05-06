
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var hx = canvas.width / 3;
var hy = canvas.height -38;
var dx =2;
var dy = -2;
var ballRadius = 10;
var humanX = (canvas.width - 20)
var rightPresed = false;
var leftPresed = false;

var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];

for(var c = 0; c < brickColumnCount; c++){
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r++){
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
}
function collisionDetection(){
  for(var c = 0; c < brickColumnCount; c++){
    for(var r = 0; r < brickRowCount; r++){
      var b = bricks[c][r]
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2 );
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawhuman(){
  ctx.beginPath();
  ctx.strokeStyle = 'white';//　線の色調整
  ctx.lineWidth = 2;//　線の太さ調整
  ctx.arc(hx+18, hy+8, 8, 0, Math.PI * 2, false);
  ctx.stroke();
//　線を書く（手の部分）
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(hx+8, hy+26);
  ctx.lineTo(hx+18, hy+18);
  ctx.lineTo(hx+28, hy+26);
  ctx.stroke();

  //　線を書く（縦棒）
  ctx.beginPath();
  ctx.moveTo(hx+18, hy+18);
  ctx.lineTo(hx+18, hy+30);
  ctx.stroke();

  //　線を書く（足の部分）
  ctx.beginPath();
  ctx.moveTo(hx+8, hy+38);
  ctx.lineTo(hx+18, hy+30);
  ctx.lineTo(hx+28, hy+38);
  ctx.stroke();

}

function drawBricks(){
  for(var c = 0; c < brickColumnCount; c++){
    for(var r = 0; r < brickRowCount; r++){
      if (bricks[c][r].status == 1){      
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
  
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawhuman();
  drawBricks()
  drawBall();
  collisionDetection();
  if (y + dy > canvas.height - ballRadius | y + dy < ballRadius){
    dy = -dy;
  }
  if (x + dx > canvas.width - ballRadius | x + dx < ballRadius){
    dx = -dx;
  }
  if (rightPresed && hx+28 < canvas.width ){
    hx += 3;
  }
  if (leftPresed && hx > -5){
    hx -= 3;
  }
  x += dx;
  y += dy;
}
document.addEventListener("keydown", keyDownHndler, false);
document.addEventListener("keyup", keyUpHndler, false);

function keyDownHndler(e){
  if (e.key == "Right" || e.key == "ArrowRight"){
    rightPresed = true ;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft"){
    leftPresed = true ;
  }
}
function keyUpHndler(e){
  if (e.key == "Right" || e.key == "ArrowRight"){
    rightPresed = false ;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft"){
    leftPresed = false ;
  }
}


var interval = setInterval(draw,10);



