var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render });



    function preload() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    }
     function create() {
        if (!game.device.desktop) { game.input.onDown.add(gofull, this); }
    }
    function update() {

    }
    function render() {

        function gofull() { game.scale.startFullScreen(false); }
    }


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);

game.state.start('boot');