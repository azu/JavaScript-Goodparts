/**
 * Created by azu.
 * Date: 11/08/11 22:23
 * License: MIT License
 */
Function.prototype.method = function(name, method) {
    this.prototype[name] = method;
    return this;
}
Function.method('bind', function(that) {
    var method = this,
            slice = Array.prototype.slice,
            args = slice.apply(arguments, [1]);

    return function() {
        return method.apply(that,
                args.concat(slice.apply(arguments, [0])));
    }
});

var x = (function() {
    return this.value;
}).bind({
    value : 666
});
console.log(x());