$(document).ready(function() {

    var IPs = [];
    var lastIP =[];


    getIPs();

    function getIPs() {
        $.get("/api/ips", function(data) {
            IPs = data;
            console.log(IPs);
        }).done(getgeo).done(getLatest);
    }

    function getLatest() {
        $.get("/api/ips/latest", function(data) {
            lastIP = data;
            console.log(lastIP);
            $(".lastestIP").prepend("<h1>latest IP: "+lastIP[0].sourceIP +"</h1>").append("<h1>City: "+lastIP[0].city +"</h1>").append("<h1>State: "+lastIP[0].state +"</h1>").append("<h1>Country: "+lastIP[0].country +"</h1>").append("<h1>Destination Port: "+lastIP[0].destinationPort +"</h1>");

        })
    }

    function getgeo(){
        IPs.forEach(function(ip){


            var queryURL = "http://ip-api.com/json/"+ ip.sourceIP;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function (response) {
                console.log(queryURL);
                ip.longitude = response.lon;
                ip.latitude = response.lat;
                ip.city = response.city;
                ip.country = response.country;
                ip.state = response.region;

                console.log(ip);
                //$.put("/api/ips", thisIP);
                updateIPs(ip);
            })


        })

    }




    function updateIPs(ip) {
        $.ajax({
            method: "PUT",
            url: "/api/ips",
            data: ip
        })
    }


})