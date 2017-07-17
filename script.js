var link = document.querySelector(".btn-address");
var popup = document.querySelector(".feedback");
var close=popup.querySelector(".close");

link.addEventListener("click", function(a){
	a.preventDefault();
	popup.classList.toggle("show");
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("show");
popup.classList.remove("error");
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93919885190054, 30.32991749740603],
            zoom: 16,
            controls: []
        }),

    	

        myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
            hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-38, -125]
        });
 
    myMap.geoObjects.add(myPlacemark);
});
