// either or (union types)
var numOrStr: number | string;
numOrStr = 1; // fine 
numOrStr = "1"; // also fine 
//numOrStr = false; // <-- not good 

// intersection 
var nameValue: { key: number } & { value: string } = { key: 0, value: "" };
nameValue.key = 1;
nameValue.value = "test";
//nameValue.foo = "bar";

var notPossible: number & string;
// now I can't assign anything! 
// notPossible = 1;

// custom types
type NameValuePair = { key: number, value: string };
var entry: NameValuePair = { key: 1, value: "foo" };
// entry = { id: 6 }; 

// spread operator 
let obj = {
    foo: 'bar',
    x: 0
}, obj_copy = obj;
console.log(`copy is ${obj_copy.x}`);
console.log('changing source object'); 
obj.x = 1; // changed this on the source, not the copy 
console.log (`copy is ${obj_copy.x}`);

let obj_real_copy = {...obj};
console.log(`real copy is ${obj_real_copy.x}`);
console.log('changing source object');
obj.x = 5; 
console.log (`real copy is still ${obj_real_copy.x}`);

// array 
let arr = [1, 2, 3], copy_of_arr = [...arr, 4]; 
arr.pop();
console.log(`array copy after popping an element: ${copy_of_arr}`);

// complex example - I manipulate a string and return a string 
interface IManipulator {
    (input: string): string;
}

// I take a key pointing to a manipulation, then manipulate the string with that manipulator 
interface IManipulate {
    manipulate: (key: string, input: string) => string;
}

// I store named manipulator instances 
interface IManipulatorCache {
    [key: string]: IManipulator
}

// I manage registration of manipulators 
interface IManipulatorManager extends IManipulate {
    registerManipulator: (key: string, manipulator: IManipulator) => boolean;
}

// I implement the management class 
class ManipulatorManager implements IManipulatorManager {

    // cache that holds various manipulators 
    private _cache: IManipulatorCache = {};

    // a default that just echoes the string back 
    public static defaultEchoManipulator: IManipulator = (input: string) => input;

    // returns true if successfully registered, and false if name already in use
    public registerManipulator(key: string, manipulator: IManipulator): boolean {
        if (this._cache[key]) {
            return false;
        }
        this._cache[key] = manipulator;
    }

    // looks up the manipulator. If it exists, uses it, otherwise uses the default one
    public manipulate(key: string, input: string): string {
        return this._cache[key] ? this._cache[key](input)
            : ManipulatorManager.defaultEchoManipulator(input);
    }
}

var mgr: IManipulatorManager = new ManipulatorManager();
mgr.registerManipulator("reverse", (input: string) => input.split('').reverse().join(''));

console.log(`does not exist: ${mgr.manipulate("default", "This is my first test.")}`);
console.log(`exists: ${mgr.manipulate("reverse", "This is my second test.")}`);