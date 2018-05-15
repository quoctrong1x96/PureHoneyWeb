var map;
var latlng = new google.maps.LatLng(10.8072881, 106.6479168);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -100
            }]
        }];
var mapOptions = {
    zoom: 15.5,
    center: latlng,
    scrollwheel: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
map = new google.maps.Map(document.getElementById("map"), mapOptions);
var geocoder_map = new google.maps.Geocoder();
var address = '211 Hoàng Hoa Thám, Phường 12,Tân Bình, Hồ Chí Minh,Việt Nam';
geocoder_map.geocode({
    // 'address': address
    'location' : latlng
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var  marker = new google.maps.Marker({
            map: map,
            icon: 'C:\\Users\\trong-bq\\Desktop\\Node\\store\\store\\images\\loc.png',
            position: map.getCenter(),
            title: 'Nhấn xem thông tin'
        });
        var contentString = '<div class="">' +
                                '<h2>Mật ong nguyên chất Bình Phước</h2>' +
                                '</div>' +
                                    '<div class="about-us-content">' +
                                        '<span>Địa chỉ</span>'+
                                        '<p>211, Hoàng Hoa Thám, Phường 12, Tân Bình, Hồ Chí Minh</p>'+
                                        '<a href="https://bit.ly/2IiK6ff" target="_blank">Xem trên Google map</a>'+
                                    '</div>'+
                                '</div>'+    
                            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });  
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});


var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
map.mapTypes.set('gMap', mapType);
map.setMapTypeId('gMap');
