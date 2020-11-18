const range = document.querySelector("#jsRange");


function handleRangeChange(event) {
  const brushWidth = event.target.value;
  ctx.lineWidth = brushWidth;
}

if(range){
  range.addEventListener("input",handleRangeChange)
}
