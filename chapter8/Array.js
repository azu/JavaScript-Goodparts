/**
 * Created by azu.
 * Date: 11/06/23 22:18
 * License: MIT License
 */

    // Array#concat
var a = ['a','b','c'];
var b = ['x','y','z'];
a.concat(b, true);

// Array#join
a.push('d');
a.join("");

// Array#pop
var a = ['a','b','c'];
a.pop();

// Array.push
var a = ['a','b','c'];
var b = ['x','y','z'];
a.push(b, true);

// Array#reverse
var a = ['a','b','c'];
a.reverse();

// Array#shift
var a = ['a','b','c'];
a.shift();

// Array#slice
var a = ['a','b','c'];
var b = a.slice(0, 1);
var c = a.slice(1);
var d = a.slice(1, 2);
console.log(a, b, c, d);
