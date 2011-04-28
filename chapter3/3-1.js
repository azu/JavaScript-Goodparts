var empty = {};
var stooge = {
    "first-name": "Jerome",
    "last-name" : "Howard"
}

var flight = {
    airline : "OCeanic",
    number : 815,
    departure : {
        IATA : "SYD",
        time : "2004-09-22 14:55",
        city : "sydney" // ここに,を入れるとIEはエラー
    },
    arrival: {
        IATA : "LAX",
        time : "2004-09-23 10:42",
        city : "Los Angeles"
    } // ここも同様に,はいれない
}
// 尻カンマってやつです
// http://blog.livedoor.jp/dankogai/archives/50893888.html
