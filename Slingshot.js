class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            lenght : 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyAposition;
            var pointB = this.pointB;
         
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y , pointB.x,pointB.y);
    
    
        }
    }
}