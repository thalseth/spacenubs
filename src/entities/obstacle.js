Obstacle = BaseEntity.extend({
    defaults: {
        'speed' : 2,
    },
    initialize: function(){
        var model = this;
        var entity = Crafty.e("2D, Canvas, Color, Collision")
          .color("red")
          .attr({ x: randomNum(600-20), y: 1, w: 20, h: 20, 
            dX: Crafty.math.randomInt(-10, 10), 
            dY: Crafty.math.randomInt(5, 10) })
          .bind('EnterFrame', function () {
                //hit floor or roof
                if (this.y <= 0)
                this.destroy();

                if (this.x <= 0 || this.x >= 800) {
                    this.dX *= -1;   
                }
                this.x += this.dX;
                this.y += this.dY;
            })
            .onHit('ufo', function () {
            this.destroy();
            console.log("Hit");
        })
        model.set({'entity' : entity });
    }
});

function randomNum(num){
    var random =  Math.floor(Math.random()*num);
    return random;
}  