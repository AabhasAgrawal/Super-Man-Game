class A {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/S.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };