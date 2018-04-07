var i = 0;
var j = 0;
var loadingEnd = false;
var loading;
var loadState = {

    preload : function() {
        loading = game.add.text(10, 10, "loading...0%", { font: '30px monospace', fill: '#ffffff'});

        this.game.load.spritesheet('spiderTilesheet', 'assets/img/spiderTilesheet.png', 64, 64);
        this.game.load.spritesheet('smallSpiderWalk', 'assets/img/smallSpiderWalk.png', 32, 32);
        game.load.image('sprite', 'assets/img/spriteTest.png');

    },
    
    update : function() {
        i = i + 1 * 0.5;
        //console.log(i);            
        loading.text = `loading...${Math.floor(i)}%`
        if(i >= 99){
            i =100;
            j++;
            //console.log(j);           
            if(j >= 50){
                loadingEnd = true;
                this.create();
            }
        }
    },
    
    create : function() {
        //keep loading state fiew seconds
        if(loadingEnd == true){
            game.state.start("menu");
        }
    }
};