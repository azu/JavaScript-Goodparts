/**
 * Created by azu.
 * Date: 10/12/09 22:15
 * License: MIT License
 */
var walk_the_DOM = function walk(node, dosomething) {
    dosomething(node);
    node = node.firstChild;
    while (node) {
        walk(node, dosomething);
        node = node.nextSibling;
    }
}

var getElementsByAttribute = function (att, value) {
    var results = [];

    walk_the_DOM(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === 'string' &&
                (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};
// http://www.oreilly.co.jp/books/9784873113913/
var res = getElementsByAttribute("class", "category");
conosle.log(res); // [h2#books.category, h2#event.category, h2#service.category, h2.category]