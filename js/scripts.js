"use strict";
//mobile nav menu
(function(){
  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false;
  function toggleMenu(){
    if(toggle){
      navMenu.classList.remove("show-menu"),
      toggle = false
    }
    else {
      navMenu.classList.add("show-menu"),
      toggle = true
    }
  }
})();

//google maps api
function initMap(){
  let leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let rileys =  {lat: 52.629307, lng: -1.136229};
  let mapDmu = document.getElementById("map");

  let map = new google.maps.Map(mapDmu, {
    zoom: 15,
    center: leicester
  });

  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'DMU campus location'
  });

  let markerRILEYS = new google.maps.Marker({
    position: rileys,
    map: map,
    title: 'Rileys location'
  });
}
