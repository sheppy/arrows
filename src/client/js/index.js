import Phaser from "phaser";
import BootState from "./state/BootState";
import PreloadState from "./state/PreloadState";
import MenuState from "./state/MenuState";
import GameState from "./state/GameState";


class Game extends Phaser.Game {
    constructor() {
        // (width, height, renderer, parent, state, transparent, antialias, physicsConfig)
        super(640, 480, Phaser.AUTO, document.body, null, false, false);

        this.state.add("Boot", BootState, false);
        this.state.add("Preload", PreloadState, false);
        this.state.add("Menu", MenuState, false);
        this.state.add("Game", GameState, false);
        this.state.start("Boot");
    }
}


new Game();
