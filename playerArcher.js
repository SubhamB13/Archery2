class playerArcher{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
          };
          this.width = width;
          //this.angle = angle;
          this.height = height;
          this.body = Bodies.rectangle(x, y, this.width, this.height, options);
          this.image = loadImage("playerArcher.png")
          World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(DOWN_ARROW) && angle < -1.2) {
      angle += 0.21;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -1.9) {
      angle -= 0.21;
      Matter.Body.setAngle(this.body, angle);
    }
    
    Matter.Body.setAngle(this.body, -PI/2)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
}






