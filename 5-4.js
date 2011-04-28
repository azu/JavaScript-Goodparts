/**
 * Created by IntelliJ IDEA.
 * User: azu
 * Date: 11/04/14
 * Time: 22:15
 * To change this template use File | Settings | File Templates.
 */
var namal = function() {
    var that = {};
    var spec = { // プライベートな変数 = 外からは特権関数でしか触れない
        name : 'Herb'
    };
    that.get_name = function() {
        return spec.name;
    }
    that.says = function() {
        return spec.saying || '';
    }
    return that;
};

console.log(myMamal);

// .2
var namal = function() {
    var that = {};
    var spec = { // プライベートな変数 = 外からは特権関数でしか触れない
        name : 'Herb'
    };
    that.get_name = function() {
        return spec.name;
    }
    that.says = function() {
        return spec.saying || '';
    }
    return that;
};
var cat = function(spec) {
    spec.saying = spec.saying || 'meow';

    var that = function() {
        var public = {};
        var spec = { // プライベートな変数 = 外からは特権関数でしか触れない
            name : 'Herb'
        };
        public.get_name = function() {
            return spec.name;
        }
        public.says = function() {
            return spec.saying || '';
        }
        return public;
    };
    that.purr = function(n) {
        var i,s = '';
        for (var i = 0,len = n; i < len; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    }

    that.get_name = function() {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    }
    return that;
};
var myCat = cat({
            name: 'Henrietta'
        });

// 3
/**
 * prototype拡張してmethodを追加する
 * @param name
 * @param method
 */
Function.prototype.method = function(name, method) {
    if (!this.prototype[name]) {
        this.prototype[name] = method;
        return this;
    }
}
Object.method('superior', function(name) {
    var that = this,
            method = that[name];
    var that = this;
    var method = that[name];
    return function() {
        return method.apply(that, arguments);
    }
})
var coolcat = function(spec) {
    var that = cat(spec),
            super_get_name = that.superior('get_name');
    that.get_name = function(n) {
        return 'like ' + super_get_name() + ' baby';
    };
    return that;
}
var myCoolCat = coolcat({
            name : 'Bix'
        });
var name = myCoolCat.get_name();
/*
 順番に見ると、
 coolcatの一行目でcatの返り値をvar thatに入れてて、
 そのthatの中身はcatの方に書いてあるthatと同じ(purr,get_nameとかを持っている)
 2行目で、that.superior('get_name');を呼んでObject.method('superior', function(name) { ... })の方へ行く
 superior最初のthisはthat.superior('get_name');のthat=catのこと。
 3行目のcat[name]はcat['get_name']になる。
 4行目はそのcatのコンテキストを維持するために、クロージャーにしてsuper_get_nameへ返している。
 super_get_name(arg)をすると、method.apply(that, arguments);が実行される。argumentsはarg,methodはcat['get_name']で、
 methodのthisをcatにして実行するという意味になる
 */