import game from '../game.js';
import Player from './player.js';

class Level extends game.Entity {
    constructor() {
        super(canvasName);
        this.player = new Player(0, 0);

        this.addGameObject(this.player);
    }
}

export default Level;