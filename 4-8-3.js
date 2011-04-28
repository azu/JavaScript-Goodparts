/**
 * Created by azu.
 * Date: 10/12/23 22:03
 * License: MIT License
 */
var factorial = function factorial(i ,a){
    a = a || 1;
    if(i < 2){
        return a;
    }
    return factorial(i - 1, a * i);
}