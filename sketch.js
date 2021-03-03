const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;
var umbrella;
var maxDrops=100;
var thunderCreatedFrame=0;
var i1,i2,i3,i4;
function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    
    i1 = loadImage("Walking Frame/walking_1.png");
    i2 = loadImage("Walking Frame/walking_2.png");
    i3 = loadImage("Walking Frame/walking_3.png");
    i4 = loadImage("Walking Frame/walking_4.png");
       
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(i1,200,500);
  
   
    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    
    //creating thunder
    rand = Math.round(random(1,4));
    
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            umbrella = new Umbrella(i1,200,500);
            break;
            case 2: thunder.addImage(thunder2);
            umbrella = new Umbrella(i2,200,500);
            break; 
            case 3: thunder.addImage(thunder3);
            umbrella = new Umbrella(i3,200,500);
            break;
            case 4: thunder.addImage(thunder4);
            umbrella = new Umbrella(i4,200,500);
            break;
            default: break;
        }

        thunder.scale = random(0.3,0.6)
        
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        
        thunder.destroy();
    }

    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    umbrella.display();
    drawSprites();

}   

