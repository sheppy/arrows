import Phaser from "phaser";


class GameState extends Phaser.State {
    create() {
        this.game.stage.backgroundColor = "#070707";
        // this.game.stage.smoothed = false;

        let man = this.add.sprite(this.game.width / 2, this.game.height / 2, "test");
        man.anchor.setTo(0.5);
        man.scale.x += 3;
        man.scale.y += 3;
        // man.smoothed = false;

        this.testKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

    render() {
        // this.game.debug.key(this.testKey, 32, 32);
        this.game.debug.inputInfo(32, 32);
    }


}


export default GameState;
