$(document).ready(function() {

    var IPs = [];
    var lastIP =[];


    getIPs();
    //function to get all rows from table IPS from dtabase. then passing it to IPs object.
    //Once Done it will run getgeo function.
    //Once getgeo is done it will run getlatest function
    function getIPs() {
        $.get("/api/ips", function(data) {
            IPs = data;
            console.log(IPs);
        }).done(getgeo).done(getLatest);
    }
    //it will get the info for last entry row in database and show the info below the map
    function getLatest() {
        $.get("/api/ips/latest", function(data) {
            lastIP = data;
            console.log(lastIP);
            $(".lastestIP").prepend("<h1>latest IP: "+lastIP[0].sourceIP +"</h1>").append("<h1>City: "+lastIP[0].city +"</h1>").append("<h1>State: "+lastIP[0].state +"</h1>").append("<h1>Country: "+lastIP[0].country +"</h1>").append("<h1>Destination Port: "+lastIP[0].destinationPort +"</h1>");

        })
    }
    //it will process each IP in the IPs object, pass it to IP API call to get location details
    //then it will update each row in database based on the id with location details using updateIPs function.
    function getgeo(){
        IPs.forEach(function(ip){


            var queryURL = "https://ip-api.com/json/"+ ip.sourceIP;


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
    



    //function to use api routes for PUT, which will update lon,lat, city, State and  Country based on the Id of each row.
    function updateIPs(ip) {
        $.ajax({
            method: "PUT",
            url: "/api/ips",
            data: ip
        })
    }


})
