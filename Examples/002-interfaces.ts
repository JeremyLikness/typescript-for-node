var objectWithIdentifier: { id: number } = { id: 1 };
//objectWithIdentifier.foo = 'x';
//objectWithIdentifier.id = '5';

interface IHaveAnIdentifier {
    id: number;
}

interface IHaveOneToo {
    id: number;
}

interface IHaveAnOptionalDescription {
    desc?: string;
}

interface IHaveIdAndMaybeDescription extends IHaveAnIdentifier, IHaveAnOptionalDescription {

}

function showId(obj: IHaveAnIdentifier): void {
    console.log(`Showing id: ${obj.id}`);
}

function showDesc(obj: IHaveAnOptionalDescription): void {
    if (obj.desc) {
        console.log(obj.desc);
    }
}

var myObject: IHaveOneToo = { id: 1 };

//myObject.foo = 'x';
//myObject.desc = 'description';

showId(myObject);
showId(<IHaveAnIdentifier>{ id: 3.14 });
showId({id:42, foo: 'x'} as IHaveOneToo);

var myObjectWithDescription: IHaveIdAndMaybeDescription = {
    id: 1974,
    desc: "Rock it!"
};

//showDesc(myObject);
showDesc(myObjectWithDescription);

// I am a function: f(r, xn)
interface IXnPlusOne {
    (r: number, xn: number): number;
}

// I am the implementation of the function: x(n+1) = r * xn * (1.0 - xn);
var bifurcation: IXnPlusOne = function (r, x) {
    return r * x * (1.0 - x);
}

var r: number = 3, x: number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcation(r, x);
    console.log(`bifurcation value: ${x}`);
}

// now I can be a function AND an object with ap property!
interface IXnPlusOneWithCounter extends IXnPlusOne {
    counter: number;
}

// implement to keep track of things 
var bifurcWithCnt: IXnPlusOneWithCounter = <IXnPlusOneWithCounter>function (r, x) {
    bifurcWithCnt.counter += 1;
    return r * x * (1.0 - x);
}

bifurcWithCnt.counter = 0;

var r: number = 3.1, x: number = 0.5, idx: number = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcWithCnt(r, x);
    console.log(`count ${bifurcWithCnt.counter} = ${x}`);
}