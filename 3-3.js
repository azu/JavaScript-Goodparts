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
        city : "sydney"
    },
    arrival: {
        IATA : "LAX",
        time : "2004-09-23 10:42",
        city : "Los Angeles"
    }
}

var middle = stooge["middle-name"] || "none";
var status = flight.status || "unknown";
stooge["middle-name"] = "‹UJerome";
stooge.nickname = "curly";
flight.equipment = {
    model:"boeiing 777"
};
flight.status = "overdue";