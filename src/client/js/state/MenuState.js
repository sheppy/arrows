import Phaser from "phaser";


class MenuState extends Phaser.State {
    create() {
        let logo = this.add.sprite(this.game.width / 2, this.game.height / 2, "logo");
        logo.anchor.setTo(0.5);

        this.game.input.onDown.add(this.startGame, this);
    }

    startGame() {
        this.game.state.start("Game");
    }
}


export default MenuState;
