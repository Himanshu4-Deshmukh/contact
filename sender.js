//bot token
var telegram_bot_id = "6092114895:AAFP-z9cbtGi7gyAJQ1bXINcMxind3BU1gQ";
//chat id
var chat_id = 5211441236;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    mobile = document.getElementById("mobile").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nNumber:" + mobile + "\nMessage: " + message ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("mobile").value = "";
    return false;
};
