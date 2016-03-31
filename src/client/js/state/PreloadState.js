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

        this.load.image("menu-bg", "assets/menu-bg-2.png");
        this.load.image("test", "assets/test.png");

        this.load.tilemap("map-test1", "assets/tilemaps/test1.json", null, Phaser.Tilemap.TILED_JSON);
        this.load.image("tiles-test1", "assets/tilemaps/test1.png");
    }

    create() {
        // this.game.state.start("Menu", true, false);
        this.game.state.start("Game", true, false);
    }
}


export default PreloadState;
