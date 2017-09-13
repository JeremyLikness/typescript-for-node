import { INamed } from './common';

export class Color implements INamed {
    constructor(public name: string) {

    }
}
    
export class Colors extends Array<Color> {
    constructor() {
        super();
        ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"].forEach(
            color => this.push(new Color(color)));
    }
}
