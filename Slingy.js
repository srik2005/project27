class Slingy{
constructor(A,B){



    var options = {
        bodyA : A,
        pointB : B,
        length : 10,
        stiffness : 0.01,
        angle : PI/4 + 1
        
        
        
         }
         this.sling1 = loadImage("sl.png")
        this.sh = Matter.Constraint.create(options);
        World.add (world,this.sh);





}
display(){
    console.log(this.sh.pointB.x)
   image(this.sling1,160,50)
   
   
   
   if(this.sh.bodyA!= null){
  
    line(this.sh.bodyA.position.x,this.sh.bodyA.position.y,this.sh.pointB.x,this.sh.pointB.y);
    line(this.sh.bodyA.position.x,this.sh.bodyA.position.y,this.sh.pointB.x,this.sh.pointB.y);}

   




}

 free(){

this.sh.bodyA = null




 }






}
//func