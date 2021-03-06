import Phaser from "phaser";


class BootState extends Phaser.State {
    preload() {
        // this.load.image("preloader", "assets/preloader.gif");
    }

    create() {
        // Max number of fingers to detect
        this.input.maxPointers = 1;

        // Auto pause if window looses focus
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        // this.scale.setScreenSize(true); // Uncaught TypeError: this.game.scale.setScreenSize is not a function

        this.game.state.start("Preload", true, false);
    }
}


export default BootState;
