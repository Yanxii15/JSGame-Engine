import GameObject from '../engine/gameObject.js';
import Renderer from '../engine/renderer.js';
import game from '../engine/game.js';
import input from '../engine/input.js';
import Physics from '../engine//physics.js';

class Player extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.addComponent(new Renderer('blue', 35, 50));
    }
} 

export default Player;