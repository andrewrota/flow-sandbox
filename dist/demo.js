/* @flow */

function add(numbers              )        {
    var result        = 0;
    numbers.forEach(function(num) {
        result += num;
    });
    return result;
}

add([1,2,3]);