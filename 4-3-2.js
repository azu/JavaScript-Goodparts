/**
 * Created by azu.
 * Date: 10/11/26
 * Time: 3:06
 */
var add = function(a, b) {
    return a + b;
}
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.double = function() {
    var that = this;// thisの待避
    var helper = function() {
        that.value = add(that.value, that.value);//thatはmyObjectを指す
    }
    helper();// thisはwindow
}
myObject.value = 2
myObject.double();
myObject.value;// 4