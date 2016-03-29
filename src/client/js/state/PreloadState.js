import Phaser from "phaser";


class PreloadState extends Phaser.State {
    // constructor() {
    //     this.loadingSprite = null;
    // }

    preload() {
        // this.loadingSprite = this.add.sprite(320, 480, "preloader");
        // this.loadingSprite.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        // this.load.setPreloadSprite(this.loadingSprite);

        // Load game assets here
        // this.load.image("logo", "assets/logo.png");

        this.load.image("test", "./assets/test.png");

        // this.onLoadComplete();
    }

    onLoadComplete() {
        this.game.state.start("Menu", true, false);
    }
}


export default PreloadState;
