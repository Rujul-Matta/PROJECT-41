class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 10);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(450,300);
        this.button.position(750,300);
        this.reset.position(1050, 540);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,150);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                'players/player1/score': 0,
                'players/player2/score': 0,
                'players/player1/distance': 0,
                'players/player2/distance': 0,
                'players/player1/name': "",
                'players/player2/name': ""
            });
        });

    }
}