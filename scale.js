//All measurements are in meters

var scaleObject = prompt("What is the diameter of your scaled sun?");
var scaleFactor = scaleObject/1391400000;


//planet constructor

function planet(diameter, distance){
this.diameter = diameter;
this.distance = distance;
this.scaleDiameter = function(){
var y = diameter*scaleFactor;
 return y;
};
this.scaleDistance = function(){
 var x = distance*scaleFactor;
 return x;
};
}

var mercury = new planet(4879000, 57910000000);
mercury.scaleDiameter();
mercury.scaleDistance();

var venus = new planet(12104000, 108200000000);
venus.scaleDiameter();
venus.scaleDistance();

var earth = new planet(12742000, 149600000000);
earth.diameter = 12742000;
earth.distance = 149600000000;
earth.scaleDiameter();
earth.scaleDistance();

var mars = new planet(6779000, 227900000);
mars.scaleDiameter();
mars.scaleDistance();

var jupiter = new planet(139822000, 778500000000);
jupiter.scaleDiameter();
jupiter.scaleDistance();

var saturn = new planet(116464000, 1429000000000);
saturn.scaleDiameter();
saturn.scaleDistance();

var uranus = new planet(50724000, 2871000000000);
uranus.scaleDiameter();
uranus.scaleDistance();

var neptune = new planet(50724000, 2871000000000);
neptune.scaleDiameter();
neptune.scaleDistance();

//assigning variables to 
document.getElementById("mercury").innerHTML = "Mercury";
