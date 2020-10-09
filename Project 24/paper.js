class paper {

constructor(x,y,radius,options){

var options ={
    isStatic : false,
    restitution: 0.3,
    density: 1.2,
    friction:0.5
}

this.body= Bodies.circle(x,y,radius/2,options); //radius/2
this.radius= radius;
 World.add(world,this.body);
}

display(){

    var pos= this.body.position;
    ellipseMode(CENTER);
    fill("pink");
    ellipse(pos.x,pos.y,this.radius);
}


};