// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Constantly Changig Text
// var text  = [ "text1", "text2", "text3", "text4", "text5" ];
// var index = 0;

// $("#description").fadeTo( 1, 0 );

// setInterval( function(){
//     $( "#description" ).stop().html( text[ index ] ).fadeTo( 500, 1, function(){
//         index++;
//         $( "#description" ).delay( 400 ).fadeTo( 500, 0 );
//         if ( index == 5 ) {
//             index = 0;
//         };
//     } );
// }, 1800 );

// function alertFunc() {
//     $.ajax({
//         url: "/static/my_text.txt", 
//         dataType: "text",
//         success: function (data) {
//             console.log(data)
//             // $("#result").html(spinner).load(url)
//             $("#div1").text(data);
//         }
//     });
// }
// window.addEventListener('load', function()
// {
//     var xhr = null;

//     getXmlHttpRequestObject = function()
//     {
//         if(!xhr)
//         {               
//             // Create a new XMLHttpRequest object 
//             xhr = new XMLHttpRequest();
//         }
//         return xhr;
//     };

//     updateLiveData = function()
//     {
//         var now = new Date();
//         // Date string is appended as a query with live data 
//         // for not to use the cached version 
//         var url = '/static/my_text.txt?' + now.getTime();
//         xhr = getXmlHttpRequestObject();
//         xhr.onreadystatechange = evenHandler;
//         // asynchronous requests
//         xhr.open("GET", url, true);
//         // Send the request over the network
//         xhr.send(null);
//     };

//     updateLiveData();
//     function evenHandler()
//     {
//         // Check response is ready or not
//         if(xhr.readyState == 4 && xhr.status == 200)
//         {
//             dataDiv = document.getElementById('liveData');
//             // Set current data text
//             dataDiv.innerHTML = xhr.responseText;
//             // Update the live data every 1 sec
//             setTimeout(updateLiveData(), 0);
//         }
//     }
// });
function update() {
    $.get("/static/my_text.txt", function(data) {
      $("#liveData").text(data);
      window.setTimeout(update, 10000);
    });
  }