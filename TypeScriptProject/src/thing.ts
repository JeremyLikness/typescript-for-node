import { INamed } from './common';
import { Animal } from './animal';
import { Color } from './color';

export class Thing implements INamed {
    private _animal: Animal;
    private _color: Color; 

    public get animal(): Animal {
        return this._animal;
    }

    public get color(): Color {
        return this._color;
    }

    public get name(): string {
        return `${this._color.name} ${this._animal.name}`;
    }

    constructor(color: Color, animal: Animal) {
        this._animal = animal;
        this._color = color;
    }
}

function pickOne<T>(list: Array<T>): T {
    var idx = Math.floor(Math.random() * list.length);
    return list[idx];
}

export var makeThing = (colorList: Array<Color>, animalList: Array<Animal>) => {
    return new Thing(pickOne(colorList), pickOne(animalList));
};