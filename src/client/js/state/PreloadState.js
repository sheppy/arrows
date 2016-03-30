import Phaser from "phaser";


class PreloadState extends Phaser.State {
    preload() {
        // this.load.crossOrigin = true;

        // Custom loading bar
        // let loadingBar = this.add.sprite(320, 480, "preloader");
        // loadingBar.anchor.setTo(0.5, 0.5);
        // this.load.setPreloadSprite(loadingBar);

        // Load game assets here
        // this.load.image("logo", "assets/logo.png");

        this.load.image("menu-bg", "./assets/menu-bg-2.png");
        this.load.image("test", "./assets/test.png");
    }

    create() {
        this.game.state.start("Menu", true, false);
    }
}


export default PreloadState;
