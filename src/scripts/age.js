var birthday = new Date(2009, 11, 25); // December 25, 2009
var precision = 1000; // decimal places

function updateAge() {
    var age = (new Date() - birthday) / 1000 / 60 / 60 / 24 / 365;
    var result = Math.floor(age * precision) / precision;
    document.getElementById("age").innerHTML = result;
}

// Update immediately and then every second
updateAge();
setInterval(updateAge, 1000);
