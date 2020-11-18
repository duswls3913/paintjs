const saveBtn = document.querySelector("#jsSave");

function handleCM(event) {
  console.log();

}
if(canvas){
  canvas.addEventListener("contextmenu",handleCM);
}
function handleSaveClick(){
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "paint";
  link.click();

}
if(saveBtn){
  saveBtn.addEventListener("click",handleSaveClick);
}
