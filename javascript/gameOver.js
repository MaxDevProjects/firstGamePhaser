var textG_O;
var less;
var gameOverState = {

    create : function() {
        
        if(toMuchEat){
            textG_O = game.add.text(80, 80, 'You have over-eating!!!', { font: '50px monospace', fill: '#ff0000'});
        }else if(lessEat){
            textG_O = game.add.text(80, 80, 'you have not eaten enough!!!', { font: '50px monospace', fill: '#ff0000' });
        }

        var textScore = game.add.text(80, 120, 'score : 0', { font: '50px monospace', fill: '#ff0000' });
        textScore.text = `score : ${playState.score}`

        var restart = game.add.text(80, game.world.height - 80, 'press space to restart', { font: '50px monospace', fill: '#ffffff' });

        restart.alpha = 0;

        var tween = game.add.tween(restart).to({ alpha: 1 }, 500, "Linear", true, 0, -1);

        tween.yoyo(true, 500);

        var keyStart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        keyStart.onDown.addOnce(this.restart, this);


    },
    restart : function() {
        game.state.start('play');
        toStart = true;
        playState.reset();
    },

};