/**
 * Created by azu.
 * Date: 11/08/11 22:05
 * License: MIT License
 */

var a = ['a' , 'b', 'c'];
var r = a.unshift('?', '@');

Array.method('unshift', function(){
    this.splice.apply(this,
            [0, 0].concat(Array.prototype.slice.apply(arguments)));
    return this.length;
})
