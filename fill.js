const fillBtn = document.querySelector("#jsMode");
let filling = false;

function fillCanvas() {
  if(filling){
      ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
  }
}

function handleFillMode() {
  if(filling===true){
    filling = false;
    fillBtn.innerText = "Fill";
  }else{
    filling = true;
    fillBtn.innerText = "Brush";
    canvas.addEventListener("click",fillCanvas);
  }
}

if(fillBtn){
  fillBtn.addEventListener("click",handleFillMode)
}
