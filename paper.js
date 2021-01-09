class Paper{
    constructor(x,y,radius){
        var paper_options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.image = loadImage("paper.png");

        this.radius = radius;

        this.body = Bodies.circle(x,y,radius,paper_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
}