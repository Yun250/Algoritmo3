
let m=0
let b=0

let x0
let y0

let x1
let y1

function setup() 
{
	createCanvas(windowWidth,windowHeight);
}

function draw()
{
  drawRect(0, 0, windowWidth, windowHeight)
  //drawRect(windowWidth, windowHeight, 0, 0)

  drawRect(0, windowHeight, windowWidth, 0)
  //drawRect(windowWidth, 0, 0, windowHeight)

  drawRect(0, windowHeight/2, windowWidth, windowHeight/2)
  //drawRect(windowWidth, windowHeight/2, 0, windowHeight/2)
  
  drawRect(windowWidth/2, 0, windowWidth/2, windowHeight)
  //drawRect(windowWidth/2, windowHeight, windowWidth/2, 0)
}

function drawRect(x0,y0,x1,y1)
{
	var dx
	var dy
	var x 
	var p 
	var xend
	var incE
	var incNE
	var stepy
	var stepx


	dx = (x1 - x0);
  dy = (y1 - y0);
/* determinar que punto usar para empezar, cual para terminar */
  if (dy < 0) { 
    dy = -dy; stepy = -1; 
  } 
  else
    stepy = 1;
  if (dx < 0) {  
    dx = -dx; stepx = -1; 
  } 
  else 
    stepx = 1;
  x = x0;
  y = y0;
 point(x,y)
/* se cicla hasta llegar al extremo de la línea */
  if(dx>dy){
    p = 2*dy - dx;
    incE = 2*dy;
    incNE = 2*(dy-dx);
    while (x != x1){
      x = x + stepx;
      if (p < 0){
        p = p + incE;
      }
      else {
        y = y + stepy;
        p = p + incNE;
      }
      point(x,y)
    }
  }
  else{
    p = 2*dx - dy;
    incE = 2*dx;
    incNE = 2*(dx-dy);
    while (y != y1){
      y = y + stepy;
      if (p < 0){
        p = p + incE;
      }
      else {
        x = x + stepx;
        p = p + incNE;
      }
     point(x,y)
    }
  }
}