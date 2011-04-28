/**
 * Created by azu.
 * Date: 10/11/11
 * Time: 22:25
 */
var sum = function () {
    var i, sum = 0;
    for (i = 0,len = arguments.length; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
};
