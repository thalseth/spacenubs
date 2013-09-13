Score = BaseEntity.extend({
    defaults: {
        
    },
    initialize: function(){
        var model = this;
        var entity = Crafty.e("2D, DOM, Text").attr({ x: 100, y: 100 }).text("Look at me!!")
          .color("red")
          .bind('EnterFrame', function () {
             
            })
          .setName('Score');
        })
        model.set({'entity' : entity });
    }
});
