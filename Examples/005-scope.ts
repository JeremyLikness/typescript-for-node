// let vs var 
var app = () => {
    
        var withVar = () => {
            var idx: number;
            for (idx = 0; idx < 10; idx += 1) {
                setTimeout(() => console.log(`var idx = ${idx}`), 0);
            }
        }
    
        var withLet = () => {
            for (let idx: number = 0; idx < 10; idx += 1) {
                setTimeout(() => console.log(`let idx = ${idx}`), 0);
            }
        }
    
        withVar();
        withLet();
    }
    setTimeout(app, 0);
    
    const maxRows = 1000;
    //maxRows = 12;
    if (100 < maxRows) {
        console.log(`It is within range!`);
    } 