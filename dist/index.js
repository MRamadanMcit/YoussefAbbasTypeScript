"use strict";
const small = 0;
const medium = 1;
const large = 2;
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
const mySize = size.medium;
console.log({ mySize });
