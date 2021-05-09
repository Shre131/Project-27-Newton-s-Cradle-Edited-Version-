class ROPE{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetX, y:this.offSetY},
        }
        this.rope=Constraint.create(options);
        //this.pointB=pointB;
        World.add(world, this.rope);
    }



    display() {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x;
        var Anchor1Y=pointA.y;

        var Anchor2X=pointB.x+this.offsetX;
        var Anchor2Y=pointB.y+this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

        /*if(this.rope.bodyA) {
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }*/
    }
}