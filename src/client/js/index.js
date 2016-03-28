import Phaser from "phaser";
import GameState from "./state/GameState";

class Game extends Phaser.Game {
    constructor() {
        super(500, 500, Phaser.AUTO, "content", null);
        this.state.add("GameState", GameState, false);
        this.state.start("GameState");
    }
}

new Game();
