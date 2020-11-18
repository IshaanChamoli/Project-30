class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.opacity = 255
  }

  display() {

    if (this.body.speed<3) {
      super.display();
    }


else {

World.remove(world,this.body);


push()
this.opacity = this.opacity-5

tint(255,this.opacity)

image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)

pop()

}







  }





};
