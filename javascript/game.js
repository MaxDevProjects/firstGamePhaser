var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');

var gameState = {

}

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);
game.state.add('game', gameState);

game.state.start('boot');