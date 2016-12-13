//All measurements are in meters

var scaleObject = prompt("What is the diameter of your scaled sun?");
var scaleFactor = scaleObject/1391400000;


//planet constructor

function planet(diameter, distance){
this.diameter = diameter;
this.distance = distance;
this.scaleDiameter = function(){
return diameter*scaleFactor;
};
this.scaleDistance = function(){
 return distance*scaleFactor;
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

//document.getElementById("").innerHTML = ;
//assigning variables to 
document.getElementById("m").innerHTML = "Mercury";
document.getElementById("md").innerHTML = mercury.diameter;
document.getElementById("mds").innerHTML = mercury.distance;
document.getElementById("smd").innerHTML = mercury.scaleDiameter();
document.getElementById("smds").innerHTML = mercury.scaleDistance();

document.getElementById("v").innerHTML = "Venus";
document.getElementById("vd").innerHTML = venus.diameter;
document.getElementById("vds").innerHTML = venus.distance;
document.getElementById("svd").innerHTML = venus.scaleDiameter();
document.getElementById("svds").innerHTML = venus.scaleDistance();

document.getElementById("e").innerHTML = "Earth";
document.getElementById("ed").innerHTML = earth.diameter;
document.getElementById("eds").innerHTML = earth.distance;
document.getElementById("sed").innerHTML = earth.scaleDiameter();
document.getElementById("seds").innerHTML = earth.scaleDistance();

document.getElementById("ms").innerHTML = "Mars";
document.getElementById("msd").innerHTML = mars.diameter;
document.getElementById("msds").innerHTML = mars.distance;
document.getElementById("smsd").innerHTML = mars.scaleDiameter();
document.getElementById("smsds").innerHTML = mars.scaleDistance();
