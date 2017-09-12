// JavaScript Document
var can=document.querySelector('canvas');

can.width=window.innerWidth;
can.height=window.innerHeight;

var c=can.getContext('2d');



/*c.fillStyle ="red";
c.fillRect(100,100,100,100);
c.fillStyle ="GREEN";
c.fillRect(400,100,100,100);
c.fillStyle ="YELLOW";
c.fillRect(300,300,100,100);
console.log(can);*/

/*c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle ="brown";
c.stroke();
*/
/*for(var i=0;i<30;i++) {
	var x=Math.random() * window.innerWidth;
	var y=Math.random() * window.innerHeight;
c.beginPath();
c.arc(x,y,30,0,Math.PI *2, false);
c.strokeStyle="blue";
c.stroke();
}*/

var mouse = {
	x: undefined,
	y: undefined	
}

var maxRadius=40;
var minRadius=10;

var colorArray = [
	'#2C3E50',
	'#E74C3C',
	'#ECF0F1',
	'#3498DB',
	'#2980B9',
];

window.addEventListener('mousemove',
	function(event) {
		mouse.x=event.x;
		mouse.y=event.y;
	})

/*window.addEventListener('resize',function() 
	{
	can.width=window.innerWidth;
	can.height=window.innerHeight;
	
	init();
	});
*/
function Circle(x,y,dx,dy,radius) {
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	
	this.draw=function() {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI *2, false);
		c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
		
		c.fill();
//		c.fillStyle = "white";
		//c.fillText('Love u',this.x,this.y,[50]);
			
	}
	this.update=function() {
		if(this.x + this.radius > innerWidth || this.x-this.radius<0)
		{
			this.dx= -this.dx;
		}

		if(this.y+this.radius > innerHeight || this.y-this.radius<0)
		{
			this.dy=-this.dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		
		if(mouse.x - this.x <50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y >-50) {
			
			if(this.radius < maxRadius){
			this.radius += 1;	
			}
		}
		else if(this.radius > minRadius) 
		{
			this.radius -= 1;
		}
		
		this.draw();
	}

	
}

var circleArray = [];



//function init() {
	
	//circleArray = [];
	
	for( var i=0;i<5800;i++){
	var radius=Math.random() * 3 + 1;
	var x=Math.random() * (innerWidth - radius * 2)+ radius;
	var y=Math.random() * (innerHeight - radius * 2) + radius ;
	var dx=(Math.random()-0.5)*3;
	var dy=(Math.random()-0.5)*3;
	circleArray.push(new Circle(x,y,dx,dy,radius));
	}
//}

function animate() {
	requestAnimationFrame(animate);	
	c.clearRect(0,0,innerWidth,innerHeight);		
	for( var i=0;i<circleArray.length;i++)
	{
		circleArray[i].update();
	}
}
animate();
