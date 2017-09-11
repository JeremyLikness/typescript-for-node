// I have a name and a save method 
interface INgController {
    ctrlName: string;
    save: (params: { key: string, value: number }[]) =>
        void;
}

// now I implement the rules given by the interface 
class Controller implements INgController {

    constructor(private seed: number) { }

    public notInTheInterfaceIsFine: number = 6;

    get ctrlName(): string {
        return "Controller" + this.seed;
    }

    save(params: { key: string, value: number }[]): void {
        var idx: number;
        for (idx = 0; idx < params.length; idx += 1) {
            console.log(params[idx].key + " = " + params[idx].value);
        }
    }
}

function debugController(ctrl: Controller): void {
    console.log(`controller: ${ctrl.ctrlName}`);
    ctrl.save([{ key: "foo", value: 1 }, { key: "bar", value: 2 }]);
}

var myCtrl = new Controller(5);
debugController(myCtrl);

// think of modules as "namespaces" to protect functions and privatize methods/information
module MyModule {
    class InternalClass {
        internal(): string {
            return 'Internal';
        }
    }

    export class MyClass {
        echo(msg: string): string {
            return msg;
        }
    }

    var internalClass = new InternalClass();
    console.log(`calling internalClass.internal: ${internalClass.internal()}`);

    var myClass = new MyClass();
    console.log(`calling myClass.echo: ${myClass.echo("echo this!")}`);

}

var exportedClass = new MyModule.MyClass();
console.log(`calling exportedClass.echo: ${exportedClass.echo("Outside!")}`);

//var notExportedClass = new MyModule.internalClass();