/**
 * Created by azu.
 * Date: 11/09/08 22:00
 * License: MIT License
 */

    // String

var name = 'Curly';
var initial = name.charAt(0);
name.charAt(0) == name[0];


var name = 'Curly';
var initial = name.charCodeAt(0);
String.fromCharCode(initial);

var s = 'C'.concat('a', 't');

var text = 'Mississippi';
var p = text.indexOf('ss');
p = text.indexOf('ss', 3);// 第二引数は開始位置
p = text.indexOf('ss', p);


var text = 'Mississippi';
var p = text.indexOf('ss');
p = text.lastIndexOf('ss', 3);// 第二引数は開始位置
p = text.lastIndexOf('ss', p);


var m = ['AAA', 'A', 'aa', 'a' ,'Aa','aaa'];
m.sort(function(a, b) {
    return a.localeCompare(b);
});

var text = '<html><body bgcolor="linen"><p>' +
        'This Is <b>bold</b></p></body></html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;

var a,i;

a = text.match(tags);
for (var j = 0,len = a.length; j < len; j++) {
    console.log(a[i]);
}

var result = "mother_in_law".replace('_', '-');

// search
var text = 'and in it he says "Any damn fool could';
// indeoxの正規表現版
var pos = text.search(/["']/);    // pos is 18

var text = 'and in it he says "Any damn fool could';
var a = text.slice(18);
var b = text.slice(0, 3);
var b = text.slice(-5);//後ろから-5、最後まで

