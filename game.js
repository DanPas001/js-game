//Set the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle("DarkTurquoise");
ctx.fillRect(0, 0, 200, 200);

//function for making circles
var circle = function (x, y, radius, fillCircle){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, radius.PI * 2, false);
  if(fillCircle){
    ctx.fill();
  }else{
    ctx.stroke();
  }

};

//function to make an flying object
var object = function (x, y){
  ctx.lineWidth = 2;
  ctx.strokeStyle = "GoldenRod";
  ctx.fillStyle = "Gold";

  circle(x, y, 10, true);
  circle(x, y, 10, false);
  circle(x-5, y, 5, true);
  circle(x-5, y, 5, false);
  circle(x+5, y, 5, true);
  circle(x+5, y, 5, false);

};
