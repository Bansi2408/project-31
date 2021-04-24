class Particle{
    constructor(x,y,r) {

        var options={
            restitution:0.4
        }
        this.r=r;

        this.body = Bodies.cricle(x,y,this.r,options);
        this.color = color(random("black","white"),random("black","white"),random("black","white"));
        World.add(world,this.body);
    }
    display() {

        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x,position.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
   
