/**
 * Created by azu.
 * Date: 11/01/27 22:25
 * License: MIT License
 */
/**
 * prototype拡張してmethodを追加する
 * @param name
 * @param method
 */
Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {// 重複実装は防止
        this.prototype[name] = method;
        return this;
    }
}
String.method('deentityify', (function() {
    var entity = {lt:'<', gt:'>', quot:'"'};
    // 関数の実体
    return function() {
        return this.replace(/&([^&;]+);/g, function(a, b) {
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        });
    }
})());

// モジュール
var serial_maker = function() {
    var prefix = '',
            seq = 0;
    return {
        set_prefix : function(p){
            prefix = String(p);
        },
        set_seq: function(s){
            seq = s;
        },
        gensym : function(){
            var result = prefix + seq;
            seq++;
            return result;
        }
    }
}
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(100);
var unique = seqer.gensym();// Q100

// モジュール
var serial_maker = function(p) {
    var prefix = p || '',
            seq = 0;
    return {
        set_prefix : function(p){
            prefix = String(p);
        },
        set_seq: function(s){
            seq = s;
        },
        gensym : function(){
            var result = prefix + seq;
            seq++;
            return result;
        }
    }
}
var seqer = serial_maker('Q');
seqer.set_seq(100);
var unique = seqer.gensym();// Q100