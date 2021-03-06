import Phaser from "phaser";


class GameState extends Phaser.State {
    create() {
        this.game.stage.backgroundColor = "#070707";
        // this.game.stage.smoothed = false;

        // let man = this.add.sprite(this.game.width / 2, this.game.height / 2, "test");
        // man.anchor.setTo(0.5);
        // man.scale.x += 3;
        // man.scale.y += 3;
        // man.smoothed = false;

        // this.testKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


        let map = this.add.tilemap("map-test1");
        map.addTilesetImage("test1", "tiles-test1");
        map.setCollision(2);

        let layer = map.createLayer("Tile Layer 1");
        // layer.setScale(2);
        // layer.debug = true;
    }

    render() {
        // this.game.debug.key(this.testKey, 32, 32);
        this.game.debug.inputInfo(32, 32);
    }


}


export default GameState;
