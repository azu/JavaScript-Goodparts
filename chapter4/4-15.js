/**
 * Created by azu.
 * Date: 11/02/24 22:27
 * License: MIT License
 */
var fib = function(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
for (var i = 0,len = 10; i < len; i++) {
    p('// ' + i + ' :' + fib(i));
}

// メモ化
var fibonacci = (function() {
    var memo = [0,1];
    var fib = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            memo[n] = result = fib(n - 1) + fib(n - 2);
        }
        return result;
    }
    return fib;
})();
for (var i = 0,len = 10; i < len; i++) {
    console.log('// ' + i + ' :' + fibonacci(i));
}
/**
 * memo化した関数を返す
 * @param memo {Array} メモの初期値
 * @param  fundamental {function} 実行関数
 */
var memoizer = function(memo, fundamental) {
    var shell = function(n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};
var fib = memoizer([0,1], function(shell, n) {
    return shell(n - 1) + shell(n - 2);
})
fib(14);


