// creating polyfill for bind method

const info = {
    firstName : "Mukund",
    lastName : "Tiwari",
    print : function (state,country){
        console.log(`${this.firstName} ${this.lastName} ${state}  ${country}`);
    },
}

Function.prototype.mybind = function(...args){
    let obj = this;
    let funcName = args[0];
    let params = args.slice(1);
    // console.log(...params)
    return function(...args2){
        obj.apply(funcName,[...params,...args2]);
    }
}

const func = info.print.mybind(info,"ballia");
func("UP");







