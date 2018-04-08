var group;
var startText;
var gameName;
var tweenButton;
var tweenText;
var menuState = {
    
    create : function() {
        
        
        gameName = game.add.text(80, 80, '-EAT IT-', { font: '50px monospace', fill: '#ffffff'});

        startText = game.add.text(game.world.centerX, game.world.height - 80, 'Start', { font: '50px monospace', fill: '#ffffff' });
        startText.anchor.setTo(0.5);
        startButton = game.add.button(game.world.centerX, game.world.height - 80, 'startButton', this.actionOnClick, this, 2, 1, 0);        
        startButton.anchor.setTo(0.5);

        //var gameStart = game.add.text(80, game.world.height - 80, 'press space to start', { font: '50px monospace', fill: '#ffffff'});
        
        //var keyStart = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //keyStart.onDown.addOnce(this.start, this);
        
        startText.alpha = 0;
        startButton.alpha = 0;
        
        tweenButton = game.add.tween(startButton).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        tweenText = game.add.tween(startText).to({ alpha: 1 }, 1000, "Linear", true, 0, -1);
        
        
        tweenButton.yoyo(true, 1000);
        tweenText.yoyo(true, 1000);        
        
        group = game.add.group();

        group.add(startButton);
        group.add(startText);
    },

    actionOnClick : function () {
        game.state.start('play');
        game.world.remove(startButton);
        game.world.remove(startText);        
    },

    start : function() {
        game.state.start('play');

        console.log('play');
    }

};