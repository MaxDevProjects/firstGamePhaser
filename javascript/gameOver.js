var textG_O;
var less;
var gameOverState = {

    create : function() {
        
        if(toMuchEat){
            textG_O = game.add.text(50, 80, 'You have over-eating!!!', { font: '50px monospace', fill: '#ff0000'});
        }else if(lessEat){
            textG_O = game.add.text(50, 80, 'you have not eaten enough!!!', { font: '50px monospace', fill: '#ff0000' });
        }

        var textScore = game.add.text(80, 240, 'score : 0', { font: '50px monospace', fill: '#ff0000' });
        textScore.text = `score : ${playState.score}`

        startText = game.add.text(game.world.centerX, game.world.height - 80, 'restart', { font: '50px monospace', fill: '#ffffff' });
        startText.anchor.setTo(0.5);
        startButton = game.add.button(game.world.centerX, game.world.height - 80, 'startButton', this.restart, this, 2, 1, 0);
        startButton.anchor.setTo(0.5);

        startText.alpha = 0;
        startButton.alpha = 0;

        var tweenButton = game.add.tween(startButton).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        var tweenText = game.add.tween(startText).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);


        tweenButton.yoyo(true, 1000);
        tweenText.yoyo(true, 1000);

        group = game.add.group();

        group.add(startText, startButton);
        //var keyStart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        //keyStart.onDown.addOnce(this.restart, this);


    },
    restart : function() {
        game.state.start('play');
        game.world.remove(startButton, startText);
        toStart = true;
        playState.reset();
    },

};