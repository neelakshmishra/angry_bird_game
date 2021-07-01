class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")  
        this.sling2=loadImage("sprites/sling2.png")  
        this.sling3=loadImage("sprites/sling3.png")   
        this.bodyA = bodyA
    }

    fly(){
        this.sling.bodyA = null;
        
    }
    attach(){
        this.sling.bodyA = this.bodyA
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#4B230D")
            
            if(pointA.x<200){
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x-30,pointB.y-3)
                image(this.sling3,pointA.x-13,pointA.y,0.1,0.1)
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y+3)
                image(this.sling3,pointA.x+13,pointA.y,25,30)
            }
            
        }
        image(this.sling1,200,20)
        image(this.sling2,170,20)
            
            
    }
    
}