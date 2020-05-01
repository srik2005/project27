class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("cv.jpg");
    //angle = PI/4+ 1
   // Matter.Body.setAngle(this.body, angle);
  }

  display() {
    super.display();
  }
}
