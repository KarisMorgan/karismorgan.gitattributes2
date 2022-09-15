//This displays an alert when the submit button on the contact form is clicked

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('contactbutton');
    contactbutton.addEventListener('click', function() {
        alert("Thank you for your message!")
    })

});

 // Creating map options
 var mapOptions = {
 center: [17.385044, 78.486671],
 zoom: 10
 }
 
 // Creating a map object
 var map = new L.map('map', mapOptions);
 
 // Creating a Layer object
 var layer = new     L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
 
 // Adding layer to the map
 map.addLayer(layer);


