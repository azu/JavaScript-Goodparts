// 3-4.js 参照
var stooge = {
    "first-name": "Jerome",
    "last-name" : "Howard"
}
var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;// "Curly"
var a= {}, b={} , c= {};
a=b=c={}; // 同じ{}を参照している。
a.prop = "追加";
console.log(b); // bも同じオブジェクトを指す //=> {prop : "追加"}
