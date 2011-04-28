/**
 * Created by azu.
 * Date: 10/12/09 22:03
 * License: MIT License
 */

var hanoi = function (disc ,src, aux ,dst){
    if(disc > 0 ){
        hanoi(disc - 1, src, dst, aux);
        p("Move disc " + disc + " form " + src + " to " + dst);
        hanoi(disc - 1, aux ,src, dst);
    }
}
hanoi(3, "Src", "Aux", "Dst");