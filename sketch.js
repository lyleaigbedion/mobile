//sounds
soundsA = [];
soundsB = [];
//loading some images
var img;
var fire;
//tracks the collisions
var hitCount = 0;
var hitCountB = 0;
//boolean
var trackB = false;

// Position Variables
var x = 500;
var y = 50;
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;


//physics for ball bouncing. 
var vMultiplier = 0.008;
var bMultiplier = .9;

function preload(){
	soundsA = [loadSound("assets/mar01.wav"), loadSound("assets/mar02.wav"), loadSound("assets/mar03.wav"),
	loadSound("assets/mar04.wav"), loadSound("assets/mar05.wav"), loadSound("assets/mar06.wav"),
	loadSound("assets/mar07.wav"), loadSound("assets/mar08.wav"), loadSound("assets/mar09.wav"),
	loadSound("assets/mar10.wav"), loadSound("assets/mar11.wav"), loadSound("assets/mar12.wav"),
	loadSound("assets/mar13.wav"), loadSound("assets/mar14.wav"), loadSound("assets/mar15.wav"),
	loadSound("assets/mar16.wav"), loadSound("assets/mar17.wav"), loadSound("assets/mar18.wav"),
	loadSound("assets/mar19.wav"), loadSound("assets/mar20.wav"), loadSound("assets/mar21.wav"),
	loadSound("assets/mar22.wav"), loadSound("assets/mar23.wav"), loadSound("assets/mar24.wav"),
	loadSound("assets/mar25.wav"), loadSound("assets/mar26.wav"), loadSound("assets/mar27.wav"),
	loadSound("assets/mar28.wav"), loadSound("assets/mar29.wav"), loadSound("assets/mar30.wav"),
	loadSound("assets/mar31.wav"), loadSound("assets/mar32.wav"), loadSound("assets/mar33.wav"),
	loadSound("assets/mar34.wav"), loadSound("assets/mar35.wav"), loadSound("assets/mar36.wav"),
	loadSound("assets/mar37.wav"), loadSound("assets/mar38.wav"), loadSound("assets/mar39.wav"),
	loadSound("assets/mar40.wav"), loadSound("assets/mar41.wav"), loadSound("assets/mar42.wav"),
	loadSound("assets/mar43.wav"), loadSound("assets/mar44.wav"), loadSound("assets/mar45.wav")];
	
	soundsB =[loadSound("assets/new01.wav"), loadSound("assets/new02.wav"), loadSound("assets/new03.wav"),
	loadSound("assets/new04.wav"), loadSound("assets/new05.wav"), loadSound("assets/new06.wav"),
	loadSound("assets/new07.wav"), loadSound("assets/new08.wav"), loadSound("assets/new09.wav"),
	loadSound("assets/new10.wav"), loadSound("assets/new11.wav"), loadSound("assets/new12.wav"),
	loadSound("assets/new13.wav"), loadSound("assets/new14.wav"), loadSound("assets/new15.wav"),
	loadSound("assets/new16.wav"), loadSound("assets/new17.wav"), loadSound("assets/new18.wav"),
	loadSound("assets/new19.wav"), loadSound("assets/new20.wav"), loadSound("assets/new21.wav"),
	loadSound("assets/new22.wav"), loadSound("assets/new23.wav"), loadSound("assets/new24.wav"),
	loadSound("assets/new25.wav"), loadSound("assets/new26.wav"), loadSound("assets/new27.wav"),
	loadSound("assets/new27.wav"), loadSound("assets/new29.wav"), loadSound("assets/new30.wav"),];
	
	
	
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
	pixelDensity(1);
	strokeWeight(10)
	stroke(0);
	img = loadImage("assets/mariou.jpg");
	fire = loadImage("assets/fireball.png");
	//img.resize(windowWidth,windowHeight);
}

function draw() {
    image(img, 0, 0, img.windowWidth, img.windowHeight);
    Player();
	imageMode(CENTER)
    ellipse(x, y, 5, 5);
	image(fire,x,y);
	
	
	
}

function Player() {

	ax = rotationX;
	ay = rotationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	if(!trackB){
		
	
		// Bounce when touch the edge of the canvas
		if (x < 0) { 
			x = 0; 
			vx = -vx * bMultiplier;
			soundsA[hitCount].play();
			hitCount++;
			//if all audio files have been played restart them.
			if (hitCount >= 45){
				hitCount = 0;
			}
		}
		if (y < 0) { 
			y = 0; 
			vy = -vy * bMultiplier;
			soundsA[hitCount].play();
			hitCount++;
			if (hitCount >= 45){
				hitCount = 0;
			}
		}
		if (x > width - 20) { 
			x = width - 20; 
			vx = -vx * bMultiplier;
			soundsA[hitCount].play();
			hitCount++;
			if (hitCount >= 45){
				hitCount = 0;
			}
			
		}
		if (y > height - 20) { 
			y = height - 20; 
			vy = -vy * bMultiplier;
			soundsA[hitCount].play();
			hitCount++;
			
			if (hitCount >= 44){
				hitCount = 0;
			}
		}
		
	} else{
		// second track 
		// Bounce when touch the edge of the canvas
		if (x < 0) { 
			x = 0; 
			vx = -vx * bMultiplier;
			soundsB[hitCountB].play();
			hitCountB++;
			if (hitCountB >= 29){
				hitCountB = 0;
			}
		}
		if (y < 0) { 
			y = 0; 
			vy = -vy * bMultiplier;
			soundsB[hitCountB].play();
			hitCountB++;
			if (hitCountB >= 29){
				hitCountB = 0;
			}
		}
		if (x > width - 20) { 
			x = width - 20; 
			vx = -vx * bMultiplier;
			soundsB[hitCountB].play();
			hitCountB++;
			if (hitCountB >= 29){
				hitCountB = 0;
			}
		}
		if (y > height - 29) { 
			y = height - 20; 
			vy = -vy * bMultiplier;
			soundsB[hitCountB].play();
			hitCountB++;
			if (hitCountB >= 29){
				hitCountB = 0;
			}
		}
	}
	
	
}

function touchStarted() {
	//touch the scren to change tracks.
  if(!trackB){
	  trackB = true;
	  
  }else{
  trackB = false;}
}
