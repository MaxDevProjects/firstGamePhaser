var __width_Size = "85";
var __height_Size = "95%";

var game = new Phaser.Game(__width_Size , __height_Size, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });


function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    
}
function create() {
    if (!game.device.desktop) {     
        game.input.onDown.add(gofull, this); 
    }
    this.onresize();
}
function update() {
    
}
function onResize() {
    // this function is called each time the browser is resized, and re-positions
    // game elements to keep them in their right position according to game size
    levelText.x = Math.round((game.width - levelText.width) / 2);
    levelText.y = game.height;
    titleText.x = Math.round((game.width - titleText.width) / 2);
    fixedGroup.x = Math.round((game.width - 320) / 2);
    fixedGroup.y = Math.round((game.height - 320) / 2);
    movingGroup.x = Math.round((game.width - 320) / 2);
    movingGroup.y = Math.round((game.height - 320) / 2);
}
function render() {
    
    function gofull() { 
        game.scale.startFullScreen(true); 
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        // using RESIZE scale mode
        game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        game.scale.setScreenSize(true);
        var __width_Size = "100%";
        var __height_Size = "100%";
    }
}


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);

game.state.start('boot');