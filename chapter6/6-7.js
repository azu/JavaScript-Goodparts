/**
 * Created by azu.
 * Date: 11/06/09 22:10
 * License: MIT License
 */

Array.dim = function(dimension, initial) {
    var ary = [];
    for (var i = 0; i < dimension; i++) {
        ary[i] = initial;

    }
    return ary;
};
var myArray = Array.dim(10, 0);
// 0,0,0,0,0,0,0,0,0,0  Array

var matrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
];
matrix[2][1];// 7

Array.matrix = function(m, n, initial) {
    var mat = [];
    for (var i = 0,len = m; i < len; i++) {
        var ary = [];
        for (var j = 0,len = n; j < len; j++) {
            ary[j] = initial;
        }
        mat[i] = ary;
    }
    return mat;
};

var myMatrix = Array.matrix(4, 4, 0);

Array.identity = function(n) {
    var mat = Array.matrix(n, n, 0);
    for (var i = 0,len = n; i < len; i++) {
        mat[i][i] = 1;
    }
    return mat;
};
myMatrix_i = Array.identity(4);
console.table(myMatrix_i)

/* 単位行列
 var ide = [
 [1,0,0,0],
 [0,1,0,0],
 [0,0,1,0],
 [0,0,0,1],
 ];
 */