const colors = document.querySelectorAll(".controls_color");

for (var i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click',changeColor);
}
//colors[0].addEventListener('click',changeColor);

function changeColor(event){
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
