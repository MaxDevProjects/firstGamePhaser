var menuState = {

    create : function() {
        
        var gameName = game.add.text(80, 80, 'Base Template', { font: '50px monospace', fill: '#ffffff'});

        var gameStart = game.add.text(80, game.world.height - 80, 'press space to start', { font: '50px monospace', fill: '#ffffff'});

        var keyStart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        keyStart.onDown.addOnce(this.start, this);

        gameStart.alpha = 0;

        var tween = game.add.tween(gameStart).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);

        tween.yoyo(true, 1000);
    },

    start : function() {
        game.state.start('play');
        console.log('play');
    }

};