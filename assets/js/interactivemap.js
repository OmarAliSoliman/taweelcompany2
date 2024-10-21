function initMap() {
  // Center the map on Makkah

  var stylez = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        }, // <-- THIS
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#fffbf8",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#fffbf8",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    // {
    //   "elementType": "labels",
    //   "stylers": [{
    //     "visibility": "off"
    //   }]
    // }
  ];

  var customStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#fffbf8",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#333333",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#fffbf8",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#333333",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#333333",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#fffbf8",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#d2e7f7",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#333333",
        },
      ],
    },
  ];

  const makkah = { lat: 21.38069, lng: 39.82235 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11.4,
    center: makkah,
    styles: customStyle
  });

  // var mapType = new google.maps.StyledMapType(stylez, {
  //   name: "Grayscale",
  // });
  // map.mapTypes.set("tehgrayz", mapType);
  // map.setMapTypeId("tehgrayz");

  // Array of marker objects
  const markersData = [
    {
      lat: 21.29069,
      lng: 39.82235,
      image: "assets/images/newsbg.png",
      title: "مشروع 2301",
      description:
        "أميت ,كونسيكتيتور أدايبا يسكينج أميت ,كونسيكتيتور أدايبا يسكينج",
    },
    {
      lat: 21.33301,
      lng: 39.67862,
      image: "assets/images/newsbg.png",
      title: "مشروع 2302",
      description: " أميت ,كونسيكتيتور أدايبا يسكينج",
    },
    {
      lat: 21.416,
      lng: 39.826,
      image: "assets/images/newsbg.png",
      title: "مشروع 2302",
      description: " أميت ,كونسيكتيتور أدايبا يسكينج",
    },
    // Add more markers as needed
  ];

  // Create markers and info windows
  markersData.forEach((data) => {
    const marker = new google.maps.Marker({
      position: { lat: data.lat, lng: data.lng },
      map: map,
      icon: "/assets/images/custommarker.svg",
    });

    const infoWindowContent = `
            <div class="map_interactive_modal">
                <div class="card_img">
                  <div class="img_parent">
                    <img src="${data.image}" alt="Image">
                  </div>  
                </div>
                <h5>${data.title}</h5>
                <p>${data.description}</p>
            </div>
        `;

    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}
