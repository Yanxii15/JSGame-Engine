import GameObject from '../engine/gameObject.js';
import Renderer from '../engine/renderer.js';
import game from '../engine/game.js';
import Input from '../engine/input.js';
import Physics from '../engine//physics.js';

class Player extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.addComponent(new Renderer('blue', 35, 50));
        this.addComponent(new Input());
        this.addComponent(new Physics({ x: 0, y: 0 },{ x: 0, y: 0 },{ x: 0, y: 0 }));
    }

    update(deltaTime) {
        super.update(deltaTime);
        const input = this.getComponent(Input);
        const physics = this.getComponent(Physics);

        // Handle player movement based on input
        if (input.isKeyDown('ArrowLeft')) {
            physics.velocity.x = -200; // Move left
        } else if (input.isKeyDown('ArrowRight')) {
            physics.velocity.x = 200; // Move right
        } else {
            physics.velocity.x = 0; // Stop horizontal movement
        }
    }
}

export default Player;