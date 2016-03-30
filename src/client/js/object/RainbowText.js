class RainbowText extends Phaser.Text {
    constructor(game, x, y, text) {
        super(game, x, y, text, {font: "45px Arial", fill: "#ff0044", align: "center"});

        this._speed = 125; //ms
        this._colorIndex = 0;
        this._colors = ["#ee4035", "#f37736", "#fdf498", "#7bc043", "#0392cf"];
        this._timeUntilUpdate = this._speed;

        this.colorize();
    }

    update() {
        this._timeUntilUpdate -= this.game.time.elapsed;

        if (this._timeUntilUpdate <= 0) {
            this._timeUntilUpdate += this._speed;
            this.colorize();
        }
    }

    colorize() {
        for (let i = 0; i < this.text.length; i++) {
            if (this._colorIndex === this._colors.length) {
                this._colorIndex = 0;
            }

            this.addColor(this._colors[this._colorIndex], i);
            this._colorIndex++;
        }
    }
}

export default RainbowText;
