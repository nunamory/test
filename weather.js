function getWheater(city, key, callback) {
    const apiUri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    function reqListener () {
        callback(JSON.parse(this.responseText));
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", apiUri);
    oReq.send();
}