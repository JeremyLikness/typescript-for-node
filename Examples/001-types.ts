var x: number = 2;
console.log(`x = ${x}`);

var str: string = "Hello, World.";
console.log(`str = ${str}`);
// str = 2;

var checked: boolean = false;
console.log(`checked = ${checked}`);
//checked = "true";

var list: number[] = [1, 2, 3];
list.push(4);
//list.push("5");
console.log(`list = ${list}`);

enum Interest { Bored = 42, Interested, Neutral };
var myInterest: Interest = Interest.Interested;
console.log(`Interest Level = ${Interest[myInterest]}`);

function returnsNada(): void {
    // return 1;
}

function returnsWhatever(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1;
}

var result = returnsWhatever();
console.log(`result = ${result}`);