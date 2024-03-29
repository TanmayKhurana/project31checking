class Particle {
    constructor(x,y,r){

        var options ={
            restitution:0.4,
            isStatic:false
        }
        this.r=r;

        this.body = Bodies.circle(x, y, this.r, options)
        this.color = color(random(0, 255), random(0,255), random(0, 255))
        World.add(world, this.body)

    }
    display() {

        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop()

        for (var j = 0;j < particles.length; j++){
            paritcles[j].display()
          }
    }
}