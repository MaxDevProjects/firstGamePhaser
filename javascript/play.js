var colide = false;
var __life = 1;
var __lifeMax = 3;
var __lifeMin = 0.5;
var __timeLife = 0.1;
var __decrementTime = 0.1;
var __time = 20;
var gameOver = false;
var toMuchEat = false;
var lessEat = false;

var playState = {

    controle : function() {
        var sticks = this.game.add.sprite(10, this.game.world.height - 250, 'buttons');
    },

    spiderLife: function () {
        if (colide == true) {
            __life = __life + __timeLife;
            console.log("++life :" + __life);
        } else {
            __time -= __decrementTime;
            //console.log("time : " + __time );
            if (__time <= 0) {
                if (__life >= 1.5 && __life < 2) {
                    __time = 22;
                } else if (__life >= 2) {
                    __time = 25;
                } else {
                    __time = 20
                }
                __life = __life - __timeLife;
                console.log("--life :" + __life);
            }
        }
        if (__life <= __lifeMin) {
            __life = __lifeMin;
            this.spider.kill();
            this.spider.isDead = true;
            colide = false;
            gameOver = true;
            this.gameOver();
            lessEat = true;
            console.log("you have not eaten enough!!!");
        } else if (__life > __lifeMax) {
            __life = 3;
            this.spider.kill();
            this.spider.isDead = true;
            colide = false;
            gameOver = true;
            toMuchEat = true;
            this.gameOver();
            console.log("You have over-eating!!!");
        } else {
            this.spider.isDead = false;
            gameOver = false;
            toMuchEat = false;
            lessEat = false;
        }
    },

    initspider: function () {
        var halfX = this.stage.width / 2
        var halfY = this.stage.height / 2
        var ranX = Math.random() * this.stage.width;
        var ranY = Math.random() * this.stage.height;
        this.game.renderer.renderSession.roundPixels = true
        this.game.stage.backgroundColor = "#24783a";
        this.spider = this.game.add.sprite(0, 0, 'spiderTilesheet');
        this.spider.anchor.setTo(0.5, 0.5);
        this.spider.animations.add("spiderwalk", [0, 1, 2, 3], 6, false);
        this.spider.smoothed = false;
        //this.spider.play("spiderwalk");
        this.spider.keyIsDown = false;
        //this.spider.angle = Math.floor(Math.random() * 90);
        this.spider.x = ranX;
        this.spider.y = ranY;
        //console.log(this.spider.angle);
        this.spider.isDead = false;

    },
    initsmallSpider: function () {
        var ranX2 = Math.random() * this.stage.width;
        var ranY2 = Math.random() * this.stage.height;
        this.smallSpider = this.game.add.sprite(0, 0, 'smallSpiderWalk');
        var smallSpider = [this.smallSpider];
        this.smallSpider.x = ranX2;
        this.smallSpider.y = ranY2;
        this.smallSpider.anchor.setTo(0.5, 0.5);
        this.smallSpider.angle = 0;
        this.smallSpider.animations.add("walk", [0, 1, 2, 3], 8, true);
        this.smallSpider.play("walk");
        //this.smallSpider.scale.setTo(0.1);
        this.smallSpider.vx = Math.floor(Math.random() * 5);
        this.smallSpider.vy = Math.floor(Math.random() * 5);


    },

    reset : function() {
        __life = 1;
        __lifeMax = 3;
        __lifeMin = 0.5;
        __timeLife = 0.1;
        __decrementTime = 0.1;
        __time = 20;
        gameOver = false;  
        this.score = 0;
    },

    AABB: function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return x1 < x2 + w2 &&
            x2 < x1 + w1 &&
            y1 < y2 + h2 &&
            y2 < y1 + h1;
    },

    addScore: function () {
        this.scoreText = this.add.text(10, 10, "score : 0", { font: "20px monospace", fill: "#ffff00" });
        this.score = 0;
    },

    gameOver : function() {
        if(gameOver == true){
            game.state.start('gameOver');
        };
    },

    create: function () {
        //initialiser le jeu
        this.controle();
        this.initspider();
        this.initsmallSpider();
        this.addScore();

    },

    updatespider: function () {

        //this.spider.angle += 0.5;
        this.spider.oldX = this.spider.x;
        this.spider.oldY = this.spider.y;
        this.spider.scale.setTo(__life);

        if (this.input.keyboard.isDown(Phaser.Keyboard.Z) == true) {
            this.spider.y = this.spider.y - 5
            this.spider.angle = 90;
            this.spider.play("spiderwalk");
            // console.log(this.spider.y);
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.Q) == true) {
            this.spider.x = this.spider.x - 5
            this.spider.angle = 0;
            this.spider.play("spiderwalk");
            // console.log(this.spider.x);
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.S) == true) {
            this.spider.y = this.spider.y + 5
            this.spider.angle = -90;
            this.spider.play("spiderwalk");
            // console.log(this.spider.y);
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.D) == true) {
            this.spider.x = this.spider.x + 5
            this.spider.angle = 180;
            this.spider.play("spiderwalk");
            //console.log(this.spider.x);
        }
        if (this.spider.x >= 800 + this.spider.width) {
            //console.log("sortie");
            this.spider.x -= this.spider.oldX;
        }
        if (this.spider.x <= 0 - this.spider.width) {
            // console.log("sortie");
            this.spider.x = 800;
        }
        if (this.spider.y >= 600 + this.spider.height) {
            //console.log("sortie");
            this.spider.y -= this.spider.oldY;
        }
        if (this.spider.y <= 0 - this.spider.height) {
            //console.log("sortie");
            this.spider.y = 600;
        }

    },

    updatesmallSpider: function () {
        this.smallSpider.oldX = this.smallSpider.x;
        this.smallSpider.oldY = this.smallSpider.y;
        while (this.smallSpider.vx === 0 && this.smallSpider.vy === 0) {
            this.smallSpider.vx = Math.floor(Math.random() * 10);
            this.smallSpider.vy = Math.floor(Math.random() * 10);
        }
        //this.spider.x += 2;
        if (this.smallSpider.x >= 800) {
            this.smallSpider.x = this.smallSpider.oldX;
            this.smallSpider.vx = Math.floor(Math.random() * 10);
            this.smallSpider.vy = Math.floor(Math.random() * 10);
            this.smallSpider.vx = -this.smallSpider.vx;

        }
        if (this.smallSpider.x <= 0) {
            this.smallSpider.x = this.smallSpider.oldX;
            this.smallSpider.vx = Math.floor(Math.random() * 10);
            this.smallSpider.vy = Math.floor(Math.random() * 10);
            this.smallSpider.vx = +this.smallSpider.vx;
        }
        if (this.smallSpider.y <= 0) {
            this.smallSpider.y = this.smallSpider.oldY;
            this.smallSpider.vx = Math.floor(Math.random() * 10);
            this.smallSpider.vy = Math.floor(Math.random() * 10);
            this.smallSpider.vy = +this.smallSpider.vy;
        }
        if (this.smallSpider.y >= 600) {
            this.smallSpider.y = this.smallSpider.oldY;
            this.smallSpider.vx = Math.floor(Math.random() * 10);
            this.smallSpider.vy = Math.floor(Math.random() * 10);
            this.smallSpider.vy = -this.smallSpider.vy;
        }

        if (this.smallSpider.vx > 0) {
            this.smallSpider.angle = 180;
        } else if (this.smallSpider.vx < 0) {
            this.smallSpider.angle = 0;
        } else if (this.smallSpider.vy < 0) {
            this.smallSpider.angle = 90;
        } else if (this.smallSpider.vy < 0) {
            this.smallSpider.angle = -90;
        }


        this.smallSpider.x += this.smallSpider.vx * 0.9;
        this.smallSpider.y += this.smallSpider.vy * 0.9;
        // console.log("vx: " + this.smallSpider.vx + " vy: " + this.smallSpider.vy)
    },
    collision: function () {
        if (this.AABB(this.spider.x - (10 + __life * 0.5), this.spider.y, this.spider.width / 3, this.spider.height / 3, this.smallSpider.x, this.smallSpider.y, this.smallSpider.width, this.smallSpider.height)) {
            //console.log("collision");
            this.smallSpider.destroy();
            this.initsmallSpider();
            colide = true;

            this.score += 1
            this.scoreText.text = `score : ${this.score}`
            //console.log(this.score)
        }
        else {
            colide = false;
        }
    },

    update: function () {
            //notre jeu toutes les 60fps
        this.updatespider();
        this.collision();
        this.spiderLife();
        this.updatesmallSpider();

    }
    
};