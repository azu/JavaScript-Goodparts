/**
 * Created by azu.
 * Date: 10/11/26
 * Time: 3:19
 */
// コンストラクタ関数は大文字から始めるという習慣
var Quo = function(string) {
    this.status = string;
};
// get_statusというパブリックメソッドはQuoインスタンス全部で使える
// インスタンスはQuoをnew下ものから生まれたもの
Quo.prototype.get_status = function(){
    return this.status;
}
// myQUoというインスタンスを生成
var myQuo = new Quo("confused");
alert(myQuo.get_status());