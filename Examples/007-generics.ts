// I have an id 
interface IHasId {
    id: number;
}

// I am a class with an id 
class MyClass implements IHasId {
    id: number;
    description: string;
}

// in this echo, the returned value is cast to IHasId 
function nonGenericEcho(item: IHasId): IHasId {
    console.log(`Id is ${item.id}`);
    return item;
}

// in this echo, the returned value is cast to the type passed in
function genericEcho<T extends IHasId>(item: T): T {
    console.log(`Id is ${item.id}`);
    return item;
}

var myInstance = new MyClass();
myInstance.id = 2;
myInstance.description = "This is my description.";

var nonGeneric = nonGenericEcho(myInstance); // type of nonGeneric is IHasId 
//console.log(nonGeneric.description); // <-- issue, type is IHasId so no description

var generic = genericEcho(myInstance); // type of generic is MyClass 
console.log(generic.description); // <-- works fine 

// pass me something and return true or false
interface IPredicate<T> {
    (obj: T): boolean;
}

var myList: { key: number, value: string }[] = [];

myList.push({ key: 1, value: "foo" });
myList.push({ key: 2, value: "bar" });

// find the first item in the list that satisfies a predicate 
function findFirst<T>(list: T[], predicate: IPredicate<T>): T {
    var idx: number;
    for (idx = 0; idx < list.length; idx += 1) {
        if (predicate(list[idx])) {
            return list[idx];
        }
    }
    return null;
}

// intelliSense understands what item must look like based on the list 
// furthermore, result2 is of type { key: number, value: string };
var result2 = findFirst(myList, item => item.key === 1);
console.log(`Found result with value: ${result2.value}`);