/**
 * Created by azu.
 * Date: 11/04/28 22:51
 * License: MIT License
 */
var eventualit = function(that) {
    var refistry = {};
    that.fire = function() {
        var type = typeof event === "string"
                ? event
                : event.type;
        var array,
                fn,handler;
        if (refistry.hasOwnProperty(type)) {
            
        }
    }
}