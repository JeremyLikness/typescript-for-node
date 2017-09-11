// mixins with decorators
// log is an attribute we can apply. It intercepts a method and: 
// 1. writes the arguments to the console 
// 2. executes the method and writes the result 
// 3. returns the result as if nothing happened 
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    
    let originalMethod = descriptor.value; // save a reference to the original method

    descriptor.value = function (...args: any[]) {
        console.info(`The method args are: ${JSON.stringify(args)}`); // pre
        var result = originalMethod.apply(this, args);               // run and store the result
        console.info(`The return value is: ${result}`);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}

class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    //@log
    showFullNameWithPrefix(prefix: string): string {
        return `${prefix} ${this.firstName} ${this.lastName}`;
    }
}

var person = new Person("Jeremy", "Likness");
console.log(`Hello, ${person.showFullNameWithPrefix("Mr.")}`);

// decorator that takes a parameter
// now we can choose what to pass the method to 
function logToSource(logFn: (msg: string) => void) {
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        var originalMethod = descriptor.value; // save a reference to the original method
        descriptor.value = function (...args: any[]) {
            logFn(`The method args are: ${JSON.stringify(args)}`); // pre
            var result = originalMethod.apply(this, args); // run and store the result
            logFn(`The return value is: ${result}`); // post
            return result; // return the result of the original method
        };
    };
}

const logWithTime = info => {
    let date = new Date();
    console.log(`logWithTime: ${date} ${info}`);
}

class SpecialPerson {
    constructor(public firstName: string, public lastName: string) {

    }

    //@logToSource(logWithTime)
    showFullNameWithPrefix(prefix: string): string {
        return `${prefix} ${this.firstName} ${this.lastName}`;
    }
}

var specialPerson = new SpecialPerson("Doreen", "Likness");
console.log(`Hello, ${specialPerson.showFullNameWithPrefix("Mrs.")}`);