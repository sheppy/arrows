import Phaser from "phaser";
import RainbowText from "../object/RainbowText";


class MenuState extends Phaser.State {
    create() {
        this.add.tileSprite(0, 0, 640, 480, "menu-bg");

        let center = { x: this.world.centerX, y: this.world.centerY };
        this.rainbowText = new RainbowText(this.game, center.x, center.y, "Menu");
        this.rainbowText.anchor.set(0.5);

        let menuTextGroup = this.game.add.group();
        menuTextGroup.add(this.rainbowText);

        // let buttonsGroup = this.game.add.group();
        let button = this.add.button(16, 200, 'test', this.startGame, this);
        button.anchor.set(0.5);
        button.fixedToCamera = true;
        // button.inputEnabled = true;
        // buttonsGroup.add(button);
    }

    update() {
        this.rainbowText.update();
    }

    startGame() {
        this.game.state.start("Game", true, false);
    }
}


export default MenuState;
