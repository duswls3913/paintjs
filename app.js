const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');
let painting = false;
ctx.strokeStyle = "black";
const CANVAS_SIZE = 500;
canvas.width = CANVAS_SIZE;
canvas.height =CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting){//마우스 위치 따라다님
    ctx.beginPath();
    ctx.moveTo(x, y);
    //console.log(x,y);
  }else{//마우스 down시 line 그림
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}
function stopPainting() {
  painting = false;
}

function onMouseDown(event) {
  painting = true;
}

function draw(x,y) {
  ctx.beginPath();
  ctx.strokeStyle = rgb(44,44,44);
  ctx.moveTo(x, y);
  ctx.lineTo(200, 20);
  ctx.stroke();
}
if(canvas){
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",onMouseDown);
  canvas.addEventListener("mouseup",stopPainting);
  canvas.addEventListener("mouseleave",stopPainting);
}
