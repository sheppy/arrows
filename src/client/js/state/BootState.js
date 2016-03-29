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
            this.stage.scale.pageAlignHorizontally = true;
        }

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.setScreenSize(true);

        this.game.state.start("Preload", true, false);
    }
}


export default BootState;
