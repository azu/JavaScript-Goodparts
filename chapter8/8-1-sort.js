/**
 * Created by azu.
 * Date: 11/07/14 22:07
 * License: MIT License
 */

var n = [4,8,15,16,23,42];
n.sort();
console.log(n);
// JavaScriptは比較関数がない場合、文字列としてソートを行う

n.sort(function(a, b) {
    // 昇順
    return a - b;
});
var m = ['mm' ,'bb', 'a',4,8,15,16,23,42];
m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});

var by = function(name) {
    return function(o, p) {
        var a,b;
        if (typeof o === 'object' && typeof p === 'object'
                    && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            // 型名の比較
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw new Error(name + ' を含むオブジェクトが必要ですじゃ')
        }
    };
};

var s = [
    {first: 'Joe',   last: 'Besser'},
    {first: 'Moe',   last: 'Howard'},
    {first: 'Joe',   last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
s.sort(by('first'));
// firstが同じだったら,lastの方でソートする
var by = function(name, minor) {
    return function(o, p) {
        var a,b;
        if (typeof o === 'object' && typeof p === 'object'
                    && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            // 型名の比較
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw new Error(name + ' を含むオブジェクトが必要ですじゃ')
        }
    };
};
s.sort(by('last', by('first' , by('middle'))));

