var scaleObject = prompt("What is the diameter of your scaled sun?");
var scaleFactor = 1391400000/scaleObject;

//object constructor
var planet = new Object();
this.diameter = this.diameter;
this.distance = this.distance;
this.scaledDiameter = function(){
return this.diameter*scaleFactor;
}
this.scaledDistance = function(){
 return this.distance*scaleFactor; 
}

var mercury = new planet();
mercury.diameter = 4879000;
mercury.distance = 57910000000;
mercury.scaledDiameter();
mercury.scaledDistance();

var venus = new planet();
venus.diameter = 12104000;
venus.distance = 
