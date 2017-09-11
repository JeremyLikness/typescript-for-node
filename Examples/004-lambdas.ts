// see the difference in "this" using lambdas 

x = 42; // outside everything 

var app = () => {

    // what is "this"?
    this.x = 12;

    // iterations as a function, not a lambda expression
    function iterations() {
        var idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            this.x += 1;
            console.log(`iterations_x: ${this.x}`);
            // nested function 
            setTimeout(function () {
                console.log(`iterations: ${this.x}`);
            }, 0);
        }
    }

    var setIt = x => setTimeout(() => console.log(`lambda_setIt: ${x}`));

    // iterations as a lambda expression 
    var lambda = () => {
        var idx: number;
        for (idx = 0; idx < 10; idx += 1) {
            this.x += 1;
            console.log(`lambda_x: ${this.x}`);
            // nested lambda expression
            setTimeout(() => console.log(`lambda: ${this.x}`), 0);
        }
    }

    // try it old school 
    iterations();

    // now with lambda
    lambda();
};

// call the whole thing
app();