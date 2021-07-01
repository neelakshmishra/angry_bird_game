class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trejectoryPath = []//emty arrey
    this.smokeImage = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    if(this.body.speed>10 && this.body.position.x>300 ){
      var position = [this.body.position.x,this.body.position.y]
    this.trejectoryPath.push(position)//push is ussed to add elements to an arrey
    //console.log(this.trejectoryPath)
        }
    //this.body.position.y = mouseY;
    super.display();
    for(var i=0;i<this.trejectoryPath.length;i=i+1){
      var item= this.trejectoryPath[i]
      image(this.smokeImage,item[0],item[1])
    }
    
  }
  clearSmoke(){
    this.trejectoryPath =  []
  }
  
}

