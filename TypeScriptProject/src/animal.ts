import { INamed } from './common';

export class Animal implements INamed {
    constructor(public name: string) {

    }
}

export class Animals extends Array<Animal> {
    constructor() {
        super();
        ["Lynx", "Jaguar", "Panther", "Leopard", "Tiger", "Lion"].forEach(name => {
            this.push(new Animal(name));
        });
    }
}