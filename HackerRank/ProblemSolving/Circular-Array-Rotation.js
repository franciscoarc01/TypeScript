"use strict";
exports.__esModule = true;
function circularArrayRotation(array, k, queries) {
    // Write your code here
    var arrayResult = [];
    for (var i = 0; i < array.length; i++) {
        var moveItem = array[i];
        var indexNext = i === array.length - 1 ? 0 : i + 1;
        array[i] = array[indexNext];
        array[indexNext] = moveItem;
    }
    return arrayResult;
}
circularArrayRotation([1, 2, 3], 0, []);
