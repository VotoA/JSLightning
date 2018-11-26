var startX = 0;
var startY = (int)(Math.random()*201)+200;
var endX = 0;
var endY = (int)(Math.random()*201)+200;
function setup()
{
    createCanvas(600,600);
    strokeWeight(3);
    background(30, 30, 30);
}
function draw()
{
    stroke((int)(Math.random()*256), (int)(Math.random()*256), (int)(Math.random()*256));
    while(EndX <= 600)
    {
        endX = startX + (int)(Math.random()*10);
        endY = startY + (int)(Math.random()*19)-9;
        line(startX, startY, endX, endY);
        //Down
        line(EndX, EndY, EndX, 600);
        line((StartX+EndX)/2, (StartY+EndY)/2, (StartX+EndX)/2, 600);
        line((((StartX+EndX)/2)+StartX)/2, (((StartY+EndY)/2)+StartY)/2, (((StartX+EndX)/2)+StartX)/2, 600);
        line((((StartX+EndX)/2)+EndX)/2, (((StartY+EndY)/2)+EndY)/2, (((StartX+EndX)/2)+EndX)/2, 600);
        //Right
        //line(EndX, EndY, 600, EndY);
        //line((StartX+EndX)/2, (StartY+EndY)/2, 600, (StartY+EndY)/2);
        //line((((StartX+EndX)/2)+StartX)/2, (((StartY+EndY)/2)+StartY)/2, 600, (((StartY+EndY)/2)+StartY)/2);
        //line((((StartX+EndX)/2)+EndX)/2, (((StartY+EndY)/2)+EndY)/2, 600, (((StartY+EndY)/2)+EndY)/2);
        startX = endX;
        startY = endY;
    }
}
function mousePressed()
{
    startX = 0;
    startY = (int)(Math.random()*201)+200;
    endX = 0;
    endY = (int)(Math.random()*201)+200; 
}
