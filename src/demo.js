/* @flow */

function add(numbers:Array<number>):number {
    var result:number = 0;
    numbers.forEach(function(num) {
        result += num;
    });
    return result;
}

add([1,2,3]);