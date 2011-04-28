/**
 * Created by azu.
 * Date: 2010/09/21
 * Time: 22:47:23
 */
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
alert(myObject.value);    // 1

myObject.increment(2);
alert(myObject.value);    // 3