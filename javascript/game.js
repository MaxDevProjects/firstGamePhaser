var __width_Size = "100%";
var __height_Size = "100%";

var game = new Phaser.Game(__width_Size , __height_Size, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });


function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.scaleMode = Phaser.ScaleManager.aspectRatio;
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setShowAll();
    game.scale.refresh();
}

function create() {
    if (!game.device.desktop) {     
        game.input.onDown.add(gofull, this); 
    }
}
function update() {
    
}

function render() {
    
    function gofull() { 
        game.scale.startFullScreen(false);
        play.spider.scale.setTo(2);
        play.smallSpider.scale.setTo(2);
        __life *= 2;
        __lifeMax *= 2;
        __lifeMin *= 2;
        __timeLife *= 2;
        __decrementTime *= 2;
        __time = 25 + 10;
    }
}


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);

game.state.start('boot');