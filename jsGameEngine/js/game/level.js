import Game from '../engine/game.js';
import Player from './player.js';
import Confiner from '../engine/confiner.js';

class Level extends Game {
    constructor(canvasName) {
        super(canvasName);
        this.player = new Player(0, 0);
        this.camera.target = this.player;
        this.camera.confiner = new Confiner(0, this.canvas.height, 3000, this.canvas.height);


        //Spawngn he player
        this.addGameObject(this.player);
    }
}

export default Level;