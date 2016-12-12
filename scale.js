//All measurements are in meters

var scaleObject = prompt("What is the diameter of your scaled sun?");
var scaleFactor = 1391400000/scaleObject;

//planet constructor
var planet = new Object();
this.diameter = this.diameter;
this.distance = this.distance;
this.scaledDiameter = function(){
return this.diameter*scaleFactor;
};
this.scaledDistance = function(){
 return this.distance*scaleFactor; 
};

var mercury = new planet();
mercury.diameter = 4879000;
mercury.distance = 57910000000;
mercury.scaledDiameter();
mercury.scaledDistance();

var venus = new planet();
venus.diameter = 12104000;
venus.distance = 108200000000;
venus.scaledDiameter();
venus.scaledDistance();

var earth = new planet();
earth.diameter = 12742000;
earth.distance = 149600000000;
earth.scaleDiameter();
earth.scaleDistance();

var mars = new planet();
mars.diameter = 6779000;
mars.distance = 227900000;
mars.scaleDiameter();
mars.scaleDistance();

var jupiter = new planet();
jupiter.diameter = 139822000;
jupiter.distance = 778500000000;
jupiter.scaleDiameter();
jupiter.scaleDistance();

var saturn = new planet();
saturn.diameter = 116464000;
saturn.distance = 1429000000000;
saturn.scaleDiameter();
saturn.scaleDistance();

var uranus = new planet();
uranus.diameter = 50724000;
uranus.distance = 2871000000000;
uranus.scaleDiameter();
uranus.scaleDistance();

var neptune = new planet();
neptune.diameter = 50724000;
neptune.distance = 2871000000000;
neptune.scaleDiameter();
neptune.scaleDistance();
