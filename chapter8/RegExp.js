/**
 * Created by azu.
 * Date: 11/08/25 22:38
 * License: MIT License
 */
Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {// 重複実装は防止
        this.prototype[name] = method;
        return this;
    }
}
String.method('entityify', function () {
    var character = {
        '<' : '&lt;',
        '>' : '&gt;',
        '&' : '&amp;',
        '"' : '&quot;'
    };
    return function () {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
}());
var text = '<html><body bgcolor=linen><p>' +
        'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

while ((a = tags.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        console.log(('// [' + i + '] ' + a[i]).entityify());
    }
}

/&.+;/.test('frank &amp; beans');