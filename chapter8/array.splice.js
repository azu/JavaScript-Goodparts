/**
 * Created by azu.
 * Date: 11/07/28 22:04
 * License: MIT License
 */

var a = ['a','b' ,'c'];
var r = a.splice(1, 1, 'abc', 'bug');// 破壊的、返り値はidx:1から1個分の配列

Function.prototype.method = function(name, method) {
    this.prototype[name] = method;
    return this;
}

Array.method('splice', function(start, deleteCount) {
    console.log("ネイティブではないsplice");
    // エイリアスを貼る
    var that = this,// [1,2,3]などのArray
            args = arguments;// 第三引数以降を取るため
    var max = Math.max,
            min = Math.min;
    // 初期化処理
    var start, deleteCount,
            insertCount = max(args.length - 2, 0);// 配列に追加する要素数
    var len = that.length;
    start = start || 0;
    if (start < 0) {
        start += len;
    }
    start = max(min(start, len), 0);
    deleteCount = (typeof deleteCount === 'number')
            ? deleteCount
            : len;
    deleteCount = max(min(deleteCount, len - start), 0);
    // 返り値になる結果の配列
    var result = [];
    (function(start, deleteCount, insertCount) {
        var delta, element, newLen, shiftCount;
        var k = 0;
        delta = insertCount - deleteCount;
        newLen = len + delta;
        // spliceのメイン処理
        while (k < deleteCount) {
            element = that[start + k];
            if (element !== 'undefined') {
                result[k] = element;
            }
            k += 1;
        }
        shiftCount = len - start - deleteCount;
        if (delta < 0) {
            k = start + insertCount;
            while (shiftCount) {
                that[k] = that[k - delta];
                k++,shiftCount--;
            }
        } else if (delta > 0) {
            k = 1;
            while (shiftCount) {
                that[newLen - k] = that[len - k];
                k++,shiftCount--;

            }
        }
        for (k = 0; k < insertCount; k++) {
            that[start + k] = args[k + 2];
        }
        return result;
    })(start, deleteCount, insertCount);
    return result;
});

var a = ['a','b' ,'c'];
var r = a.splice(1, 1, 'abc', 'bug');// 破壊的、返り値はidx:1から1個分の配列
