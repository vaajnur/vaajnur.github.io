$(function() {
    $('[data-block=changeCity]').each(function() {
        var _block = $(this);
        initSelectCity(_block);
    });

    if (
        window.JS_OBJ
        && window.JS_OBJ['pp_ikn_number']
    ) {
        $('.Button--pvz').removeAttr("disabled");
        $('.CartItems__pvz-error[data-pvz-error-not-in-city]').hide();

    } else {
        $('.Button--pvz').attr("disabled", true);
        $('.CartItems__pvz-error[data-pvz-error-not-in-city]').show();
    }

    var _changeCity = BX.getCookie('changecity');
    if (_changeCity == 'Y') {
        //sendDDLEventCity();
        BX.setCookie('changecity', false, {path: '\\'});
    }
});

function sendDDLEventCity() {
    if (typeof window.digitalData.events !== 'undefined') {
        window.digitalData.events.push({
            name: "Selected City",
            category: "Auth"
        });
    }
}

function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}


const preloaderTemplate = `<div class="city-preloader">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" xml:space="preserve">
    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
  </div>
`.trim();

const getCities = (city, block) => {
    var _ajax = block.data('ajax');
    if (_ajax) _ajax.abort();

    _ajax = $.post('/ajax/get_cities.php', {str: city}, function(_e) {
        var locations = _e.locations.filter(l => l.ID);
        const countCities = locations.length;
        var citiesListBlock = block.find('[data-block=citiesList]');
        var locationItemTemplate = block.find('[data-template="location-item"]').html();
        var foundCityId = 0;
        if (countCities > 30) {
            locations = locations.slice(0, 3);
        }
        citiesListBlock.html('');
        for (var _i in locations) {
            var _one = locations[_i];
            var item = locationItemTemplate;
            var replace = {
                '{id}': _one['ID'],
                '{value}': _one['NAME_RU'],
                '{title}': _one['PATH'],
                '{description}': _one['PATH'],
            };
            for (var key in replace) {
                item = item.replace(key, replace[key]);
            }
            citiesListBlock.append(item);
            if (_one['NAME_RU'].toLowerCase() === city.toLowerCase()) {
                foundCityId = parseInt(_one['ID']);
            }
        }

        initCityClick(block);

        if (countCities > 30) {
            citiesListBlock.append(`<p class="info-message">Найдено более 30 населенных пунктов. Для уточнения поиска укажите в поле поиска регион.</p>`);
        } else {
            if (foundCityId > 0 && foundCityId !== window.cityId) {
                block.find('.location-item[data-id=' + foundCityId + ']').click()
            }
        }
    }, 'json');

    block.data('ajax', _ajax);
}

const debouncedGetCities = debounce(getCities);

function initSelectCity(_block) {
    $('.selectCityLink').text('Ваш регион: ' + window.cityName);
    $('.city-name').text(window.cityName);

    _block.find('input[name=cityName]').on('keyup', function(e) {
        var _city = $(this).val();
        if (_city.length >= 3) {
            var citiesListBlock = _block.find('[data-block=citiesList]');
            citiesListBlock.html(preloaderTemplate);

            debouncedGetCities(_city, _block);
        }
    });

    _block.find('input[name=cityName]').on('paste', function() {
        setTimeout(() => {
            $(this).trigger('keyup');
        }, 50)
    })

    _block.find('#selectCity').on('click', function() {
        var _cityId = _block.find('#cityTextId').val();
        if (!_cityId) _cityId = _block.find('#cityId').val();

        saveCity(_block, _cityId);

        return false;
    });

    initCityClick(_block);
}

function initCityClick(_block) {
    _block.find('.location-item').on('click', function() {
        var _cityId = $(this).data('id');

        $('[data-cart-screen3]').hide();
        if (
            window.JS_OBJ
            && window.JS_OBJ.deliveryTime
            && window.JS_OBJ.deliveryTime.length
            && $('#WRAP_ID_DELIVERY_ID_2').hasClass('active')
        ) {
            $('[data-cart-screen3]').show();
        }

        saveCity(_block, _cityId);

        return false;
    });
}

function saveCity(_block, _cityId) {
    var _ajax = _block.data('ajax');
    if (_ajax) _ajax.abort();
    _ajax = $.post('/ajax/select_city.php', {id: _cityId}, function(_e) {
        $('.ChooseCity .popup__close').trigger('click');

        window.cityName = _e['NAME_RU'];
        window.cityNameFull = _e['FULL_NAME'];
        window.cityId = _cityId;
        window.cityZip = _e['ZIP'];
        window.locationType = _e['TYPE_CODE'];

        $('.selectCityLink').text('Ваш регион: ' + window.cityName);
        $('[data-city-name]')
            .text(window.cityName)
            .data('location-id', _cityId);
        $('[data-city-name2] strong')
            .text(window.cityName)    

        //sendDDLEventCity();

        if (typeof saveOrderCity == 'function') {
            saveOrderCity();
        } else {
            BX.setCookie('changecity', 'Y', {
                path: '\\',
                expires: 3600
            });
            location.href = location.pathname;
        }

    }, 'json');
    _block.data('ajax', _ajax);
}
