let btnSearch = $("#btnEnter");
btnSearch.click(function () {
    let divResume = $("#resume");
    divResume.html("");
    let city = $("#input").val();
    $.ajax( {
        url: "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&lang=fr&appid=802d6a8fe655cbe86922a75b14e51b56",
        method: "GET",
        dataType: "json"
    })
        .done(function (response) {
            divResume.html(city + "<br>" + "<br>"+"Température : " + Math.ceil(response.main.temp)+"°C" + "<br>" +
            "min : " + Math.ceil(response.main.temp_min)+"°C, " + "max : " + Math.ceil(response.main.temp_max) + "°C, "
                + "ressentie : "+ Math.ceil(response.main.feels_like)+ "°C"+"<br>" + "<br>"+response.weather[0].description+ "<br>" +
            "Humidité : " + response.main.humidity +"%" + "<br>" + "Vent : " + response.wind.speed + " km/h");
        });
    });