/**
 * Created by azu.
 * Date: 10/12/23 22:33
 * License: MIT License
 */

var myPObject = (function() {
    var value = 0;
    return {
        increment : function(inc) {
            value += (typeof inc == "number") ? inc : 1
        },
        getValue : function() {
            return value;
        }
    }
})();

var qui = function(status) {
    return {
        get_status : function() {
            return status;
        }
    };
}
var myQuo = quo("amazed");
myQuo.get_status();

var fade = function(node) {
    var level = 1;
    var step = function() {
        var hex = level.toString(16);
        node.style.backgroundColor = "#FFFF" + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    }
    setTimeout(step, 100);
};
fade(document.body);

// よくあること
var add_the_handlers = function(nodes) {
    var i;
    for (i = 0,len = nodes.length; i < len; i++) {
        node[i].onclick = function(e) {
            alert(i);
        }
    }
};


var add_the_handlers = function(nodes) {
    var i;
    for (i = 0,len = nodes.length; i < len; i++) {
        node[i].onclick = (function(e) {
            return function() {
                alert(i);
            }
        })(i);
    }
};
add_the_handlers(document.getElementsByTagName("p"));
