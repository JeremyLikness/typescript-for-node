import { Animals } from './animal';
import { Colors } from './color';
import { Thing, makeThing } from './thing';

var colors = new Colors(); 
var animals = new Animals(); 

[1,2,3,4,5].forEach(item => {
    console.log(makeThing(colors, animals).name);
});