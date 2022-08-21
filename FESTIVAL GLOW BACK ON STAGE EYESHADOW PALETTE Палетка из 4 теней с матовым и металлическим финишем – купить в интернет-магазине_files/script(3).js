$(function() {
    initNotify();

    /** выбранный оффер */
    setTimeout(function() {
        if (typeof window.selectedOffer !== 'undefined') {
            var $selectedColor = $('.js-shade[data-code="' + window.selectedOffer + '"]');
            if ($selectedColor.length === 1) {
                $selectedColor.trigger('click');
            }
        }
    }, 300)

    $(document).on('click', '.js-shade', function() {
        let isStock = $(this).attr('data-is-stock');
        let shild = $('.js-is-stock');
        if (isStock == 'Y') {
            shild.show();
        } else {
            shild.hide();
        }
    });

    /**
     * Наличие в магазинах
     */
    let shopsData = []

    const stores  = document.querySelector('#stores');
    const fisDetail  = $('.fis-detail-wrapper');
    const storeLocator  = $('#store-locator');

    const renderStoreItems = (data) => {
        const storeItemTemplate = document.querySelector('#store-item').content;
        const storesFoundText  = document.querySelector('#stores_found_2');
        stores.innerHTML = '';
        storesFoundText.textContent = `${data.length} магазинов найдено`;
        data.forEach((dataItem) => {
            const storeItemElement = storeItemTemplate.querySelector('.store-item').cloneNode(true);
            storeItemElement.dataset.id = dataItem.id;
            storeItemElement.querySelector('.js-fis-detail').dataset.id = dataItem.id;
            storeItemElement.querySelector('.header strong').textContent = dataItem.title;
            storeItemElement.querySelector('.contact').href = 'tel:' + dataItem.phone;
            storeItemElement.querySelector('.contact .label').textContent = dataItem.phone;
            storeItemElement.querySelector('.address').textContent = dataItem.address;
            storeItemElement.querySelector('.store-directions').href = `https://yandex.ru/maps/?pt=${dataItem.coordinates.slice().reverse().join()}&z=12&l=map`;
            stores.appendChild(storeItemElement);
        })
    }

    let shopMap;

    $(stores).on('click', '.js-fis-detail', (evt) => {
        evt.preventDefault();
        const target = $(evt.target).parents('.store-item').find('.js-fis-detail');
        const id = target.data('id');
        const storeData = shopsData.find((elem) => elem.id === id);
        fisDetail.find('.name strong').text(storeData.title);
        fisDetail.find('.address').text(storeData.address);
        fisDetail.find('.contact .label').text(storeData.phone);
        fisDetail.find('.contact').attr('href', `tel:${storeData.phone}`);
        if (storeData.schedule) {
            fisDetail.find('.store-info--shophours').text(storeData.schedule);
        } else {
            fisDetail.find('.opening-hours-content').hide();
        }
        fisDetail.find('.StoreDetail__Actions a').attr('href', `https://yandex.ru/maps/?pt=${storeData.coordinates.slice().reverse().join()}&z=12&l=map`);
        fisDetail.show();
        if (shopMap === undefined) {
            shopMap = new ymaps.Map("shopmap", {
                center: storeData.coordinates,
                zoom: 10
            });
        } else {
            shopMap.setCenter(storeData.coordinates, 10, {
                checkZoomRange: true
            });
        }
        const placemark = new ymaps.Placemark(storeData.coordinates, {
            id
        }, {
            iconImageHref: '/local/frontend/build/assets/images/example/store-locator-maps/pin-store.png',
            iconLayout: 'default#image',
            iconImageSize: [24, 34],
            iconImageOffset: [-12, -34]
        });
        shopMap.geoObjects.add(placemark);
        storeLocator.addClass('with-detail');
    });

    fisDetail.on('click', '#js-fis-change', (evt) => {
        evt.preventDefault();
        fisDetail.hide();
        storeLocator.removeClass('with-detail');
    });

    $(document).on('click', '.StoreDetail__Actions a', function (e) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "DlEvent",
            eventCategory: "kiko",
            eventAction: "button_click",
            eventLabel: "build_route"
        })
    });

    const currentLocationHandler = $('#current_location_handler');

    if (typeof ymaps !== 'undefined') {
        ymaps.ready(() => {
            $('[data-mfp-src="#findinstore"]').magnificPopup({
                type:'inline',
                midClick: true,
                callbacks: {
                    open: function () {
                        let button = $(this.st.el);
                        let popup = $('#findinstore');
                        let productNode = popup.find('.ProductBoxSimple');

                        productNode.find('img').attr('src', $('.js-product-images').find('.ProductImages__Item').first().find('img').attr('src'));
                        productNode.find('a')
                            .attr('href', location.pathname + location.search)
                            .text($('.ProductDetails__Title').first().text());

                        if (window.fakeShops && (window.fakeShops.length > 0)) {
                            shopsData = window.fakeShops;
                            initMap();
                        } else {
                            $.post(
                                '/ajax/get_shops.php',
                                {
                                    article: button.data('article'),
                                },
                                function(response) {
                                    if (response.status === 'ok') {
                                        shopsData = response.data;
                                        initMap();
                                    }
                                }
                            );
                        }
                    }
                }
            });
        });
    }

    function initMap() {
        const shopsMap = new ymaps.Map('findstoremap', {
            center: [55.76, 37.64],
            zoom: 7
        });

        const shopGeoObjects = [];

        for (const placemark of shopsData) {
            const {coordinates, id} = placemark;
            const shopPlacemark = new ymaps.Placemark(coordinates, {
                id
            }, {
                iconImageHref: '/local/frontend/build/assets/images/example/store-locator-maps/pin-store.png',
                iconLayout: 'default#image',
                iconImageSize: [24, 34],
                iconImageOffset: [-12, -34]
            });

            shopPlacemark.events
                .add('click', function (e) {
                    var id = e.get('target').properties._data.id;

                    const shopItem = $('.js-map-shop[data-id="'+ id +'"]');

                    $('.js-map-shop').removeClass('selected');
                    shopItem.addClass('selected');

                    $('#results-list').animate({
                        scrollTop: $('#results-list').prop('scrollTop') + shopItem.offset().top - $('#results-list').offset().top
                    }, 500);
                });

            shopGeoObjects.push(shopPlacemark);
        }

        const shopClusterer = new ymaps.Clusterer();
        shopClusterer.add(shopGeoObjects);
        shopsMap.geoObjects.add(shopClusterer);

        renderStoreItems(shopsData);

        var suggestView = new ymaps.SuggestView('autocomplete');
        suggestView.events.add('select', function (e) {
            setTimeout(async () => {
                var geocoderResult = await ymaps.geocode(e.originalEvent.item.value);
                    await shopsMap.setBounds(geocoderResult.geoObjects.get(0).geometry.getBounds(), {
                        checkZoomRange: true,
                        zoomMargin: 10
                    });
                    shopsMap.setZoom(10);
            }, 200);
        });

        const rerenderStoreItems = () => {
            const mapBounds = shopsMap.getBounds();
            const [minBound, maxBound] = mapBounds;

            const filteredObjects = shopsData.filter((item) => {
                const [latitude, longitude] = item.coordinates;
                return latitude >= minBound[0] && latitude <= maxBound[0] && longitude >= minBound[1] && longitude <= maxBound[1]
            })

            renderStoreItems(filteredObjects)
        }

        shopsMap.events.add('boundschange', () => {
            rerenderStoreItems()
        })

        setTimeout(() => {
            shopsMap.setBounds(shopsMap.geoObjects.getBounds(), {
                checkZoomRange: true,
                zoomMargin: 5
            });
        }, 200);

        const geoOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function locateSuccess({coords}) {
            const {latitude, longitude} = coords;
            shopsMap.setCenter([latitude, longitude], 10, {
                checkZoomRange: true
            });

            setTimeout(() => {
                rerenderStoreItems()
            }, 200);
        }

        function locateError(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        currentLocationHandler.on('click', (evt) => {
            evt.preventDefault();
            navigator.geolocation.getCurrentPosition(locateSuccess, locateError, geoOptions);
        })
    }

    $.post(
        '/ajax/get_delivery_info.php',
        function(response) {
            $('[data-delivery-info-loader]').addClass('hidden');

            if (
                (response.status === 'ok')
                && response.data.price
            ) {
                $('[data-delivery-info-price]').text(response.data.price);
                $('[data-delivery-info-time]').text(response.data.time);

                $('[data-delivery-info-wrap]').removeClass('hidden');
            }
        }
    );
});

function initNotify() {
    // Подписка на товар
    $('#formNotify').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var error = false;

        form.find('.is-invalid').removeClass('is-invalid');
        $('.form-error').css('visibility', 'hidden');

        form.find('.required').each(function() {
            if ($(this).attr('type') == 'text') {
                if ($(this).val().length == 0) {
                    $(this).addClass('is-invalid');
                    error = true;
                }
            } else if ($(this).attr('type') == 'email') {
                if ($(this).val().length > 0 && ($(this).val().match(/.+?\@.+/g) || []).length == 1) {

                } else {
                    $(this).addClass('is-invalid');
                    error = true;
                }
            } else if ($(this).attr('type') == 'checkbox') {
                if ($(this).is(':checked')) {

                } else {
                    $(this).parents('.checkbox').addClass('is-invalid');
                    error = true;
                }
            }
        });
        if (!error) {
            $.ajax({
                type: 'GET',
                url: form.attr('action'),
                data: form.serialize(),
                success: function(data) {
                    $('#formNotify').html(data);
                }
            });
        }
    });
}
