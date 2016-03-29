import Phaser from "phaser";
import RainbowText from "../object/RainbowText";


class MenuState extends Phaser.State {
    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };
        let text = new RainbowText(this.game, center.x, center.y, "Menu");
        text.anchor.set(0.5);

        this.game.input.onDown.add(this.startGame, this);
    }

    startGame() {
        this.game.state.start("Game");
    }
}


export default MenuState;
