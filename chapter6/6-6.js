/**
 * Created by azu.
 * Date: 11/05/26 22:45
 * License: MIT License
 */

Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {// 重複実装は防止
        this.prototype[name] = method;
        return this;
    } else {
        alert("モダン!");
    }
}
// ネイティブなもの
Array.method('reduce', function(f, value) {
    for (var i = 0,len = this.length; i < len; i++) {
        value = f(this[i], value);
    }
    return value;
});
var data = [4,8,15,16,23,42];
var add = function(a, b) {
    return a + b;
};
var mult = function(a, b) {
    return  a * b;
};
var sum = data.reduce(add, 0);
var product = data.reduce(mult, 1);

data.total = function() {
    return this.reduce(add, 0);
}

total = data.total(); // 108


