var Engine=Matter.Engine
var Body=Matter.Body
var Bodies=Matter.Bodies
var World=Matter.World

var man_behaviour 
var player1,engine,world,wall1,playbutton

// diamonds,player,obstacles



function preload(){

}

function setup(){
createCanvas(800,800)   
engine=Engine.create()
world=engine.world


playbutton=createButton("PLAY")
playbutton.position(230,100)
// playbutton.mousePressed(jump())

wall=new Ground(400,790,800,80)
player1=new Player(100,10,200,"red")
Engine.update(engine)
}

function draw(){
background("cyan")
Engine.update(engine)

player1.show()
player1.move()

}

function jump(){
    player1.rise()

    // Matter.Body.setVelocity(player1,{x:0.01,y:0.5})
}