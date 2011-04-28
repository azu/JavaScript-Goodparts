// 3-5.js プロトタイプ
var stooge = {
    "first-name": "Jerome",
    "last-name" : "Howard"
}
// Object.createというメソッドを作る
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);// stoogeを継承
another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge.nickname = "Moe";
p(stooge["first-name"]); // Jerome 変化してない
stooge.profession = "actor";
p(another_stooge.prototype__profession); // actor //-> another_stooge.__proto__.profession となるのでstooge.professionの値が返る