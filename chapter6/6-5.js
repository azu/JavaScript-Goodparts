/**
 * Created by azu.
 * Date: 11/05/26 22:44
 * License: MIT License
 */
var is_Array = function(value) {
    return value &&
            typeof value === 'object' &&
            value.constructor === Array;
};
var is_array = function(value) {
    return value &&
            typeof value === 'object'
            && typeof value.length === 'number'
            && typeof value === 'object'
            && !(value.propertyIsEnumerable('length'));
};