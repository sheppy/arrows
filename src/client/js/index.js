import Phaser from "phaser";
import GameState from "./state/GameState";

class Game extends Phaser.Game {
    constructor() {
        // (width, height, renderer, parent, state, transparent, antialias, physicsConfig)
        super(640, 480, Phaser.AUTO, document.body, null, false, false);

        this.state.add("GameState", GameState, false);
        this.state.start("GameState");
    }
}

new Game();
