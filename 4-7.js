/**
 * Created by azu.
 * Date: 10/11/25
 * Time: 22:22
 */
/**
 * prototype拡張してmethodを追加する
 * @param name
 * @param method
 */
Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {// 重複実装は防止
        this.prototype[name] = method;
        return this;
    }
}
Number.prototype.integer = function() {
}
/**
 * 整数を取り出す拡張
 */
Number.method('integer', function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

alert((-10 / 3).integer()); // -3
/**
 * trimを実装する
 */
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, "");
});
// => こっちの方が正規表現の評価が最初の一回のみなので効率いい

String.method('trim', (function(reg) {
    return function() {
        this.replace(reg, "");
    }
})(/^\s+|\s+$/g));
alert(" name ".trim());