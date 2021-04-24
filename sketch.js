const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var division = [];
var divisionHeight=200;
var score = 0;

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,200,700,20);

    for(var k = 0; k <=width; k=k + 80){

        division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j = 40; j <width; j=j+50){

        plinkos.push(new Plinko(j,75));
    }

    for(var j = 15; j <width-10; j=j+50){

        plinkos.push(new Plinko(j,175));
    }
}



function draw() {
    background("black")

    Engine.update(engine);

    ground.display();

    for(var j = 0; j < particles.length; j++) {

        particles[j].display();
    }

    for(var j = 0; j < divisions.length; j++) {

        divisions[k].display();
    }

}


