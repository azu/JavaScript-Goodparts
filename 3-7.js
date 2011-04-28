/**
 * Created by azu.
 * Date: 10/11/26
 * Time: 2:27
 */
for (var name in another_stooge) {
    if (another_stooge.hasOwnProperty(name)) {
        console.log(name, ':', another_stooge[name]);
    }
}