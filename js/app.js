new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
    },

    methods: {
        jab: function(){
            this.health -= 10;

            if(this.health <= 0){
                this.ended = true;
            }

        },

        hook: function(){
            this.health -= 20;

            if(this.health <= 0){
                this.ended = true;
                this.health = 0;
            }
        },

        ko: function(){
            this.health = 0;

            if(this.health <= 0){
                this.ended = true;
            }
        },

        restart: function(){
            this.health = 100;
            this.ended = false;
        }
    },

});

$(document).keypress('keypress',function(e){
    if(e.which == 106){
        $('#bag').toggleClass('tilt');
    }
   
    if(e.which == 104){
        $('#bag').toggleClass('tilt2');
    }

    if(e.which == 107){
        $('#bag').toggleClass('tilt3');
    }
})