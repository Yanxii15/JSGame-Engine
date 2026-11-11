import gameObject from './gameObject.js';
import Renderer from './renderer.js';
import Input from './input.js';
import Physics from './physics.js';

class Plaform extends gameObject {
    constructor(x, y, width, height, color, image) {
        super(x, y);
        this.addComponent(new Renderer(color, width, height, image));
    }
}