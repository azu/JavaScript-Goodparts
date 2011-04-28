/**
 * Created by azu.
 * Date: 11/02/10 22:49
 * License: MIT License
 */
function add(x, y) {
    return x + y;
}
Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {// 重複実装は防止
        this.prototype[name] = method;
        return this;
    }
}
Function.method('curry', function () {
    var slice = Array.prototype.slice,
            args = slice.apply(arguments),
            that = this;
    // カリー化したメソッド
    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    }
});
// test
var add_1 = add.curry(1);
alert(add_1(6));// 7