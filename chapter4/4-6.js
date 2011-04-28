/**
 * Created by azu.
 * Date: 10/11/25
 * Time: 22:02
 */
var add = function(a ,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw {
            name : "TypeError",
            message : "add needs numbers"
        };
    }
    return a + b;
}
 // TEST_add
var try_if = function(){
    try{
        add("seven");
    }catch (e){
        console.log(e.name + ': ' + e.message);
        if(e.name === "TypeError"){
            alert("TypeErrorっす");
        }else{
            alert("TypeError以外だな");
        }
    }
}
// TEST_add_moz
// mozillaのみのcatchハンドリングの拡張
// https://developer.mozilla.org/ja/Core_JavaScript_1.5_Guide/Exception_Handling_Statements/try...catch_Statement
var try_if_moz = function(){
    try{
        add("seven");
    }catch (e if e.name === "TypeError"){
        alert("TypeErrorのみがここにくる");
    }
}
try_if();
try_if_moz();