/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([30,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateBirthDate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ValidateBirthDate = /*#__PURE__*/function () {
  function ValidateBirthDate(element) {
    _classCallCheck(this, ValidateBirthDate);

    this.elemWrapper = element;
    this.elemDay = element.find('.js-elem-day');
    this.selectedDay = '';
    this.elemMonth = element.find('.js-elem-month');
    this.selectedMonth = '';
    this.elemYear = element.find('.js-elem-year');
    this.selectedYear = '';
    this.isLeapYear = false;
    this.isDateError = false;
    this.errorMsg = '';
  }

  _createClass(ValidateBirthDate, [{
    key: "createEventListeners",
    value: function createEventListeners() {
      var _this = this;

      this.elemDay[0].addEventListener('change', this.dayChanged(_this));
      this.elemMonth[0].addEventListener('change', this.monthChanged(_this));
      this.elemYear[0].addEventListener('change', this.yearChanged(_this));
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.elemDay[0].removeEventListener('change', this.dayChanged);
      this.elemMonth[0].removeEventListener('change', this.monthChanged);
      this.elemYear[0].removeEventListener('change', this.yearChanged);
    }
  }, {
    key: "dayChanged",
    value: function dayChanged(_this) {
      return function curried_day(event) {
        _this.selectedDay = +event.target.value;

        _this.checkDayError();
      };
    }
  }, {
    key: "monthChanged",
    value: function monthChanged(_this) {
      return function curried_month(event) {
        _this.selectedMonth = +event.target.value;

        _this.checkDayError();
      };
    }
  }, {
    key: "yearChanged",
    value: function yearChanged(_this) {
      return function curried_year(event) {
        _this.selectedYear = +event.target.value;

        if (_this.selectedYear !== '') {
          _this.isLeapYear = !(_this.selectedYear % 4 || !(_this.selectedYear % 100) && _this.selectedYear % 400);
        } else {
          _this.isLeapYear = false;
        }

        _this.checkDayError();
      };
    }
  }, {
    key: "checkDayError",
    value: function checkDayError() {
      // сброс предыдущего значения
      this.isDateError = false;
      var day = this.selectedDay === 0 ? '' : this.selectedDay;
      var month = this.selectedMonth === 0 ? '' : this.selectedMonth;
      var year = this.selectedYear === 0 ? '' : this.selectedYear; // Ничего не выбрано - не ошибка

      if (day === '' && month === '' && year === '') {
        this.isDateError = false;
        this.toggleError();
        return;
      } // Хотя бы одно не выбрано - ошибка


      if (day === '' || month === '' || year === '') {
        this.isDateError = true;
        this.errorMsg = 'Дата заполненна не полностью';
        this.toggleError();
        return;
      } // Проверка числа в месяце с учётом високосного года (isLeapYear)


      switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
          if (day > 30) {
            this.isDateError = true;
          }

          break;

        case 2:
          if (this.isLeapYear && day > 29) {
            this.isDateError = true;
          } else if (!this.isLeapYear && day > 28) {
            this.isDateError = true;
          }

          break;

        default:
          this.isDateError = false;
      }

      this.errorMsg = 'Несуществующая дата';
      this.toggleError();
    }
  }, {
    key: "toggleError",
    value: function toggleError() {
      if (this.isDateError) {
        this.elemWrapper.closest('form').addClass('form-error');
        this.elemWrapper.children('.error').remove();
        this.elemWrapper.append('<label class="error">' + this.errorMsg + '</label>'); //
      } else {
        this.elemWrapper.closest('form').removeClass('form-error');
        this.elemWrapper.children('.error').remove();
      }
    }
  }]);

  return ValidateBirthDate;
}();



/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(65);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, global) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var choices_js_public_assets_scripts_choices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var choices_js_public_assets_scripts_choices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(choices_js_public_assets_scripts_choices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var js_image_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var js_image_zoom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_image_zoom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var lax_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lax_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_reg_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40);
/* harmony import */ var _scss_reg_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_reg_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_MegaMenu_MegaMenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(42);
/* harmony import */ var _components_ReviewBar_ReviewBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(43);
/* harmony import */ var _components_Footer_FooterAccordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(63);
/* harmony import */ var _components_CatalogScripts_CatalogScripts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64);
/* harmony import */ var _components_ValidateBirthDate_ValidateBirthDate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);

global.jQuery = $;
global.$ = $;





















var DaDataUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
var DaDataToken = 'f9145577bad35c7606cbdd84d012ff8ae653bc77'; //const DaDataToken = '77588db0dab104358f519589e9410db36211d73e';

var plyrVideo;
/**
 * String.prototype.trimEnd() polyfill
 * Adapted from polyfill.io
 */

if (!String.prototype.trimEnd) {
  String.prototype.trimEnd = function () {
    return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + '$', 'g'), '');
  };
}

$("[data-more-shades]").on("click", function () {
  $("[data-more-shades]").toggleClass('closed');
  $(".js-shadelist-carousel").toggleClass('collapsed');
}); // sliders

$(window).on('load', function () {
  commentHeightCalculation();
  $('[data-slick]').each(function () {
    initSlickSlider($(this));
  });
});

window.initSlickSlider = function (slider) {
  var data = $.parseJSON(slider.attr('data-slick'));
  var breakPoint = parseInt(slider.attr('data-br')) || 0;
  var max = slider.attr('data-max-res');
  var min = slider.attr('data-min-res');
  var ww = $(window).width();
  slider.on('init', function (event, slick) {
    initSlickDots();
  });

  if (breakPoint > 0) {
    if (max) {
      if (ww < breakPoint) {
        slider.slick(data);
      }
    }

    if (min) {
      if (ww >= breakPoint) {
        slider.slick(data);
      }
    }
  } else {
    if (!max) {
      slider.on('init', function (event, slick, currentSlide, nextSlide) {
        slider.find(".slick-active").addClass("caption-in");
      });
      slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        slider.find('.slick-slide').removeClass("caption-in");
        slider.find(".slick-slide").eq(nextSlide).addClass("caption-in");
      });
      slider.slick(data);
    } else {
      if (slider.hasClass('js-shadelist-carousel')) {
        if (ww < 768) {
          slider.slick(data);
        }
      }
    }
  }
};

function initSlickDots() {
  $('.js-product-images').each(function () {
    var product = $(this);
    var item = product.find('.ProductImages__Item');
    var dots = product.find('.slick-dots li');
    item.each(function () {
      var el = $(this);
      var img = el.attr('data-img-url');
      var index = el.parents('.slick-slide').index();
      dots.eq(index).find('button').append('<img src="' + img + '" alt="">'); // el.find('[data-zoom-img]').append('<img role="presentation" alt="" src="' + el.find('[data-zoom-img]').attr('data-zoom-img') + '" class="zoomImg" style="position: absolute; top: 0; left: 0; opacity: 0; border: none; max-width: none; max-height: none; width: 900px; height: 900px;">');
    });
  });
}

function commentHeightCalculation() {
  var comment = $('.CarouselReviews__Box section p');
  var btnMore = "<button class=\"btn-more hide\" data-btn-more>\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435</button>";
  var ww = $(window).width();
  if (!(comment === null || comment === void 0 ? void 0 : comment.length)) return false;

  if (ww > 959) {
    comment.each(function () {
      var blockHeight = $(this).height();

      if (blockHeight > 121) {
        var el = $(this);
        var section = el.parent();
        el.addClass('hide');
        section.addClass('free');
        section.append(btnMore);
        var btn = section.find($('[data-btn-more]'));
        showAllComment(btn);
        setTimeout(function () {
          collapseComment();
        }, 1500);
      }
    });
  } else if (ww < 959) {
    setTimeout(function () {
      comment.each(function () {
        var blockHeight = $(this).height();

        if (blockHeight > 70) {
          var el = $(this);
          var section = el.parent();
          el.addClass('hide');
          section.addClass('free');
          section.append(btnMore);
          var btn = section.find($('[data-btn-more]'));
          showAllComment(btn);
          collapseComment();
        }
      });
    }, 1500);
  }

  function showAllComment(btn) {
    btn.on('click', function () {
      var el = $(this);

      if (el.hasClass('hide')) {
        el.parent().find('p').removeClass('hide');
        el.addClass('show');
        el.removeClass('hide');
        el.text('Свернуть');
      } else {
        el.parent().find('p').addClass('hide');
        el.addClass('hide');
        el.removeClass('show');
        el.text('Показать больше');
      }
    });
  }

  function collapseComment() {
    $('.Carousel--Reviews button.slick-arrow').on('click', function () {
      var btnMore = $('.CarouselReviews__Box section .btn-more');
      var comment = $('.CarouselReviews__Box section p');
      btnMore.removeClass('show');
      btnMore.addClass('hide');
      btnMore.text('Показать больше');
      comment.addClass('hide');
    });
  }
}

$('.Carousel--Reviews').on('init', function () {
  $(this).css({
    visibility: ''
  });
});

function legendPassword(value, minValue) {
  return value.length >= minValue;
}

$(document).ready(function () {
  // adds SVG External Content support to all browsers
  svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()(); // Polyfill object-fit/object-position on <img>

  object_fit_images__WEBPACK_IMPORTED_MODULE_2___default()();
  var galleryImages = [{
    level: '9533',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hf9/h7c/9675513266206/KM0010202200744principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hb8/h80/9675513135134/KM0010202200744principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h35/hcf/9675512938526/KM0010202200744principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hca/h83/9675513069598/KM0010202200744principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h8b/h65/9675513921566/KM0010202200744secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h9a/h6b/9675513790494/KM0010202200744secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h6c/h6f/9675513659422/KM0010202200744secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h5b/h6c/9675513724958/KM0010202200744secondario_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "",
      "k-thumbnail": "",
      "k-product": "",
      "k-product-retina": ""
    }, {
      "k-zoom": "",
      "k-thumbnail": "",
      "k-product": "",
      "k-product-retina": ""
    }, {
      "k-zoom": "",
      "k-thumbnail": "",
      "k-product": "",
      "k-product-retina": ""
    }]
  }, {
    level: '727',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h31/hda/11112919007262/KM000000117010Bprincipale_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h43/hd1/11112918679582/KM000000117010Bprincipale_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h1c/h5d/11112917368862/KM000000117010Bprincipale_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hee/hcd/11112918581278/KM000000117010Bprincipale_608Wx608H#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h53/h6f/11112915599390/KM000000117010Bsecondario_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h67/h76/11112915370014/KM000000117010Bsecondario_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hf9/h7d/11112915107870/KM000000117010Bsecondario_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h29/h77/11112915304478/KM000000117010Bsecondario_608Wx608H#k-product-retina"
    }]
  }, {
    level: '570',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hff/h51/11112933261342/KM000000117011Bprincipale_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h9b/h11/11112932409374/KM000000117011Bprincipale_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h41/h81/11112931295262/KM000000117011Bprincipale_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h3d/h6a/11112931917854/KM000000117011Bprincipale_608Wx608H#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hb5/h06/11112929132574/KM000000117011Bsecondario_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h88/h55/11112928903198/KM000000117011Bsecondario_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hc0/h5f/11112928608286/KM000000117011Bsecondario_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h58/h5c/11112928706590/KM000000117011Bsecondario_608Wx608H#k-product-retina"
    }]
  }, {
    level: '252',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/he6/h17/11112924119070/KM000000117012Bprincipale_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hf7/h65/11112923955230/KM000000117012Bprincipale_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hfe/h79/11112923398174/KM000000117012Bprincipale_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h1f/h6d/11112923725854/KM000000117012Bprincipale_608Wx608H#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hd1/hb5/11112921497630/KM000000117012Bsecondario_900Wx900H#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/haa/hae/11112921268254/KM000000117012Bsecondario_60Wx60H#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hec/ha7/11112921071646/KM000000117012Bsecondario_390Wx390H#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hfb/had/11112921202718/KM000000117012Bsecondario_608Wx608H#k-product-retina"
    }]
  }, {
    level: '28579',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h76/h4f/9675515035678/KM0010202200144principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h0b/h04/9675514904606/KM0010202200144principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hc4/h02/9675514707998/KM0010202200144principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hfa/h00/9675514839070/KM0010202200144principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h45/hc3/9675516313630/KM0010202200144secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h36/hbd/9675516182558/KM0010202200144secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h77/hb9/9675516051486/KM0010202200144secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h75/hbc/9675516117022/KM0010202200144secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '9368',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h15/hd5/9675504680990/KM0010202200244principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/he8/hd8/9675504549918/KM0010202200244principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/ha4/hdf/9675504353310/KM0010202200244principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/he5/hdb/9675504484382/KM0010202200244principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h92/hc0/9675503632414/KM0010202200244secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hd3/hbc/9675503501342/KM0010202200244secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hc4/hb6/9675503370270/KM0010202200244secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hc1/hb9/9675503435806/KM0010202200244secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '353',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h75/h0f/9675506253854/KM0010202200344principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h34/h13/9675506122782/KM0010202200344principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hbf/h67/9675505795102/KM0010202200344principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h45/h16/9675506057246/KM0010202200344principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hb9/h56/9675507138590/KM0010202200344secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h50/h08/9675506941982/KM0010202200344secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h91/h04/9675506810910/KM0010202200344secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h3f/h05/9675506876446/KM0010202200344secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '155',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hd6/h13/9675522342942/KM0010202200444principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h95/h17/9675522211870/KM0010202200444principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h22/h69/9675521949726/KM0010202200444principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hfd/h1a/9675522113566/KM0010202200444principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h5b/h4f/9675523162142/KM0010202200444secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hdf/h00/9675522965534/KM0010202200444secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h37/h03/9675522801694/KM0010202200444secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h88/h02/9675522867230/KM0010202200444secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '52',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h95/hee/9675520114718/KM0010202200544principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hea/h15/9675519983646/KM0010202200544principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h1a/h0f/9675519787038/KM0010202200544principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h29/h15/9675519918110/KM0010202200544principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h75/hd9/9675520770078/KM0010202200544secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h47/hdd/9675520639006/KM0010202200544secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h07/he1/9675520507934/KM0010202200544secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h46/he0/9675520573470/KM0010202200544secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '88',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/haf/hd1/9675508645918/KM0010202200644principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hf0/hcd/9675508514846/KM0010202200644principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h20/hc7/9675508318238/KM0010202200644principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hdf/hca/9675508449310/KM0010202200644principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h35/hcf/9675509301278/KM0010202200644secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h44/hd5/9675509170206/KM0010202200644secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h16/hd9/9675509039134/KM0010202200644secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h05/hd6/9675509104670/KM0010202200644secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '1',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h9d/h5d/9675510972446/KM0010202200844principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hde/h59/9675510841374/KM0010202200844principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/ha5/h4f/9675510546462/KM0010202200844principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hcc/h56/9675510775838/KM0010202200844principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/ha4/hbc/9675511627806/KM0010202200844secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h95/hb6/9675511496734/KM0010202200844secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hd6/hb2/9675511365662/KM0010202200844secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/he7/hb5/9675511431198/KM0010202200844secondario_608Wx608H.jpg#k-product-retina"
    }]
  }, {
    level: '21',
    images: [{
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h9d/h0f/9675501731870/KM0010202200944principale_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h5c/h13/9675501600798/KM0010202200944principale_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h2c/h1a/9675501404190/KM0010202200944principale_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h6d/h16/9675501535262/KM0010202200944principale_608Wx608H.jpg#k-product-retina"
    }, {
      "k-zoom": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h2b/h50/9675502452766/KM0010202200944secondario_900Wx900H.jpg#k-zoom",
      "k-thumbnail": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h5b/h49/9675502256158/KM0010202200944secondario_60Wx60H.jpg#k-thumbnail",
      "k-product": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h9b/h45/9675502125086/KM0010202200944secondario_390Wx390H.jpg#k-product",
      "k-product-retina": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/h5c/h46/9675502190622/KM0010202200944secondario_608Wx608H.jpg#k-product-retina"
    }]
  }];
  $('.js-product-images').on('afterChange', function () {
    resetImageZoom('imageZoom');
  }); //$('body').prepend('<div id="svg-icons" style="display: none;"></div>');
  //$('#svg-icons').load('../assets/images/required/sprite.svg');

  $('body').append('<div data-component="Backdrop" class="GlobalBackdrop" data-boilerplate-active="true"></div>'); // lax animations

  window.onload = function () {
    lax_js__WEBPACK_IMPORTED_MODULE_8___default.a.setup(); // init

    var updateLax = function updateLax() {
      lax_js__WEBPACK_IMPORTED_MODULE_8___default.a.update(window.scrollY);
      window.requestAnimationFrame(updateLax);
    };

    window.requestAnimationFrame(updateLax);
  }; // open / close megamenu


  $('.js-megamenu-trigger, .js-megamenu-close').click(function () {
    var menu = $('#megamenu');
    var html = $('html');
    var header = $('header');
    header.toggleClass('z-index-up');
    menu.toggleClass('open');
    html.toggleClass('menu-open');
    menu.attr('data-sub-opened', 'false');
  }); // open submenu

  $('[data-submenu]').click(function (e) {
    var el = $(this);
    var menu = $('#megamenu');
    var menuItem = el.attr('data-submenu');
    var subMenu = $("[data-subpanel=".concat(menuItem, "]"));
    menu.attr('data-sub-opened', 'true');
    $('[data-subpanel]').attr('visually-hidden', 'true');
    subMenu.removeAttr('visually-hidden');
    e.preventDefault();
  }); // Search

  var searchLayer = $('.js-search-layer');
  var searchInput = $('.js-search-input');
  var searchLoupe = $('.js-search-trigger');
  var searchForm = $('.js-form-input');

  function showSearchPopup(element) {
    $('body').addClass('search-open');
    $.magnificPopup.open({
      items: {
        src: '#popup-search',
        type: 'inline'
      },
      alignTop: true,
      midClick: true,
      closeMarkup: '<button title="%title%" type="button" class="vex-close mfp-close popup__close"></button>',
      removalDelay: 500,
      overflowY: 'hidden',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = 'mfp-zoom-in vex SearchLayer js-search-layer';
          $('html').addClass('vex-open');
        },
        open: function open() {
          searchLayer.find('.vex-content').css({
            'top': '143px'
          });
          searchLayer.removeAttr('tabindex');
          setTimeout(function () {
            return $('#popup-search .js-search-input').focus();
          }, 100);
        },
        close: function close() {
          $('html').removeClass('vex-open');
          $('body').removeClass('search-open');
          element.focus();
        }
      }
    });
  }

  searchLoupe.on('click', function (ev) {
    ev.preventDefault();

    var _this = $(this);

    var searchQuery = _this.val();

    var isPopup = _this.closest('#popup-search').length > 0;

    if (!isPopup // && (searchQuery.length > 2)
    ) {
        showSearchPopup($(this));
        $.get('/ajax/search.php?ajax_reload=Y&q=' + searchQuery).done(function (data) {
          $('.js-search-content').html(data);
        });
      }
  });
  var searchAction = false;
  searchForm.on('submit', function (evt) {
    if ($(this).find('.js-search-input').val().trim().length < 3) {
      evt.preventDefault();
    }
  });
  searchInput.on('input', function () {
    if (searchAction) {
      clearTimeout(searchAction);
      searchAction = false;
    }

    var _this = $(this);

    var searchQuery = _this.val();

    var isPopup = _this.closest('#popup-search').length > 0;
    searchInput.val(searchQuery);

    if (searchQuery.length > 2) {
      searchAction = setTimeout(function () {
        $.get('/ajax/search.php?ajax_reload=Y&q=' + searchQuery).done(function (data) {
          $('.js-search-content').html(data);

          if (!isPopup) {
            showSearchPopup($(this));
          }
        });
      }, 500);
    } else {
      clearTimeout(searchAction);
      searchAction = false; // $.magnificPopup.close();
    }
  });
  $('[data-close-submenu]').click(function () {
    var menu = $('#megamenu');
    menu.attr('data-sub-opened', 'false');
    $('[data-subpanel]').attr('visually-hidden', 'true');
  }); // open modal

  var popup = $('[data-popup]');
  popup.each(function () {
    if (popup.data('popup') === 'select-time-popup') {
      return true;
    }

    initPopup($(this));
  });
  $('.js-accordion-trigger').click(function () {
    var el = $(this);
    el.parent().toggleClass('is-visible');
  });
  var input = $('[type="tel"]');
  input.each(function () {
    var el = $(this);
    var id = el.attr('id');
    var input = document.querySelector("#" + id);
    intl_tel_input__WEBPACK_IMPORTED_MODULE_4___default()(input, {
      separateDialCode: true,
      initialCountry: 'ru',
      onlyCountries: ['ru']
    });
  });
  var select = $('.CustomSelect select');
  select.each(function () {
    var el = $(this);
    var id = el.attr('id');
    var element = document.querySelector("#" + id);
    var choices = new choices_js_public_assets_scripts_choices__WEBPACK_IMPORTED_MODULE_5___default.a(element, {
      classNames: {
        containerOuter: "choices",
        containerInner: "choices__inner",
        input: "choices__input",
        inputCloned: "choices__input--cloned",
        list: "choices__list",
        listItems: "choices__list--multiple",
        listSingle: "choices__list--single",
        listDropdown: "choices__list--dropdown",
        item: "choices__item",
        itemSelectable: "choices__item--selectable",
        itemDisabled: "choices__item--disabled",
        itemChoice: "choices__item--choice",
        placeholder: "choices__placeholder",
        group: "choices__group",
        groupHeading: "choices__heading",
        button: "choices__button",
        activeState: "is-active",
        focusState: "is-focused",
        openState: "is-open",
        disabledState: "is-disabled",
        highlightedState: "is-highlighted",
        hiddenState: "is-hidden",
        flippedState: "is-flipped",
        loadingState: "is-loading",
        noResults: "has-no-results",
        noChoices: "has-no-choices"
      }
    });
  });
  $('[data-collapse-handler]').click(function () {
    var el = $(this);
    var content = el.next();
    el.toggleClass('not-collapsed');
    el.toggleClass('collapsed');
    content.slideToggle(300); // content.toggleClass('collapsed not-collapsed');
    // content.toggleClass('collapsed');
  }); // Валидация

  $.validator.addMethod('phone', function (value) {
    return /\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(value);
  }, 'Пожалуйста, заполните поле');
  $.validator.addMethod('conf_new_password', function (value) {
    var pass = $('input[name="NEW_PASSWORD"]').val();
    return value == pass;
  }, 'Пароли не совпадают');
  $.validator.addMethod('password', function (value) {
    return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
    // && /[A-z]/.test(value) // has a lowercase letter
    // && /[A-Z]/.test(value)
    && legendPassword(value, 6) && /\d/.test(value);
  }, 'Пароль должен содержать не менее 6 символов и включать 1 цифру');
  $.validator.addMethod('regex', function (value, element, regexpr) {
    return regexpr.test(value);
  });
  $.validator.addMethod('complete', function (value, element) {
    return $(element).hasClass('complete');
  });
  $.validator.addMethod('found', function (value, element) {
    return $(element).hasClass('found');
  });
  $('[data-validate]').each(function () {
    var validate = $(this);

    if (validate.data('init') === 'Y') {
      return true;
    }

    validate.data('init', 'Y');
    var formValidate = validate.validate({
      errorElement: 'label',
      errorClass: 'error',
      submitHandler: function submitHandler(form) {
        var _form = $(form);

        var _formName = _form.attr('name');

        var _action = _form.attr('action');

        if (_formName === 'regform') {
          $(form).find('[name="REGISTER[LOGIN]"]').val($(form).find('[name="REGISTER[EMAIL]"]').val());

          var day = _form.find('[name="birthDateDay"] option:selected').val().trim();

          var month = _form.find('[name="birthMonthDay"] option:selected').val().trim();

          var year = _form.find('[name="birthYearDay"] option:selected').val().trim();

          if (day && month && year) {
            _form.find('[name="REGISTER[PERSONAL_BIRTHDAY]"]').val(day + '.' + month + '.' + year);
          }

          BX.showWait();

          if (_form.find('input[name="checkcode"]').val() === 'Y') {
            form.submit();
            return false;
          }

          $.post('/ajax/authcard.php', {
            sessid: BX.bitrix_sessid(),
            action: 'sendcode',
            name: _form.find('[name="REGISTER[NAME]"]').val(),
            last_name: _form.find('[name="REGISTER[LAST_NAME]"]').val(),
            phone: '+7 ' + _form.find('[name="REGISTER[PERSONAL_PHONE]"]').val(),
            email: _form.find('[name="REGISTER[EMAIL]"]').val()
          }, function (response) {
            BX.closeWait();

            if (response['RESULT'] === 'ERROR') {
              if (response['MESSAGE'] !== 'spam') {
                if (!response['MESSAGE']) {
                  response['MESSAGE'] = 'К сожалению, произошла ошибка. Повторите попытку позже.';
                }

                if (response['TYPE'] === "emailError") {
                  openModal('duplicateUser');
                } else {
                  $('#errorMessage').find('[data-error-text]').text(response['MESSAGE']);
                  openModal('errorMessage');
                }
              } else {
                var validateErrors = {};
                validateErrors['REGISTER[' + response['FIELD'] + ']'] = 'Зарегистрирована попытка нечестной регистрации';
                formValidate.showErrors(validateErrors);
              }
            } else {
              var regCardForm = $('#registerCardForm');

              var phone = _form.find('[name="REGISTER[PERSONAL_PHONE]"]').val();

              var email = _form.find('[name="REGISTER[EMAIL]"]').val();

              regCardForm.find('.check-phone').html(phone);
              regCardForm.find('.check-email').html(email);
              openModal('registerCard');
            }
          }, 'json');
          return false;
        } else if (_formName === 'register-card') {
          BX.showWait();
          $.ajax({
            type: 'POST',
            url: _action,
            data: _form.serializeArray(),
            dataType: 'json',
            success: function success(response) {
              BX.closeWait();
              var validateErrors = {};
              var error = false;

              if (!response.CHECK.phone) {
                error = true;
                validateErrors['phone_code'] = 'Неверный код подтверждения';
              }

              if (!response.CHECK.email) {
                error = true;
                validateErrors['email_code'] = 'Неверный код подтверждения';
              }

              formValidate.showErrors(validateErrors);

              if (!error) {
                var regform = $('[name="regform"]');
                regform.append('<input type="hidden" name="checkcode" value="Y">');
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "DlEvent",
                  eventCategory: "kiko",
                  eventAction: "registration",
                  eventLabel: "success"
                });

                if (regform.find('input[name="reg_card_check"]:checked').length && response['CARD_NUMBER']) {
                  $('#registerCardLink').find('[data-card-number]').text('№' + response['CARD_NUMBER']);
                  openModal('registerCardLink');
                  $('#registerCardLink .popup__close').off('click').on('click', function () {
                    $('[data-component="Backdrop"]').addClass('show');
                    $('[name="regform"]').submit();
                  });
                } else {
                  $.magnificPopup.close();
                  regform.submit();
                }
              }
            }
          });
          return false;
        } else if (_formName === 'register-card-link') {
          BX.showWait();
          $.ajax({
            type: 'POST',
            url: _action,
            data: _form.serializeArray(),
            dataType: 'json',
            success: function success() {
              BX.closeWait();
              $.magnificPopup.close();
              $('[name="regform"]').submit();
            }
          });
          return false;
        } else if (_formName === 'ORDER_FORM') {
          if (!checkAddErrors()) {
            return false;
          }

          if ($('#WRAP_ID_DELIVERY_ID_15').hasClass('active') && $('.delivery-place-select').hasClass('none')) {
            return false;
          }

          if (window.isStartAjaxOrderUpdate) {
            return false;
          }

          window.orderProcess = true;
          blocksShow();
          sendForm();
          return false;
          /*BX.showWait();
           let popupConfirm = $('#order_confirm');
          let formConfirm = popupConfirm.find('form[name="ORDER_CONFIRM"]');
           formConfirm.find('input[name="phone"]').val(
              _form.find('[data-code="PHONE"] input').val()
          );
           formConfirm.find('input[name="action"]').val('send');
          formConfirm.find('input[name="code"]').val('');
           popupConfirm.find('[data-confirm-order-init-success]').show();
          popupConfirm.find('[data-confirm-order-init-error]').hide();
           $.ajax({
              type: 'POST',
              url: formConfirm.attr('action'),
              data: formConfirm.serializeArray(),
              dataType: 'json',
              success: function(data) {
                  BX.closeWait();
                   if (data.status !== 'ok') {
                      if (data.message) {
                          popupConfirm.find('[data-confirm-order-init-error-text]').text(data.message);
                      }
                       popupConfirm.find('[data-confirm-order-init-success]').hide();
                      popupConfirm.find('[data-confirm-order-init-error]').show();
                  }
                   $.magnificPopup.open({
                      items: {
                          src: '#order_confirm',
                          type: 'inline'
                      },
                  });
              }
          });
           return false;*/
        } else if (_formName === 'ORDER_CONFIRM') {
          BX.showWait();
          var popupConfirm = $('#order_confirm');
          var formConfirm = popupConfirm.find('form[name="ORDER_CONFIRM"]');
          formConfirm.find('input[name="action"]').val('check');
          popupConfirm.find('[data-confirm-order-init-success]').show();
          popupConfirm.find('[data-confirm-order-init-error]').hide();
          popupConfirm.find('[data-confirm-order-error-text]').hide();
          $.ajax({
            type: 'POST',
            url: formConfirm.attr('action'),
            data: formConfirm.serializeArray(),
            dataType: 'json',
            success: function success(data) {
              BX.closeWait();

              if (data.status === 'ok') {
                $.magnificPopup.close();
                window.orderProcess = true;
                blocksShow();
                sendForm();
              } else if (data.message) {
                formValidate.showErrors({
                  'code': data.message
                });
              } else {
                popupConfirm.find('[data-confirm-order-init-success]').hide();
                popupConfirm.find('[data-confirm-order-init-error]').show();
              }
            }
          });
          return false;
        } else if (_formName === 'POPUP_REVIEW_FORM') {
          BX.showWait();
          var query = {
            c: 'jamilco:reviews',
            action: 'add',
            mode: 'class'
          };
          $.ajax({
            url: '/bitrix/services/main/ajax.php?' + $.param(query, true),
            type: 'POST',
            data: _form.serializeArray(),
            dataType: 'json',
            success: function success(response) {
              var $container = _form.closest('#popup-review');

              if (response['status'] === 'success' && response['data']['success']) {
                $container.find('.Reviews__Write__Message').html(response['data']['message']).removeClass('hidden');
                $container.find('#reviewPopupForm').addClass('hidden');
                $container.find('.Reviews__Write__Close').addClass('hidden');
              } else {
                if (response['data']['errors'] !== null) {
                  _form.closest('#popup-review').find('.Reviews__Write__Message').removeClass('hidden').html(response['data']['errors'].join('<br>'));
                }
              }

              BX.closeWait();
            },
            error: function error() {
              BX.closeWait();
            }
          });
          return false;
        } else if (_form.data('disable-submit') !== false) {
          form.submit();
        }

        return false;
      },
      invalidHandler: function invalidHandler(event, validator) {
        var errors = validator.numberOfInvalids();

        if (errors) {
          var $firsError = $(validator.errorList[0].element),
              firsErrorOffset = $firsError.offset().top;

          if ($firsError.attr('type') === 'radio') {
            $('html, body').animate({
              scrollTop: firsErrorOffset - 79 - 55
            }, 500);
          } else {
            $('html, body').animate({
              scrollTop: firsErrorOffset - 79 - 10
            }, 500);
          }
        }

        event.preventDefault();
      },
      rules: {
        'ORDER_PROP_23': {
          complete: true,
          minlength: 3
        },
        'ORDER_PROP_24': {
          complete: true,
          found: true
        }
      },
      messages: {
        'ORDER_PROP_23': {
          complete: 'Пожалуйста, заполните поле'
        },
        'ORDER_PROP_24': {
          complete: 'Пожалуйста, заполните поле',
          found: 'Дом не найден - проверьте адрес'
        }
      }
    });
    validate.find('input').bind('keyup blur click', function () {
      if (validate.attr('id') === 'ORDER_FORM' || validate.attr('id') === 'reviewForm' || validate.hasClass('js-enabled-submit')) {
        return;
      }

      if (validate.validate().checkForm()) {
        validate.find('button').prop('disabled', false);
      } else {
        validate.find('button').prop('disabled', true);
      }
    });
    validate.find('textarea').bind('keyup blur click', function () {
      if (validate.attr('id') === 'ORDER_FORM' || validate.attr('id') === 'reviewForm' || validate.hasClass('js-enabled-submit')) {
        return;
      }

      if (validate.validate().checkForm()) {
        validate.find('button').prop('disabled', false);
      } else {
        validate.find('button').prop('disabled', true);
      }
    });
  }); // Модификация classRules

  $.validator.addClassRules = function (className, rules) {
    if (className.constructor === String) {
      var obj = {};
      obj[className] = rules;
      className = obj;
    }

    $.each(className, function (n, r) {
      $("." + n).each(function (i, e) {
        var self = $(e);
        self.rules('add', r);
      });
    });
  }; // Добавление правил на классы


  $.validator.addClassRules({
    'js-valid-name': {
      required: true,
      regex: /^[а-яёА-ЯЁa-zA-Z -]+$/,
      normalizer: function normalizer(value) {
        return value.trimEnd();
      },
      messages: {
        required: 'Пожалуйста, заполните поле',
        regex: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-second-name': {
      required: true,
      regex: /^[а-яёА-ЯЁa-zA-Z -]+$/,
      normalizer: function normalizer(value) {
        return value.trimEnd();
      },
      messages: {
        required: 'Пожалуйста, заполните поле',
        regex: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-patronymic': {
      required: true,
      regex: /^[а-яёА-ЯЁa-zA-Z]+$/,
      normalizer: function normalizer(value) {
        return $.trim(value);
      },
      messages: {
        required: 'Пожалуйста, заполните поле',
        regex: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-phone': {
      required: true,
      phone: true,
      messages: {
        required: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-email': {
      required: true,
      email: true,
      normalizer: function normalizer(value) {
        return $.trim(value);
      },
      messages: {
        required: 'Пожалуйста, заполните поле',
        email: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-pass': {
      required: true,
      password: true,
      messages: {
        required: 'Пожалуйста, заполните поле'
      }
    },
    'js-valid-pass_confirm': {
      required: true,
      equalTo: ".js-valid-pass",
      messages: {
        equalTo: "Пароли не совпадают"
      }
    }
  });
  $('input').on('keyup', function () {
    var el = $(this);

    if (el.val().length > 0) {
      el.closest('.form-group').addClass('floatl--focused');
    } else {
      el.closest('.form-group').removeClass('floatl--focused');
    }
  });
  $('input').on('keyup', function () {
    var el = $(this);
    setTimeout(function () {
      if (el.attr('id') !== 'cardName' && el.attr('id') !== 'checkCode' && el.attr('id') !== 'promo') {
        if (el.val().trim().length > 0) {
          if (!el.hasClass('error')) {
            el.closest('.form-group').addClass('floatl--active');
            el.closest('.form-group').removeClass('floatl--focused');
          } else {
            el.closest('.form-group').removeClass('floatl--active');
            el.closest('.form-group').addClass('floatl--focused');
          }
        } else {
          el.closest('.form-group').removeClass('floatl--active');
          el.closest('.form-group').removeClass('floatl--focused');
        }
      } else {
        if (el.val().trim().length > 0) {
          el.closest('.form-group').addClass('floatl--focused');
          el.closest('.form-group').removeClass('floatl--active');
        } else {
          el.closest('.form-group').removeClass('floatl--focused');
          el.closest('.form-group').removeClass('floatl--active');
        }
      }
    }, 100);
  });
  $(document).keypress(function (event) {
    var el = $(event.target);

    if (!el.hasClass('error')) {
      if (event.keyCode == 13) {
        if (el.hasClass('form-control') || el.hasClass('floatl__input')) {
          el.closest('.form-group').next().find('input').focus();
          event.preventDefault();
        }
      }
    }
  });
  var tel = document.querySelectorAll("input[type=tel]");
  inputmask__WEBPACK_IMPORTED_MODULE_3___default()({
    "mask": "(999) 999[-99][-99]",
    "clearMaskOnLostFocus": true,
    "placeholder": '',
    "showMaskOnHover": false,
    "showMaskOnFocus": true,
    "greedy": false
  }).mask(tel);
  inputmask__WEBPACK_IMPORTED_MODULE_3___default()({
    alias: "datetime",
    inputFormat: "dd.mm.yyyy"
  }).mask(document.querySelectorAll("input[data-date=Y]"));
  Object(tippy_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('[data-tippy-content]', {
    allowHTML: true,
    animateFill: true,
    animation: "shift-away",
    aria: "describedby",
    arrow: false,
    duration: [325, 275],
    followCursor: false,
    hideOnClick: true,
    inertia: true,
    maxWidth: 350,
    placement: "top",
    role: "tooltip",
    showOnCreate: false,
    sticky: false,
    theme: "dark",
    touch: true,
    trigger: "mouseenter focus",
    triggerTarget: null,
    zIndex: 9999
  });
  $(document).on('click', '[aria-pressed]', function () {
    var el = $(this);
    dataEl(el);
  });
  var windowScrollTop;
  $(document).on('click', '[data-open]', function () {
    windowScrollTop = window.scrollY;
    var el = $(this);
    var popup = el.parent().find('[data-target]');
    popup.attr('data-opened', true);
    $('body').addClass('mobile-fixed');
  });
  $(document).on('click', '[data-close]', function () {
    $('body').removeClass('mobile-fixed');
    var el = $(this);
    var popup = el.closest('[data-target]');
    popup.attr('data-opened', false);
    window.scrollTo(0, windowScrollTop);
  });

  function dataEl(el, elLast) {
    var popup = el.closest('[data-target]');
    var product = el.closest('[data-component="ProductBox"]');
    var imgSecondary = el.attr('data-secondary-image');
    var imgMain = el.attr('data-main-image');
    var url = el.attr('data-variant-url');
    var index = el.attr('data-index');
    var discount = el.attr('data-discount');
    var oldPrice = el.attr('data-old-price');
    var priceValue = el.attr('data-price-value');
    var price = el.attr('data-price');
    var code = el.attr('data-code');
    var available = el.attr('data-available');
    var scu = el.attr('data-scu');
    var img = el.children().attr('style');
    product.find('.ProductBox__Content .js-new-price').text(price); // скрыть кнопку "Купить", если товар недоступен

    product.find('.ProductBox__Content .js-addtocart').toggleClass('hidden', available === 'N');
    product.find('.ProductBox__Content .js-notify').toggleClass('hidden', available === 'Y');

    if (discount != undefined) {
      if (product.find('.ProductBox__Content .js-perc').length) {
        product.find('.ProductBox__Content .js-perc').text(discount);
      } else {
        product.find('.ProductBox__Content .js-price').prepend('<span class="Price__Discount js-perc"><strong>' + discount + '</strong></span>');
      }
    } else {
      product.find('.ProductBox__Content .js-perc').remove();
    }

    if (oldPrice != undefined) {
      if (product.find('.ProductBox__Content .js-old-price').length) {
        product.find('.ProductBox__Content .js-old-price').text(oldPrice);
      } else {
        product.find('.ProductBox__Content .js-price').append('<del class="Price__Old js-old-price">' + oldPrice + '</del>');
      }
    } else {
      product.find('.ProductBox__Content .js-old-price').remove();
    }

    product.find('[aria-pressed]').attr('aria-pressed', false);
    product.find('.js-pb-image1').attr('src', imgMain);
    product.find('.js-pb-image2').attr('src', imgSecondary);
    $.ajax({
      type: 'POST',
      url: '/ajax/getImages.php',
      data: {
        id: scu
      },
      dataType: 'json',
      success: function success(result) {
        if (result.status === 'ok') {
          var slider = product.find('.js-hover-card-slider');
          var sliderMobile = product.find('.js-preview-product-slider').find('.swiper-wrapper');
          var html = '';
          var htmlMobile = '';
          $.each(result.images, function (i, image) {
            html += '<li data-src-img="' + image.src + '" data-img-id="' + i + '"></li>';
            htmlMobile += '<div class="swiper-slide"><img src="' + image.src + '" alt=""></div>';
          });
          $(slider).html(html);
          $(sliderMobile).html(htmlMobile);

          if (sliderMobile[0].swiper) {
            sliderMobile[0].swiper.update();
          }
        }
      }
    });

    if (elLast) {
      elLast.children().attr('style', img);
      elLast.attr('data-secondary-image', imgSecondary);
      elLast.attr('data-main-image', imgMain);
      elLast.attr('data-variant-url', url);
      elLast.attr('data-index', index);
      elLast.attr('data-discount', discount);
      elLast.attr('data-old-price', oldPrice);
      elLast.attr('data-price-value', priceValue);
      elLast.attr('data-price', price);
      elLast.attr('data-code', code);
      elLast.attr('aria-pressed', true);
    } else {
      el.attr('aria-pressed', true);
    }

    popup.find('[data-close]').click();
  }
  /*$('[data-filters-open]').click(function() {
      $('html').attr('data-filters-open',true);
      let el = $(this);
      let top = el.closest('.js-filters-listing').offset().top - $('header').innerHeight();
       $('html, body').animate({
          scrollTop: top
      }, 500);
       $('[data-component="Backdrop"]').addClass('show');
  });
   $('.js-facets-layer .js-facets-toggle').click(function() {
      $('html').attr('data-filters-open',false);
      $('[data-component="Backdrop"]').removeClass('show');
  });
   $('.js-show-more').click(function(e) {
      let el = $(this);
      let less = el.attr('data-less-label');
      let show = el.attr('data-more-label');
      let parent = el.closest('.js-facets-layer');
       el.toggleClass('closed');
      parent.find('.js-facets-groups').toggleClass('collapsed');
       if (el.hasClass('closed')) {
          el.text(show);
      } else {
          el.text(less);
      }
       e.preventDefault();
  });
   $('.js-clear-all').click(function() {
      let el = $(this);
      let parent = el.closest('.js-facets-layer');
       parent.find('input').prop('checked', false)
  });
  */


  $('[data-component="Tabs"]').find('button[data-target-panel]').click(function () {
    var el = $(this);
    var parent = el.parent();
    var body = el.closest('[data-component="Tabs"]').find('.Tab__Body__Content');
    var index = el.index();
    parent.children().removeClass('active');
    body.removeClass('active fade');
    el.addClass('active');
    body.eq(index).addClass('active fade');
  });
  $('[data-component="Tabs"]').find('button[data-button-panel]').click(function (e) {
    var el = $(this);
    var body = el.closest('[data-component="Tabs"]');
    var id = el.attr('data-button-panel');
    el.toggleClass('active');
    body.find('#' + id).toggleClass('active');
    e.preventDefault();
  });
  $(window).resize(function () {
    $('.ProductInfo__Tab').find('[data-target-panel]').removeClass('active');
    $('.ProductInfo__Tab').find('[data-target-panel]').eq(0).addClass('active');
    $('.ProductInfo__Tab').find('[data-button-panel]').removeClass('active');
    $('.ProductInfo__Tab').find('[data-button-panel]').eq(0).addClass('active');
    $('.ProductInfo__Tab').find('[data-tab-panel]').removeClass('active fade');
    $('.ProductInfo__Tab').find('[data-tab-panel]').eq(0).addClass('active fade');
  }); // counter

  $('[data-component="Quantity"]').each(function () {
    var counter = $(this);
    var input = counter.find('input');
    var minus = counter.find('.Minus');
    var plus = counter.find('.Plus');
    var min = 1;
    var max = parseInt(input.attr('data-limit'));
    plus.click(function add() {
      var $input = input;
      var a = $input.val();

      if (a < max) {
        a++;
      } else {
        plus.attr("disabled", true);
      }

      minus.attr("disabled", !a);
      $input.val(a);
    });
    minus.attr("disabled", !input);
    minus.click(function minusButton() {
      var $input = input;
      var b = $input.val();

      if (b > min) {
        b--;
        $input.val(b);
      } else {
        minus.attr("disabled", true);
      }

      plus.attr("disabled", !b);
    });
    input.on('change keyup focus', function () {
      var _this2 = this;

      var removeLetters = $(this).val().replace(/[^0-9]/g, '');
      $(this).val(removeLetters);
      setTimeout(function () {
        if ($(_this2).val() > max) {
          $(_this2).val(max);
        }
      }, 1000);
    });
  });
  /** Catalog offer select */

  $(document).on('click', '.js-shade-dropdown, .js-basket-shade-dropdown', function () {
    var el = $(this);
    el.toggleClass('active');
    $('html').toggleClass('select-open');

    if (el.hasClass('active')) {
      el.attr('aria-expanded', true);
    } else {
      el.attr('aria-expanded', false);
    }
  });
  /** Catalog detail page */

  $(document).on('click', '.js-shadelist-carousel .js-shade', function () {
    var el = $(this);
    var value = el.attr('data-value');
    var span = el.children().attr('style');
    var name = el.attr('data-name');
    var items = $('.js-shadelist-carousel .js-shade');
    var dropdownBtn = $('.js-shade-dropdown .js-dropdown-trigger');
    var dropdownList = $('.js-shade-dropdown .js-dropdown-list');
    var slider = $('.js-product-images');
    var available = el.attr('data-available');
    var price = el.attr('data-price');
    var priceOld = el.attr('data-old-price');
    var discount = el.attr('data-discount');
    var offerId = parseInt(el.attr('data-scu'));
    dropdownBtn.attr('data-value', value);
    dropdownBtn.children('.js-shade-img').attr('style', span);
    dropdownBtn.children('.OptionText').text(name);
    dropdownList.find('.js-shade-dropdown-option').attr('data-selected', 'false');
    dropdownList.find('[data-value="' + value + '"]').attr('data-selected', 'true');
    items.attr('aria-pressed', 'false');
    el.attr('aria-pressed', 'true'); // скрыть кнопку "Купить", если товар недоступен

    $('.js-addtocart').toggleClass('hidden', available === 'N');
    $('.js-notify').toggleClass('hidden', available === 'Y'); // цены

    $('.js-new-price').html(price);
    $('.js-old-price').html(priceOld).toggleClass('hidden', priceOld.length === 0);
    $('.js-perc').toggleClass('hidden', discount.length === 0).find('strong').html(discount);
    $('.js-new-price-mob').html(price);
    $('.js-old-price-mob').html(priceOld).toggleClass('hidden', priceOld.length === 0);
    $('.js-perc-mob').toggleClass('hidden', discount.length === 0).html(discount);
    var images = JS_OBJ.OFFERS[offerId].MORE_PHOTO.FULL; //images[0] = el.data('main-image');
    //images[1] = el.data('secondary-image');

    for (var i = 0; i < images.length; i++) {
      var imageSrc = images[i];
      slider.find('.slick-slide').eq(i).find('[data-img-url]').attr('data-img-url', imageSrc);
      slider.find('.slick-slide').eq(i).find('[data-zoom-img]').attr('data-zoom-img', imageSrc);
      slider.find('.slick-slide').eq(i).find('meta[itemprop="image"]').attr('content', imageSrc);
      slider.find('.slick-slide').eq(i).find('.js-product-image').attr('data-original', imageSrc);
      slider.find('.slick-slide').eq(i).find('.js-product-image').attr('data-src', imageSrc);
      slider.find('.slick-slide').eq(i).find('.js-product-image').attr('src', imageSrc);
      slider.find('.slick-slide').eq(i).find('.js-product-image').next().attr('src', imageSrc);
      slider.find('.slick-dots li').eq(i).find('img').attr('src', imageSrc);
      resetImageZoom('imageZoom');
    }

    if (JS_OBJ && JS_OBJ.OFFERS && offerId && JS_OBJ.OFFERS[offerId]) {
      var actionsHtml = '';

      if (JS_OBJ.OFFERS[offerId].ACTIONS) {
        for (var key in JS_OBJ.OFFERS[offerId].ACTIONS) {
          if (JS_OBJ.OFFERS[offerId].ACTIONS.length > 1) {
            actionsHtml += '<a class="Tag Tag--hit" href="/promotions/' + JS_OBJ.OFFERS[offerId].ACTIONS[key].CODE + '/" data-label-code="hit" data-color="hit">' + JS_OBJ.OFFERS[offerId].ACTIONS[key].NAME + '</a>';
          } else if (JS_OBJ.OFFERS[offerId].ACTIONS.length) {
            actionsHtml += '<span class="Tag Tag--hit" data-label-code="hit" data-color="hit">' + JS_OBJ.OFFERS[offerId].ACTIONS[key].NAME + '</span>' + '<a href="/promotions/' + JS_OBJ.OFFERS[offerId].ACTIONS[key].CODE + '/" class="link">Подробнее об акции</a>';
          }
        }
      }

      $('[data-actions-list]').html(actionsHtml);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'view_item',
      'value': parseFloat(price),
      'items': [{
        'id': parseInt(el.data('scu')),
        'google_business_vertical': 'retail'
      }]
    });
    /*
    for (let i = 0; i < galleryImages.length; i++) {
        if (galleryImages[i].level == level) {
            let images = galleryImages[i].images;
             for (let j = 0; j < images.length; j++) {
                slider.find('.slick-slide').eq(j).find('[data-img-url]').attr('data-img-url', images[j]['k-thumbnail']);
                slider.find('.slick-slide').eq(j).find('[data-zoom-img]').attr('data-zoom-img', images[j]['k-zoom']);
                slider.find('.slick-slide').eq(j).find('meta[itemprop="image"]').attr('content', images[j]['k-zoom']);
                slider.find('.slick-slide').eq(j).find('.js-product-image').attr('data-original', images[j]['k-product-retina']);
                slider.find('.slick-slide').eq(j).find('.js-product-image').attr('data-src', images[j]['k-product-retina']);
                slider.find('.slick-slide').eq(j).find('.js-product-image').attr('src', images[j]['k-zoom']);
                slider.find('.slick-slide').eq(j).find('.js-product-image').next().attr('src', images[j]['k-zoom']);
                 slider.find('.slick-dots li').eq(j).find('img').attr('src', images[j]['k-thumbnail']);
                 resetImageZoom('imageZoom');
            }
        }
    } */
  });
  $(document).on('click', '.js-shade-dropdown .js-shade-dropdown-option', function () {
    var el = $(this);
    var value = el.attr('data-value');
    var cpu = value;

    if (el.is('[data-scu]')) {
      cpu = el.attr('data-scu');
    }

    var span = el.children().attr('style');
    var name = el.attr('data-name');
    var dropdownBtn = el.closest('.SelectShades').find('.js-dropdown-trigger');
    var dropdownList = el.closest('.SelectShades').find('.js-dropdown-list');
    dropdownBtn.attr('data-value', value);
    dropdownBtn.children('.js-shade-img').attr('style', span);
    dropdownBtn.children('.OptionText').text(name);
    dropdownList.find('.js-shade-dropdown-option').attr('data-selected', 'false');
    dropdownList.find('[data-value="' + value + '"]').attr('data-selected', 'true');
    $('.js-shadelist-carousel').find('.js-shade[data-value="' + value + '"]').trigger('click');
    el.closest('.js-productbar').find('.js-addtocart').attr('data-product-id', cpu);
  });
  $(document).on('click', '.js-basket-shade-dropdown .js-shade-dropdown-option', function () {
    var el = $(this);
    var value = el.attr('data-value');
    var span = el.children().attr('style');
    var name = el.attr('data-name');
    var dropdownBtn = el.closest('.SelectShades').find('.js-basket-shade-dropdown .js-dropdown-trigger');
    var dropdownList = el.closest('.SelectShades').find('.js-basket-shade-dropdown .js-dropdown-list');
    dropdownBtn.attr('data-value', value);
    dropdownBtn.children('.js-shade-img').attr('style', span);
    dropdownBtn.children('.OptionText').text(name);
    dropdownList.find('.js-shade-dropdown-option').attr('data-selected', 'false');
    dropdownList.find('[data-value="' + value + '"]').attr('data-selected', 'true');
  });
  $(document).on('click', '.js-shade', function () {
    var offerId = $(this).data('scu') || 0;
    var offerName = $(this).data('name') || '';
    var colorName = $(this).data('colorName') || '';
    var $productContainer = $(this).closest('.js-product-detail, .js-productbox');
    var giftQuantity = $(this).data('gift-qty') || 1;
    var giftRule = $(this).data('gift-rule') || '';

    if ($productContainer.length && offerId) {
      window.selectedOffer = $(this).attr('data-code');
      $productContainer.find('.js-addtocart').attr('data-product-id', offerId).data('product-id', offerId);
      $productContainer.find('.js-notify').attr('data-product-id', offerId).data('product-id', offerId);
      $productContainer.find('.js-notify').attr('data-article', offerName).data('article', offerName);
      $productContainer.find('.FindInStore__Action').attr('data-article', window.selectedOffer).data('article', window.selectedOffer);
      $productContainer.find('.js-notify').attr('data-color', colorName).data('color', colorName);
      $productContainer.find('[data-add-gift]').attr('data-product-id', offerId).data('product-id', offerId);
      $productContainer.find('[data-add-gift]').attr('data-gift-qty', giftQuantity).data('gift-qty', giftQuantity);
      $productContainer.find('[data-add-gift]').attr('data-gift-rule', giftRule).data('gift-rule', giftRule);

      if ($productContainer.hasClass('js-product-detail')) {
        var url = makeUrl(window.location.href, ['offer'], ['offer=' + window.selectedOffer]);
        history.pushState([], document.title, url);
      }
    }
  });

  function makeUrl(url) {
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var include = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var _url = url.split('?');

    var newStringParams = '';

    for (var j in include) {
      newStringParams += (newStringParams ? '&' : '') + include[j];
    }

    if (typeof _url[1] !== 'undefined') {
      var stringParams = _url[1].split('&');

      for (var i in stringParams) {
        var par = stringParams[i].split('=');
        var found = 0;

        for (var k in exclude) {
          if (par[0].indexOf(exclude[k]) !== -1) {
            found = 1;
            break;
          }
        }

        if (!found) newStringParams += (newStringParams ? '&' : '') + stringParams[i];
      }
    }

    return newStringParams ? _url[0] + '?' + newStringParams : url;
  }
  /** etc dropdown */


  $('.js-select-dropdown').click(function () {
    var el = $(this);
    el.toggleClass('active');
    el.parent().toggleClass('active');
    $('html').toggleClass('select-open');

    if (el.hasClass('active')) {
      el.attr('aria-expanded', true);
    } else {
      el.attr('aria-expanded', false);
    }
  });
  $('.js-select-dropdown').each(function () {
    var item = $(this).find('.js-dropdown-option');
    var button = $(this).find('.js-dropdown-trigger-text');
    var slider = $('.js-product-images');
    item.click(function () {
      var el = $(this);
      var text = el.children().first();
      item.removeClass('selected');
      el.addClass('selected');

      if (text.hasClass('ReviewIndicator')) {
        button.html('<div class="ReviewIndicator">' + text.html() + '</div>');
      }

      if (text.hasClass('uppercase')) {
        button.html('<span class="js-dropdown-trigger-text uppercase">' + text.html() + '</span>');
      }

      if (el.attr('data-value') == '') {
        button.html('<span class="js-dropdown-trigger-text ">' + el.text() + '</span>');
      }
    });
  }); // клик вне элемента

  $(document).mouseup(function (e) {
    var shadeDropdown = $('[data-component="ShadeDropdown"]');
    var selectDropdown = $('.js-select-dropdown');
    elClick(shadeDropdown, e);
    elClick(selectDropdown, e);
  });

  function elClick(el, e) {
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      // тут пишет что нужно сделать, если такое произошло (закрыть окно, добавить классы и т.д.)
      el.removeClass('active');
      el.attr('aria-expanded', false);
    }
  }
  /** Favorites add & remove */


  $(document).on('click', '[data-component="AddToWishlistAction"] button', function () {
    var button = $(this);
    var $body = $('body');
    var url = $(this).attr('data-url') || '/auth/';
    var backUrl = encodeURIComponent('/personal/favorites/');

    if (!$body.hasClass('wishlist-enabled')) {
      $('body').append('<div class="GlobalNotification js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-error  icon-alert   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave-err " role="presentation" height="120" width="120"><use xlink:href="#wave-err"><svg id="wave-err" viewBox="0 0 170 24"><title></title><path d="M85 24h85c-23 0-31.29-2.41-52-13C95.5-.5 85 0 85 0S74.5-.5 52 11C31.29 21.59 23 24 0 24z" fill="#f6cfcf"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon tip " role="presentation" height="20" width="20"><use xlink:href="#tip"><svg id="tip" viewBox="0 0 20 20"><title></title><path fill-rule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2.222a7.778 7.778 0 100 15.556 7.778 7.778 0 000-15.556zm.72 5.302v8.043H9.522V7.524h1.198zm.093-3.08v1.323H9.444V4.444h1.37z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft"><button aria-live="assertive" data-type="secondary" class="Button close">Отмена</button></div><div class="GlobalNotification__Text text-center"><div class="primary">Чтобы получить доступ к списку пожеланий, необходимо войти в систему или зарегистрироваться на сайте</div></div><div class="GlobalNotification__ButtonRight"><a class="Button " href="' + url + (backUrl ? '?backurl=' + backUrl : '') + '">Войти</a></div></div></div></div></div>');
      setTimeout(function () {
        $('.js-global-notification').addClass('show');
      }, 100);
    } else {
      var $data = button.closest('.Dropdown');

      if ($data.length === 0) {
        $data = button.closest('.rr-item__dropdown-wishlist');
      }

      var productId = $data.data('product-id');
      var productName = $data.data('product-name');
      var action = $data.data('action');
      var message = 'Вы добавили в избранное';

      if (action === 'del') {
        message = 'Вы удалили из избранного';
      }

      var data = {
        scu: productId,
        action: action,
        ajax: 'Y'
      };
      $.ajax({
        type: "GET",
        url: '/ajax/favorites.php',
        data: data
      }).done(function () {
        $('body').append('<div class="GlobalNotification js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-success  cart   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave " role="presentation" height="120" width="120"><use xlink:href="#wave"><svg id="wave" viewBox="0 0 176.43 24"><title></title><path d="M88.21 24h85c-23 0-31.29-2.41-52-13-22.5-11.5-33-11-33-11s-10.5-.5-33 11c-20.71 10.59-29 13-52 13z" fill="#e0e9d5" data-name="Layer 2"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon check-mark " role="presentation" height="20" width="20"><use xlink:href="#check-mark"><svg id="check-mark" viewBox="0 0 18 18"><title></title><path fill-rule="evenodd" d="M7.924 12.843l6.9-6.169a.497.497 0 000-.758l-.848-.759a.651.651 0 00-.849 0L7.5 10.187 4.873 7.84a.651.651 0 00-.849 0l-.848.759a.497.497 0 000 .758l3.9 3.487a.65.65 0 00.848 0z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft"><button aria-live="assertive" data-type="secondary" class="Button close">Ок</button></div><div class="GlobalNotification__Text text-center"><span data-qty="1"></span><div class="secondary">' + message + '</div><div class="primary">' + productName + '</div></div>' + (action == 'del' ? '' : '<div class="GlobalNotification__ButtonRight">') + (action === 'del' ? '' : '<a class="Button" href="/personal/favorites/">Перейти в избранное</a>') + (action === 'del' ? '' : '</div>') + '</div></div></div></div>');
        setTimeout(function () {
          $('.js-global-notification').addClass('show');

          if (action === 'del') {
            $data.closest('.ProductBox').addClass('hidden');
          }

          if (action === 'add' && typeof ym !== 'undefined') {
            ym(56642815, 'reachGoal', 'Addtowishlist');
          }

          if (action === 'add') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "DlEvent",
              eventCategory: "kiko",
              eventAction: "button_click",
              eventLabel: "add_to_favorite"
            });
            button.addClass('added');
          }
        }, 100);
      }, 'json');
    }
  });
  $(document).on('click', '[data-confirm-clear-favorites]', function () {
    $.ajax({
      type: "GET",
      url: '/ajax/favorites.php',
      data: {
        action: 'delAll'
      }
    }).done(function () {
      $.magnificPopup.close();
      $('.js-clear-favorites-btn').remove();
      $('.js-listing').empty();
      $('body').append('<div class="GlobalNotification js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-success  cart   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave " role="presentation" height="120" width="120"><use xlink:href="#wave"><svg id="wave" viewBox="0 0 176.43 24"><title></title><path d="M88.21 24h85c-23 0-31.29-2.41-52-13-22.5-11.5-33-11-33-11s-10.5-.5-33 11c-20.71 10.59-29 13-52 13z" fill="#e0e9d5" data-name="Layer 2"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon check-mark " role="presentation" height="20" width="20"><use xlink:href="#check-mark"><svg id="check-mark" viewBox="0 0 18 18"><title></title><path fill-rule="evenodd" d="M7.924 12.843l6.9-6.169a.497.497 0 000-.758l-.848-.759a.651.651 0 00-.849 0L7.5 10.187 4.873 7.84a.651.651 0 00-.849 0l-.848.759a.497.497 0 000 .758l3.9 3.487a.65.65 0 00.848 0z"></path></svg></use></svg></span><div class="inner inner--center"><div class="GlobalNotification__ButtonLeft"><button aria-live="assertive" data-type="secondary" class="Button close">Ок</button></div><div class="GlobalNotification__Text text-center"><span data-qty="1"></span><div class="secondary">' + 'Вы удалили все товары из избранного' + '</div></div></div></div></div></div>');
      setTimeout(function () {
        $('.js-global-notification').addClass('show');
      }, 100);
    }, 'json');
  });
  $('[data-component="RequireLogin"]').click(function () {
    var $body = $('body');
    var message = $(this).attr('data-primary-line');
    var action = $(this).attr('data-action') || 'default';
    var url = $(this).attr('data-url') || '/auth/';
    var backUrl = encodeURIComponent($(this).attr('data-back-url')) || '';

    if (!$body.hasClass(action + '-enabled')) {
      var html = '<div class="GlobalNotification js-global-notification" aria-live="assertive">';
      html += '<div class="mod-notification mod-notification-error icon-alert">';
      html += '<div class="container"><span class="GlobalNotification__Icon">';
      html += '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave-err" role="presentation" height="120" width="120">';
      html += '<use xlink:href="#wave-err"><svg id="wave-err" viewBox="0 0 170 24">';
      html += '<path d="M85 24h85c-23 0-31.29-2.41-52-13C95.5-.5 85 0 85 0S74.5-.5 52 11C31.29 21.59 23 24 0 24z" fill="#f6cfcf"></path></svg></use></svg>';
      html += '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon tip " role="presentation" height="20" width="20">';
      html += '<use xlink:href="#tip"><svg id="tip" viewBox="0 0 20 20">';
      html += '<path fill-rule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2.222a7.778 7.778 0 100 15.556 7.778 7.778 0 000-15.556zm.72 5.302v8.043H9.522V7.524h1.198zm.093-3.08v1.323H9.444V4.444h1.37z"></path>';
      html += '</svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft">';
      html += '<button aria-live="assertive" data-type="secondary" class="Button close">Отмена</button></div>';
      html += '<div class="GlobalNotification__Text text-center"><div class="primary">' + message + '</div></div>';
      html += '<div class="GlobalNotification__ButtonRight"><a class="Button " href="' + url + (backUrl ? '?backurl=' + backUrl : '') + '">Войти</a></div>';
      html += '</div></div></div></div>';
      $body.append(html);
      setTimeout(function () {
        $('.js-global-notification').addClass('show');
      }, 100);
    } else {
      if (action == 'review') {
        $('.Reviews__Write .Reviews__Write__Close').trigger('click'); // $(this).addClass('hidden');

        $('.Reviews__Write').removeClass('hidden');
        var top = $('.Reviews__Write').offset().top - 88 - 60;
        $('html, body').animate({
          scrollTop: top
        }, 500);
      }
    }
  });
  $('.js-close-review').on('click', function () {
    var btn = $('[data-component="RequireLogin"]');
    var action = btn.attr('data-action') || 'default';

    if (action == 'review') {
      if (!$(this).parent().hasClass('hidden')) {
        $(this).parent().addClass('hidden'); // btn.removeClass('hidden');
      }
    }
  });
  $(document).on('click', '.js-global-notification .Button.close', function () {
    var el = $(this);
    var parent = el.closest('.js-global-notification').removeClass('show');
    setTimeout(function () {
      parent.remove();
    }, 100);
  });
  $('[data-component="Show"]').children('button').click(function () {
    $(this).next().toggleClass('hide-element');
  });
  var productBar = $('[data-component="ProductBar"]');
  var currentScrollTop = 0; // Обычный скролл, шапка фиксируется ниже высоты vh

  function scroll() {
    var vh = $(window).height();
    currentScrollTop = $(window).scrollTop();
    var vh = $('.ProductInfo').offset().top;

    if (currentScrollTop > vh) {
      productBar.addClass('in');

      if ($('.js-bottom-bar').length > 0) {
        $('.js-bottom-bar').addClass('in');
      }
    } else {
      productBar.removeClass('in');

      if ($('.js-bottom-bar').length > 0) {
        $('.js-bottom-bar').removeClass('in');
      }
    }
  }

  $(window).scroll(function () {
    if (productBar.length) {
      scroll();
    }
  }); // $('.ReviewBar__Toggler').on('click', function() {
  //     $(this).closest('.ReviewBar').toggleClass('ReviewBar--opened');
  // });
  // $('[data-component="ProductBar"] .js-shade-dropdown-option').click(function() {
  //     $('html, body').animate({
  //         scrollTop: 0
  //     }, 500);
  // });

  /*$('[data-component="AddToCart"]').click(function() {
       let productName = $(this).data('product-name');
       $('body').append('<div class="GlobalNotification js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-success  cart   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave " role="presentation" height="120" width="120"><use xlink:href="#wave"><svg id="wave" viewBox="0 0 176.43 24"><title>wave</title><path d="M88.21 24h85c-23 0-31.29-2.41-52-13-22.5-11.5-33-11-33-11s-10.5-.5-33 11c-20.71 10.59-29 13-52 13z" fill="#e0e9d5" data-name="Layer 2"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon check-mark " role="presentation" height="20" width="20"><use xlink:href="#check-mark"><svg id="check-mark" viewBox="0 0 18 18"><title>check-mark</title><path fill-rule="evenodd" d="M7.924 12.843l6.9-6.169a.497.497 0 000-.758l-.848-.759a.651.651 0 00-.849 0L7.5 10.187 4.873 7.84a.651.651 0 00-.849 0l-.848.759a.497.497 0 000 .758l3.9 3.487a.65.65 0 00.848 0z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft"><button aria-live="assertive" data-type="secondary" class="Button close">Продолжить покупки</button></div><div class="GlobalNotification__Text text-center"><span data-qty="1"></span><div class="secondary">Вы добавили в корзину</div><div class="primary">' + productName + '</div></div><div class="GlobalNotification__ButtonRight"><a class="Button" href="/personal/cart/">Перейти в корзину</a></div></div></div></div></div>');
       setTimeout(() => {
          $('.js-global-notification').addClass('show');
      }, 500);
  });*/

  function createImageZoom() {
    $('[data-zoom-img]').each(function (e) {
      var el = $(this);
      var id = el.attr('id');
      var width = el.width();
      var options = {
        width: width,
        height: width,
        offset: {
          vertical: 0,
          horizontal: 10
        },
        zoomPosition: "original"
      };
      new js_image_zoom__WEBPACK_IMPORTED_MODULE_7___default.a(document.getElementById(id), options); // resetStyleZoom('imageZoom');
    });
  }

  function resetImageZoom(imageZoom) {
    $('.js-image-zoom__zoomed-area').remove();
    $('.js-image-zoom__zoomed-image').remove();

    if ($(window).width() > 767) {
      createImageZoom();
    }
  }

  function resetStyleZoom(imageZoom) {
    if ($(window).width() > 767) {
      var el = $('.js-zoom-img');
      el.removeAttr('style');
      resetImageZoom('imageZoom');
    }
  }

  setTimeout(function () {
    if ($(window).width() > 767) {
      createImageZoom();
    }
  }, 500);
  $(window).resize(function () {
    resetStyleZoom('imageZoom');
  });
  $('.js-minicart-catalyst').click(function () {
    var el = $(this);
    var cart = $('[data-component="MiniCart"]');
    var status = parseInt($('[data-cart-count]').text());
    $(".js-global-notification").removeClass('show');

    if ($(window).width() > 768) {
      cart.removeClass('force-hidden');
      $('html').addClass('minicart-open');
      setTimeout(function () {
        cart.addClass('open');
      }, 100);
    } else {
      if (status > 0) {
        window.location.href = '/personal/cart/';
      } else {
        cart.removeClass('force-hidden');
        $('html').addClass('minicart-open');
        setTimeout(function () {
          cart.addClass('open');
        }, 100);
      }
    }
  });
  $(document).on('click', '[data-button-minicart-close]', function () {
    $('#minicart').toggleClass('open');
    $('html').toggleClass('minicart-open');
  });
  $('[data-cart-title]').click(function () {
    $(this).toggleClass('open');
    $(this).parent().find('[data-cart-body]').slideToggle(300);
  });
  $('[data-tabs-head]').children().click(function () {
    var el = $(this);
    var body = el.closest('[data-tabs]').find('[data-tabs-body]');
    var index = el.index();
    el.parent().children().removeClass('active');
    el.addClass('active');
    body.children().removeClass('active');
    body.children().eq(index).addClass('active');
  });
  $('[data-component="Remove"]').click(function () {
    var el = $(this);
    var parent = el.closest('[data-remove-item]');
    parent.remove();
  });
  $(document).on('click', '.double-arrow-container', function () {
    var cartInfo = $('.Cart__Bottom-info');
    cartInfo.slideToggle(300);
    $(this).toggleClass('opened');
  });
  $(document).on('scroll', function () {
    var cartInfo = $('.Cart__Bottom-info');
    cartInfo.slideUp();
    $('.double-arrow-container').removeClass('opened');
  });
  $(document).on('click', function (evt) {
    var target = evt.target;
    var cardBottom = target.closest('.Cart__Bottom');

    if (!cardBottom) {
      $('.Cart__Bottom-info').slideUp();
      $('.double-arrow-container').removeClass('opened');
    }
  });

  if ($('[data-component="FoundationFinder"]').length) {
    var foundationFinderRequest = function foundationFinderRequest() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      $.extend(query, {
        c: 'jamilco:foundation.finder',
        mode: 'class'
      });
      $.extend(data, {
        'SITE_ID': 's1',
        params: $('[data-ff-params]').data('ff-params')
      });
      BX.showWait();
      $.ajax({
        url: '/bitrix/services/main/ajax.php?' + $.param(query, true),
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function success(response) {
          if (response.status === 'success') {
            $('[data-ff-container]').html(response.data);
            $('[data-mfp-src]').magnificPopup({
              type: 'inline',
              midClick: true
            });
            $('[data-slider]').slick({
              centerMode: true,
              slidesToShow: 2,
              arrows: false
            });
          }

          $.magnificPopup.close();
          BX.closeWait();
        }
      });
    };

    $(document).on('click', '[data-ff-button-start]', function (e) {
      e.preventDefault();
      foundationFinderRequest({
        action: 'start'
      });
    });
    $(document).on('click', '[data-ff-button-next]', function (e) {
      e.preventDefault();

      var _this = $(this);

      if (_this.hasClass('ff-button-filter--disabled')) {
        return;
      }

      foundationFinderRequest({
        action: 'next'
      }, {
        property: _this.data('ff-property'),
        value: _this.data('ff-value')
      });
    });
    $(document).on('click', '[data-ff-button-back]', function (e) {
      e.preventDefault();
      foundationFinderRequest({
        action: 'back'
      });
    });
    $(document).on('click', '.ff-button-filter--disabled', function (e) {
      var target = $(e.target).hasClass('ff-button-filter') ? $(e.target) : $(e.target).parents('button');
      $(target).find('.ff-tooltip').toggleClass('opened');
    });
    $(document).on('click', '[data-ff-button-detail]', function (e) {
      $('#detail-popup').find('a').attr('href', $(this).attr('href'));
    });
    $(document).on('click', '[data-ff-button-offer]', function (e) {
      e.preventDefault();

      var _this = $(this);

      var detailNode = _this.closest('.ff-product-card').find('.ff-product-card-details');

      var detailLinkNode = detailNode.find('[data-ff-button-detail]');
      detailLinkNode.attr('href', detailLinkNode.data('product-link') + '?offer=' + _this.data('offer-code'));
      detailNode.find('.ReviewIndicator').attr('href', detailLinkNode.attr('href') + '#reviews');
      detailNode.find('.ProductList__MainImg').attr('src', _this.data('offer-img'));
      detailNode.find('.Shade__Img').attr('style', 'background-image: url(' + _this.data('offer-color') + ');');
      detailNode.find('.Shade__Description').text(_this.data('offer-name'));
      detailNode.find('.Button--AddToCart').attr('data-product-id', _this.data('offer-id'));

      _this.closest('.ProductDetails__ShadesActions').find('.Shade--selected').removeClass('Shade--selected');

      _this.addClass('Shade--selected');
    });
    $(document).on('click', '[data-ff-result-button-more]', function (e) {
      e.preventDefault();
      $('.ff-other-results').addClass('show');
    });
    $(document).on('click', '[data-ff-result-button-less]', function (e) {
      e.preventDefault();
      $('.ff-other-results').removeClass('show');
    });
  }

  $(".js-show-try-it-frame").on("click", function () {
    $(".js-try-it-view").hide();
    $(".js-try-it-frame").show();
  });
  initCatalogFilterSlider();

  if ($('[data-component="PersonalAddresses"]').length) {
    var locationClickInit = function locationClickInit() {
      $('[data-location]').off('click').on('click', function (e) {
        e.preventDefault();
        var el = $(this);
        var form = el.closest('form');
        var locationName = el.attr('data-location');
        var locationId = el.attr('data-id');
        form.find('[data-location-id]').val(locationId);
        form.find('[data-address-city]').val(locationName);
        form.find('[data-address-city]').next('label').hide();
      });
    };

    var accountPersonalAddressTemplateMain = "\n            <div class=\"address-info address-info--checked\" data-address-main>\n                <a>\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0430\u0434\u0440\u0435\u0441</a>\n            </div>";
    var accountPersonalAddressTemplateSetMain = "\n            <div class=\"address-info\">\n                <a href=\"#\" data-address-set-main>\u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C</a>\n            </div>";
    var cartPersonalAddressTemplateMain = "<span class=\"address-main\" data-address-main>\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439</span>";
    var locationFindAction = false;
    $('[data-address-city]').off('keyup').on('keyup', function () {
      var _this = $(this);

      var city = _this.val();

      var parent = _this.closest('[data-city-parent]');

      var form = parent.find('form');
      var submitBtn = form.find('[data-submit-address-form]');
      var requestData = form.serialize();
      form.find('[data-location-id]').val('');

      if (locationFindAction) {
        clearTimeout(locationFindAction);
        locationFindAction = false;
      }

      if (city.length > 3) {
        submitBtn.attr('disabled', true);
        locationFindAction = setTimeout(function () {
          var _ajax = _this.data('ajax');

          if (_ajax) _ajax.abort();
          _ajax = $.ajax({
            url: '/ajax/get_cities.php',
            method: 'POST',
            dataType: 'json',
            data: requestData
          }).done(function (response) {
            var listCity = parent.find('[data-list-city]');
            listCity.html('');

            for (var i = 0; i < response.locations.length; i++) {
              var locationItemTemplate = "\n                                <a\n                                    href=\"#\"\n                                    class=\"location-item location-item link\"\n                                    data-id=\"".concat(response.locations[i]['ID'], "\"\n                                    data-location=\"").concat(response.locations[i]['NAME_RU'], "\"\n                                    title=\"").concat(response.locations[i]['PATH'], "\"\n                                >\n                                    ").concat(response.locations[i]['NAME_RU'], "\n                                </a>");
              listCity.append(locationItemTemplate);
            }

            locationClickInit();
            submitBtn.attr('disabled', false);
          });

          _this.data('ajax', _ajax);
        }, 500);
      }
    });
    locationClickInit();
    $('[data-personal-address-form] input').on('input', function () {
      $(this).next('label.error').hide();
    });
    $('[data-personal-address-form]').on('submit', function (e) {
      e.preventDefault();
      var form = $(this);
      var requiredInputs = form.find('input[required]');
      var submitButton = form.find('[data-submit-address-form]');
      submitButton.attr('disabled', true);
      var isValid = true;
      requiredInputs.each(function (_, input) {
        if ($(input).val().trim() === '' || $(input).hasClass('ui-autocomplete-input') && !$(input).hasClass('complete')) {
          $(input).next('label').show();
          isValid = false;
        }
      });

      if (form.find('[data-location-id]').length > 0 && form.find('[data-location-id]').val() === '') {
        form.find('[data-address-city]').next('label').show();
        isValid = false;
      }

      if (!isValid) {
        submitButton.attr('disabled', false);
        return false;
      }

      var formName = form.attr('name');
      var action = form.attr('action');
      var requestData = form.serializeArray();
      var isCart = $('[data-component="CartView"]').length > 0;
      BX.showWait();
      $.ajax({
        type: 'POST',
        url: action,
        data: requestData,
        dataType: 'json',
        success: function success(response) {
          if (response.status === 'ok') {
            var list = $('[data-address-list]');

            if (formName === 'personal-address-add') {
              var locationId = form.find('[data-location-id]').val();
              var city = form.find('[data-address-city]').val();
              var street = form.find('[data-address-street]').val();
              var house = form.find('[data-address-house]').val();
              var flat = form.find('[data-address-flat]').val();
              var template = '';
              var main = '';

              if (response.is_main) {
                if (isCart) {
                  main = cartPersonalAddressTemplateMain;
                } else {
                  main = accountPersonalAddressTemplateMain;
                }

                if (list.find('[data-address-main]').length > 0) {
                  if (isCart) {
                    list.find('[data-address-main]').remove();
                  } else {
                    list.find('[data-address-main]').replaceWith(accountPersonalAddressTemplateSetMain);
                  }
                }
              } else if (!isCart) {
                main = accountPersonalAddressTemplateSetMain;
              }

              var flatText = "";

              if (flat !== '') {
                flatText = ", \u043A\u0432./\u043E\u0444. <span data-address-flat>".concat(flat, "</span>");
              }

              if (isCart) {
                template = "\n                                    <div class=\"CartItems__address\" data-address-id=\"".concat(response.id, "\">\n                                        <div class=\"address\">\n                                            <div class=\"city\" data-location-id=\"").concat(locationId, "\">").concat(city, "</div>\n                                \n                                            <div class=\"address-text\" data-address-full>\n                                                <span data-address-street>").concat(street, "</span>,\n                                                \u0434. <span data-address-house>").concat(house, "</span>\n                                                ").concat(flatText, "\n                                                ").concat(main, "\n                                            </div>\n                                        </div>\n                                        \n                                        <div class=\"address-info\">\n                                            <a href=\"#\" data-address-change>\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u044E\u0434\u0430</a>\n                                        </div>\n \n                                        <div class=\"address-controls\">\n                                            <a href=\"#popup-personal-address-update\" data-popup=\"popup-personal-address-update\" class=\"address-edit\">\n                                                <svg class=\"icon edit\" width=\"18\" height=\"19\" viewBox=\"0 0 18 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                    <path d=\"M4.22479 11.2107L14.4354 1.00011L17.2344 3.79907L7.02375 14.0097L2.39986 15.8346L4.22479 11.2107Z\" stroke=\"black\" stroke-width=\"0.8\"/>\n                                                    <path d=\"M12.4766 3.51855L14.7157 5.75773\" stroke=\"black\" stroke-width=\"0.8\"/>\n                                                    <path d=\"M4.78711 11.2063L5.90669 12.3259L7.02628 13.4455\" stroke=\"black\" stroke-width=\"0.8\"/>\n                                                </svg>\n                                            </a>\n                                \n                                            <a href=\"#popup-personal-address-delete\" data-popup=\"popup-personal-address-delete\" class=\"address-delete\">\n                                                <svg class=\"icon delete\" width=\"19\" height=\"18\" viewBox=\"0 0 19 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.3674 2.25068H17.839C17.9439 2.25068 18.0444 2.2899 18.1186 2.35971C18.1927 2.42952 18.2344 2.52421 18.2344 2.62294C18.2344 2.72167 18.1927 2.81635 18.1186 2.88617C18.0444 2.95598 17.9439 2.9952 17.839 2.9952H15.4967V17.6273C15.4968 17.6763 15.4866 17.7248 15.4668 17.7701C15.4469 17.8153 15.4178 17.8565 15.381 17.8911C15.3442 17.9257 15.3005 17.9532 15.2525 17.9719C15.2044 17.9906 15.1529 18.0001 15.1008 18H2.58584C2.53382 18.0001 2.4823 17.9906 2.43422 17.9719C2.38614 17.9532 2.34245 17.9257 2.30567 17.8911C2.26889 17.8565 2.23974 17.8153 2.2199 17.7701C2.20005 17.7248 2.1899 17.6763 2.19002 17.6273V2.9952H0.629712C0.524862 2.9952 0.424306 2.95598 0.350166 2.88617C0.276026 2.81635 0.234375 2.72167 0.234375 2.62294C0.234375 2.52421 0.276026 2.42952 0.350166 2.35971C0.424306 2.2899 0.524862 2.25068 0.629712 2.25068H5.31925V0.372712C5.31925 0.16655 5.49613 0 5.71411 0H11.9726C12.1906 0 12.3674 0.16655 12.3674 0.372712V2.25068ZM11.5768 2.25068V0.744523H6.10897V2.25068H11.5777H11.5768ZM2.98165 2.9952V17.2555H14.7069V2.9952H2.98165ZM5.32021 5.24857C5.32021 5.19975 5.33042 5.1514 5.35027 5.10629C5.37011 5.06118 5.39919 5.02019 5.43586 4.98566C5.47253 4.95114 5.51606 4.92375 5.56396 4.90507C5.61187 4.88638 5.66321 4.87676 5.71507 4.87676C5.76692 4.87676 5.81827 4.88638 5.86617 4.90507C5.91408 4.92375 5.95761 4.95114 5.99427 4.98566C6.03094 5.02019 6.06003 5.06118 6.07987 5.10629C6.09971 5.1514 6.10993 5.19975 6.10993 5.24857V14.2513C6.10993 14.3001 6.09971 14.3484 6.07987 14.3936C6.06003 14.4387 6.03094 14.4797 5.99427 14.5142C5.95761 14.5487 5.91408 14.5761 5.86617 14.5948C5.81827 14.6135 5.76692 14.6231 5.71507 14.6231C5.66321 14.6231 5.61187 14.6135 5.56396 14.5948C5.51606 14.5761 5.47253 14.5487 5.43586 14.5142C5.39919 14.4797 5.37011 14.4387 5.35027 14.3936C5.33042 14.3484 5.32021 14.3001 5.32021 14.2513V5.24857ZM8.44944 5.24857C8.44944 5.14996 8.49104 5.05539 8.56509 4.98566C8.63914 4.91594 8.73957 4.87676 8.8443 4.87676C8.94902 4.87676 9.04945 4.91594 9.1235 4.98566C9.19755 5.05539 9.23916 5.14996 9.23916 5.24857V14.2513C9.23916 14.3499 9.19755 14.4445 9.1235 14.5142C9.04945 14.5839 8.94902 14.6231 8.8443 14.6231C8.73957 14.6231 8.63914 14.5839 8.56509 14.5142C8.49104 14.4445 8.44944 14.3499 8.44944 14.2513V5.24857ZM11.5777 5.24857C11.5777 5.14984 11.6194 5.05516 11.6935 4.98535C11.7676 4.91553 11.8682 4.87631 11.973 4.87631C12.0779 4.87631 12.1785 4.91553 12.2526 4.98535C12.3267 5.05516 12.3684 5.14984 12.3684 5.24857V14.2513C12.3684 14.35 12.3267 14.4447 12.2526 14.5145C12.1785 14.5843 12.0779 14.6235 11.973 14.6235C11.8682 14.6235 11.7676 14.5843 11.6935 14.5145C11.6194 14.4447 11.5777 14.35 11.5777 14.2513V5.24857Z\" fill=\"black\"/>\n                                                </svg>\n                                            </a>\n                                        </div>\n                                    </div>");
              } else {
                template = "\n                                    <div class=\"SnowBox SnowBox--1-column SnowBox--Address\" data-address-id=\"".concat(response.id, "\">\n                                        <header>\n                                            <div class=\"SnowBox__Wrapper\">\n                                                <p>\n                                                    <strong data-location-id=\"").concat(locationId, "\">").concat(city, "</strong>\n                                                </p>\n                                            </div>\n                                            ").concat(main, "\n                                        </header>\n                                        \n                                        <section>\n                                            <div class=\"address\" data-address-full>\n                                                <span data-address-street>").concat(street, "</span>,\n                                                \u0434. <span data-address-house>").concat(house, "</span>\n                                                ").concat(flatText, "\n                                            </div>\n                    \n                                            <div class=\"address-controls\">\n                                                <a href=\"#popup-personal-address-update\" data-popup=\"popup-personal-address-update\" class=\"Button\">\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C</a>\n                                                <a href=\"#popup-personal-address-delete\" data-popup=\"popup-personal-address-delete\" class=\"Button Button--light\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</a>\n                                            </div>\n                                        </section>\n                                    </div>");
              }

              if (isCart) {
                list.append(template);
              } else {
                list.find('div').last().before(template);
              }

              list.find('[data-address-id="' + response.id + '"]').find('[data-popup]').each(function () {
                initPopup($(this));
              });

              if (isCart && list.find('[data-address-id]').length === 1 && typeof setPersonalAddressActive === 'function') {
                $('.error-address').hide();
                setPersonalAddressActive(response.id);
              }
            }

            if (formName === 'personal-address-update') {
              var wrap = list.find('[data-address-id="' + response.id + '"]');
              wrap.find('[data-location-id]').data('location-id', response.params.UF_LOCATION);
              wrap.find('[data-location-id]').text(response.city);
              wrap.find('[data-address-street]').text(response.params.UF_STREET);
              wrap.find('[data-address-house]').text(response.params.UF_BUILDING);

              if (!response.params.UF_FLAT) {
                wrap.find('[data-address-flat]').remove();
                var addressHtml = wrap.find('[data-address-full]').html();
                addressHtml = addressHtml.replace(', кв./оф.', '');
                wrap.find('[data-address-full]').html(addressHtml);
              } else {
                if (wrap.find('[data-address-flat]').length) {
                  wrap.find('[data-address-flat]').text(response.params.UF_FLAT);
                } else {
                  wrap.find('[data-address-house]').after(", \u043A\u0432./\u043E\u0444. <span data-address-flat>".concat(response.params.UF_FLAT, "</span>"));
                }
              }

              if (isCart) {
                var isMain = wrap.find('[data-address-main]').length > 0;

                if (!isMain && response.is_main) {
                  list.find('[data-address-main]').remove();
                  wrap.find('[data-address-full]').append(cartPersonalAddressTemplateMain);
                }

                if (isMain && !response.is_main) {
                  var firstAddress = list.find('[data-address-id]').first();
                  list.find('[data-address-main]').remove();
                  firstAddress.find('[data-address-full]').append(cartPersonalAddressTemplateMain);
                }

                if (wrap.hasClass('CartItems__address--active') && typeof setPersonalAddressActive === 'function') {
                  setPersonalAddressActive(wrap.data('address-id'));
                }
              }
            }

            if (formName === 'personal-address-delete') {
              var _wrap = list.find('[data-address-id="' + response.id + '"]');

              var _isMain = _wrap.find('[data-address-main]').length > 0;

              _wrap.removeAttr('data-address-id');

              _wrap.addClass('hidden');

              if (isCart) {
                var isActive = _wrap.hasClass('CartItems__address--active');

                var _firstAddress = list.find('[data-address-id]').first();

                if (_firstAddress.length) {
                  if (_isMain) {
                    _firstAddress.find('[data-address-city]').after(cartPersonalAddressTemplateMain);
                  }

                  if (isActive && typeof setPersonalAddressActive === 'function') {
                    setPersonalAddressActive(_firstAddress.data('address-id'));
                  }
                } else {
                  var cart = $('[data-component="CartView"]');
                  cart.find('[data-input-personal-address-street]').val('');
                  cart.find('[data-input-personal-address-building]').val('');
                  cart.find('[data-input-personal-address-flat]').val('');
                  cart.find('.CartItems__city').removeClass('hidden');
                  cart.find('[data-tab-delivery="2"]').html("\n                                        <div class=\"CartRow\">\n                                            <div\n                                                class=\"form-group floatl col3\"\n                                                data-component=\"FloatingLabel\"\n                                                data-hint=\"\"\n                                                data-code=\"STREET\"\n                                            >\n                                                <label class=\"floatl__label\" for=\"ORDER_PROP_23\">\n                                                    \u0423\u043B\u0438\u0446\u0430:<span class=\"starrequired\">*</span>\n                                                </label>\n    \n                                                <span class=\"input-icon\">\n                                                    <svg class=\"icon check-mark\" aria-hidden=\"true\" height=\"20\" width=\"20\">\n                                                        <use xlink:href=\"/local/frontend/build/assets/images/required/sprite2.svg#check-mark\"></use>\n                                                    </svg>\n                                                </span>\n    \n                                                <input\n                                                    type=\"text\"\n                                                    placeholder=\"\u0423\u043B\u0438\u0446\u0430\"\n                                                    id=\"ORDER_PROP_23\"\n                                                    name=\"ORDER_PROP_23\"\n                                                    class=\"floatl__input\"\n                                                    value=\"\"\n                                                    data-street>\n                                            </div>\n                                            \n                                            <div\n                                                class=\"form-group floatl col1\"\n                                                data-component=\"FloatingLabel\"\n                                                data-hint=\"\"\n                                                data-code=\"BUILDING\"\n                                            >\n                                                <label class=\"floatl__label\" for=\"ORDER_PROP_24\">\n                                                    \u0414\u043E\u043C:<span class=\"starrequired\">*</span>\n                                                </label>\n    \n                                                <span class=\"input-icon\">\n                                                    <svg class=\"icon check-mark\" aria-hidden=\"true\" height=\"20\" width=\"20\">\n                                                        <use xlink:href=\"/local/frontend/build/assets/images/required/sprite2.svg#check-mark\"></use>\n                                                    </svg>\n                                                </span>\n    \n                                                <input\n                                                    type=\"text\"\n                                                    placeholder=\"\u0414\u043E\u043C\"\n                                                    id=\"ORDER_PROP_24\"\n                                                    name=\"ORDER_PROP_24\"\n                                                    class=\"floatl__input\"\n                                                    value=\"\"\n                                                    data-house>\n                                            </div>\n                                            \n                                            <div\n                                                class=\"form-group floatl col2\"\n                                                data-component=\"FloatingLabel\"\n                                                data-hint=\"\"\n                                                data-code=\"FLAT\"\n                                            >\n                                                <label class=\"floatl__label\" for=\"ORDER_PROP_25\">\n                                                    \u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430:\n                                                </label>\n    \n                                                <span class=\"input-icon\">\n                                                    <svg class=\"icon check-mark\" aria-hidden=\"true\" height=\"20\" width=\"20\">\n                                                        <use xlink:href=\"/local/frontend/build/assets/images/required/sprite2.svg#check-mark\"></use>\n                                                    </svg>\n                                                </span>\n    \n                                                <input\n                                                    type=\"text\"\n                                                    placeholder=\"\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430\"\n                                                    id=\"ORDER_PROP_25\"\n                                                    name=\"ORDER_PROP_25\"\n                                                    class=\"floatl__input\"\n                                                    value=\"\">\n                                            </div>\n                                        </div>");
                  initAutocompleteStreet(cart.find('[data-tab-delivery="2"]').find('[data-street]'));
                  initAutocompleteHouse(cart.find('[data-tab-delivery="2"]').find('[data-house]'));
                }
              } else {
                if (_isMain) {
                  _wrap.find('[data-address-main]').remove();

                  if (response.main_id) {
                    list.find('[data-address-id="' + response.main_id + '"]').find('[data-address-set-main]').replaceWith(accountPersonalAddressTemplateMain);
                  }
                }
              }
            }

            $.magnificPopup.close();
          } else {
            console.log(response.message);
            $(".modal__address-inputs-error").show().text(response.message);
          }

          BX.closeWait();
          setTimeout(function () {
            return submitButton.attr('disabled', false);
          }, 700);
        }
      });
    });
    $(document).on('click', '[data-address-set-main]', function (e) {
      e.preventDefault();
      var list = $('[data-address-list]');
      var wrap = $(this).closest('[data-address-id]');
      BX.showWait();
      $.ajax({
        url: '/ajax/personal_address.php',
        method: 'POST',
        dataType: 'json',
        data: {
          action: 'main',
          id: wrap.data('address-id')
        }
      }).done(function (data) {
        if (data.status === 'ok') {
          list.find('[data-address-main]').replaceWith(accountPersonalAddressTemplateSetMain);
          wrap.find('[data-address-set-main]').replaceWith(accountPersonalAddressTemplateMain);
        }

        BX.closeWait();
      });
    });
  }

  $(document).on('click', '[data-tab-delivery="2"]', function () {
    var isDisabled = $(this).find('input:disabled').length;

    if (isDisabled) {
      var cityName = $('[data-city-name]');
      cityName.addClass('danger');
      setTimeout(function () {
        cityName.removeClass('danger');
      }, 1000);
    }
  });
  /**
   *  DaData
   */

  $('[data-street], [data-address-street]').each(function () {
    initAutocompleteStreet($(this));
  });
  $('[data-house], [data-address-house]').each(function () {
    initAutocompleteHouse($(this));
  });
  $('.findinstore-vex-modal [data-target-panel]').on('click', function (evt) {
    var active = $('.findinstore-vex-modal [data-tab-panel].active');
    var target = $("#".concat($(evt.target).data('target-panel')));
    active.removeClass("fade");
    target.addClass("fade");
    setTimeout(function () {
      active.removeClass("active");
      target.addClass("active");
    }, 300);
  });

  if ($('.js-validate-birth').length > 0) {
    var dates = [];
    $('.js-validate-birth').each(function (i) {
      dates[i] = new _components_ValidateBirthDate_ValidateBirthDate__WEBPACK_IMPORTED_MODULE_21__[/* ValidateBirthDate */ "a"]($(this));
      dates[i].createEventListeners();
    });
  }

  $('.NavigationLocator').on('click', function (e) {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "DlEvent",
      eventCategory: "kiko",
      eventAction: "button_click",
      eventLabel: "store_address"
    });
    window.location.href = '/about/shops/';
  });
  $('.FooterMain__Kisses__App a').on('click', function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "DlEvent",
      eventCategory: "kiko",
      eventAction: "button_click",
      eventLabel: "app_store_google_play"
    });
  });
  $('[data-btn-yes]').on('click', function () {
    $('.popup-your-city').remove();
    var expiration = new Date();
    expiration.setDate(expiration.getDate() + 30);
    document.cookie = 'popupYourCityShowed=Y;expires=' + expiration.toGMTString() + ';path=/';
  });
  $('[data-btn-no]').on('click', function () {
    $('.popup-your-city').remove();
    var expiration = new Date();
    expiration.setDate(expiration.getDate() + 30);
    document.cookie = 'popupYourCityShowed=Y;expires=' + expiration.toGMTString() + ';path=/';
  });
  setTimeout(function () {
    $('.popup-your-city').removeClass('close');
  }, 3000);
});
var windowScrollPosition;

window.initPopup = function (el) {
  el.magnificPopup({
    type: 'inline',
    midClick: true,
    closeMarkup: '<button title="%title%" type="button" class="vex-close mfp-close popup__close"></button>',
    removalDelay: 500,
    //delay removal by X to allow out-animation
    alignTop: true,
    callbacks: {
      beforeOpen: function beforeOpen() {
        windowScrollPosition = window.scrollY;
        var popup = $(el.attr('href'));
        this.st.mainClass = 'mfp-zoom-in vex';
        $('html').addClass('vex-open');

        if (el.attr('data-popup') == 'ChooseCountryLayer') {
          this.st.mainClass = 'mfp-zoom-in vex ChooseCountryLayer';
        }

        if (el.attr('data-popup') == 'ChooseCity') {
          this.st.mainClass = 'mfp-zoom-in vex ChooseCity';
        }

        if (el.attr('data-popup') == 'video') {
          this.st.mainClass = 'mfp-zoom-in vex VideoModal';
        }

        if (el.attr('data-popup') == 'gift') {
          this.st.mainClass = 'mfp-zoom-in vex mfp-center mfp-gift';
        }

        if (el.data('popup') === 'popup-personal-address-add') {
          popup.find('[data-address-city]').val('');
          popup.find('[data-address-street]').val('');
          popup.find('[data-address-house]').val('');
          popup.find('[data-address-flat]').val('');
          popup.find('[data-address-main]').prop('checked', false);
          popup.find('.floatl--active').removeClass('floatl--active');
          popup.find('.error').hide();
        }

        if (el.data('popup') === 'popup-personal-address-update') {
          var addressWrap = el.closest('[data-address-id]');
          var isMain = addressWrap.find('[data-address-main]').length > 0;
          popup.find('[data-address-id]').val(addressWrap.data('address-id'));
          popup.find('[data-location-id]').val(addressWrap.find('[data-location-id]').data('location-id'));
          popup.find('[data-address-city]').val(addressWrap.find('[data-location-id]').text());
          popup.find('[data-address-street]').val(addressWrap.find('[data-address-street]').text());
          popup.find('[data-address-house]').val(addressWrap.find('[data-address-house]').text());
          popup.find('[data-address-flat]').val(addressWrap.find('[data-address-flat]').text());
          popup.find('[data-address-main]').prop('checked', false);

          if (isMain) {
            popup.find('[data-address-main]').prop('checked', true);
          }

          popup.find('.floatl--active').removeClass('floatl--active');
          popup.find('.error').hide();
        }

        if (el.data('popup') === 'popup-personal-address-delete') {
          var _addressWrap = el.closest('[data-address-id]');

          popup.find('[data-address-id]').val(_addressWrap.data('address-id'));
          popup.find('[data-address-city]').text(_addressWrap.find('[data-location-id]').text());
          popup.find('[data-address-full]').text(_addressWrap.find('[data-address-full]').text());
        }

        if (el.data('popup') === 'select-date-popup') {
          var deliveryDateList = popup.find('.select-times__items');
          var currentSelectedDay = $('input[name="ORDER_PROP_date"]').val();
          deliveryDateList.html('');

          if (window.JS_OBJ && window.JS_OBJ.deliveryTime) {
            window.JS_OBJ.deliveryTime.forEach(function (value, index) {
              var checked = value.date.text === currentSelectedDay ? 'checked' : '';
              deliveryDateList.append("\n                                <div class=\"select-times__item\">\n                                    <label>\n                                        <input type=\"radio\" name=\"day\" value=\"".concat(value.date.value, "\" ").concat(checked, ">\n                                        <span class=\"pseudo-radio\"></span>\n                                        <span class=\"select-times__value\">\n                                            ").concat(value.date.text, "\n                                        </span>\n                                    </label>\n                                </div>"));
            });
          }
        }

        if (el.data('popup') === 'select-time-popup') {
          var deliveryTimeList = popup.find('.select-times__items');
          var currentSelectedTime = $('input[name="ORDER_PROP_time"]').val();
          deliveryTimeList.html('');

          if (window.JS_OBJ && window.JS_OBJ.deliveryTime) {
            var index = 0;
            $('#select-date-popup').find('input').each(function () {
              if ($(this).is(':checked')) {
                return false;
              }

              index++;
            });
            window.JS_OBJ.deliveryTime[index].time.forEach(function (value, index) {
              var checked = value.text === currentSelectedTime ? 'checked' : '';
              deliveryTimeList.append("\n                                <div class=\"select-times__item\">\n                                    <label>\n                                        <input type=\"radio\" name=\"time\" value=\"".concat(value.value, "\" ").concat(checked, ">\n                                        <span class=\"pseudo-radio\"></span>\n                                        <span class=\"select-times__value\">\n                                            ").concat(value.text, "\n                                        </span>\n                                    </label>\n                                </div>"));
            });
          }
        }
      },
      open: function open() {
        if (el.attr('data-popup') == 'ChooseCountryLayer') {
          $('.ChooseCountryLayer').find('.vex-content').css({
            'top': '23px'
          });
          $('body').addClass('with-bottom-bar');
        }

        if (el.attr('data-popup') == 'ChooseCity') {
          $('.ChooseCity').find('.vex-content').removeAttr('style');
          $('body').addClass('with-bottom-bar');
        }

        if (el.attr('data-popup') == 'video') {
          var popupId = el.attr('href');
          var id = $(popupId).find('[data-video]').attr('id');

          if ($(popupId).find('.plyr').length == 0) {
            plyrVideo = new plyr__WEBPACK_IMPORTED_MODULE_9___default.a("#".concat(id), {
              controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']
            });
          }

          plyrVideo.play();
        } // if ($(this.content[0]).find('[data-slick-popup]').length > 0) {
        //     $(this.content[0]).find('[data-slick-popup]').each(function() {
        //         let data = $.parseJSON($(this).attr('data-slick-popup'));
        //         $(this).slick(data)
        //     })
        // }


        if (el.data('popup') === 'select-date-popup' || el.data('popup') === 'select-time-popup') {
          $(".mfp-content").addClass("mfp-select-time");
        }
      },
      close: function close() {
        $('html').removeClass('vex-open');
        window.scrollTo(0, windowScrollPosition);

        if (el.attr('data-popup') == 'ChooseCountryLayer') {
          $('body').removeClass('with-bottom-bar');
        }

        if (el.attr('data-popup') == 'ChooseCity') {
          $('body').removeClass('with-bottom-bar');
        }

        if (el.attr('data-popup') == 'video') {
          plyrVideo.pause();
        } // if ($(this.content[0]).find('[data-slick-popup]').length > 0) {
        //     $(this.content[0]).find('[data-slick-popup]').each(function() {
        //         $(this).slick('unslick')
        //     })
        // }

      },
      afterClose: function afterClose() {
        if (el.data('popup') === 'popup-personal-address-delete') {
          el.blur();
        }
      }
    }
  });
};

var onCompleteInputDaData = function onCompleteInputDaData(event) {
  $(event.target).removeClass('complete');
  $(event.target).off('input', onCompleteInputDaData);
};

var formatStreet = function formatStreet(data) {
  var settlement = data.settlement_with_type ? "".concat(data.settlement_with_type, ", ") : '';
  var area = data.area_with_type ? "".concat(data.area_with_type, ", ") : '';
  return "".concat(settlement).concat(area).concat(data.street_type_full, " ").concat(data.street).trim();
};

window.initAutocompleteStreet = function (element) {
  var streetNames;
  element.autocomplete({
    source: function source(request, response) {
      var _this = $(this.element);

      var city = $('[data-city-name]').first().text();

      if (_this.is('[data-address-street]')) {
        city = _this.closest('[data-personal-address-form]').find('[data-address-city]').val();
      }

      var query = request.term;

      if (query.length < 3) {
        return;
      }

      var options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + DaDataToken
        },
        body: JSON.stringify({
          query: "".concat(city, " ").concat(query)
        })
      };
      fetch(DaDataUrl, options).then(function (response) {
        return response.text();
      }).then(function (result) {
        streetNames = JSON.parse(result).suggestions.filter(function (el) {
          return el.data.street;
        }).map(function (el) {
          return {
            sreetId: el.data.street_fias_id || null,
            street: formatStreet(el.data) || ''
          };
        }).filter(function (value, index, self) {
          return self.findIndex(function (el) {
            return el.sreetId === value.sreetId;
          }) === index;
        });
        response(streetNames.map(function (el) {
          return el.street;
        }));
        $('.Cart__Bottom').css('display', 'none');
      }).catch(function (error) {
        return console.log('error', error);
      });
    },
    select: function select(event) {
      $(event.target).addClass('complete');
      $(event.target).trigger('keyup').trigger('change');
      $(event.target).on('input', onCompleteInputDaData);
    },
    close: function close(event) {
      var currentValue = $(event.target).val().toLowerCase().trim();
      var matchedStreet = streetNames.find(function (el) {
        return el.street.toLowerCase().includes(currentValue);
      }).street || streetNames.find(function (el) {
        return currentValue.split(' ').some(function (item) {
          return el.street.toLowerCase().includes(item);
        });
      }).street;

      if (matchedStreet && currentValue) {
        $(event.target).val(matchedStreet);
        $(event.target).addClass('complete');
        $(event.target).trigger('keyup').trigger('change');
        $(event.target).on('input', onCompleteInputDaData);
      }

      $('.Cart__Bottom').css('display', '');
    }
  });
};

var formatHouse = function formatHouse(data) {
  if (!data.house_fias_id) {
    return '';
  }

  var house = data.house ? "".concat(data.house, " ") : '';
  var blockType = data.block_type ? "".concat(data.block_type, " ") : '';
  var block = data.block ? "".concat(data.block, " ") : '';
  return "".concat(house).concat(blockType).concat(block).trim();
};

window.initAutocompleteHouse = function (element) {
  var houseNumbers;
  element.autocomplete({
    source: function source(request, response) {
      var _this = $(this.element);

      var city = $('[data-city-name]').first().text();
      var street = $('[data-street]').val();

      if (_this.is('[data-address-house]')) {
        city = _this.closest('[data-personal-address-form]').find('[data-address-city]').val();
        street = _this.closest('[data-personal-address-form]').find('[data-address-street]').val();
      }

      _this.removeClass('found');

      var query = request.term.trim();

      _this[query ? 'addClass' : 'removeClass']('complete');

      var options = {
        method: 'POST',
        mode: 'cors',
        count: 7,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token ' + DaDataToken
        },
        body: JSON.stringify({
          query: "".concat(city, " ").concat(street, " ").concat(query)
        })
      };
      fetch(DaDataUrl, options).then(function (response) {
        return response.text();
      }).then(function (result) {
        houseNumbers = JSON.parse(result).suggestions.map(function (el) {
          return formatHouse(el.data);
        }).filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });
        response(houseNumbers);
        $('.Cart__Bottom').css('display', 'none');
      }).catch(function (error) {
        return console.log('error', error);
      });
    },
    select: function select(event) {
      $(event.target).addClass('found');
      $(event.target).trigger('keyup').trigger('change');
      $(event.target).on('input', onCompleteInputDaData);
    },
    close: function close(event) {
      var currentValue = $(event.target).val();

      if (houseNumbers.includes(currentValue)) {
        $(event.target).addClass('found');
        $(event.target).trigger('keyup').trigger('change');
        $(event.target).on('input', onCompleteInputDaData);
      }

      $('.Cart__Bottom').css('display', '');
    }
  });
};

window.initCatalogFilterSlider = function () {
  var slider = document.querySelector('.catalog-product_smart-filter__price-slider');

  if (slider) {
    var min = +slider.dataset['min'];
    var max = +slider.dataset['max'];
    var currentMin = +slider.dataset['currentMin'];
    var currentMax = +slider.dataset['currentMax'];
    nouislider__WEBPACK_IMPORTED_MODULE_10___default.a.create(slider, {
      range: {
        min: min,
        max: max
      },
      step: 1,
      start: [currentMin, currentMax]
    });
    slider.noUiSlider.on('slide', function (values) {
      $('.catalog-product_smart-filter__price-slider__min-price').val(parseInt(values[0]));
      $('.catalog-product_smart-filter__price-slider__max-price').val(parseInt(values[1]));
    });
    slider.noUiSlider.on('set', function () {
      if (!window.smartFilterObj) {
        return;
      }

      window.smartFilterObj.applyFilter();
    });
    $('.catalog-product_smart-filter__price-slider__min-price').on('change', function (evt) {
      var value = parseInt(evt.target.value);

      if (!value) {
        evt.target.value = parseInt(slider.noUiSlider.get()[0]);
        value = parseInt(slider.noUiSlider.get()[0]);
      }

      if (value < min) {
        evt.target.value = min;
        value = min;
      }

      evt.target.value = value;
      slider.noUiSlider.set([value, null]);
    });
    $('.catalog-product_smart-filter__price-slider__max-price').on('change', function (evt) {
      var value = parseInt(evt.target.value);

      if (!value) {
        evt.target.value = parseInt(slider.noUiSlider.get()[1]);
        value = parseInt(slider.noUiSlider.get()[1]);
      }

      if (value > max) {
        evt.target.value = max;
        value = max;
      }

      evt.target.value = value;
      slider.noUiSlider.set([null, value]);
    });
  }
};

document.addEventListener('input', function (evt) {
  var target = evt.target;

  if (target.classList.contains('js-fit-text-area')) {
    target.style.height = "";
    target.style.height = evt.target.scrollHeight + 3 + "px";
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(7)))

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(39);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(41);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MegaMenu = /*#__PURE__*/function () {
  function MegaMenu(element) {
    _classCallCheck(this, MegaMenu);

    this.openSubMenu();
    this.openSubMenu2();
    this.closeSubMenu();
    this.closeSubMenu2();
  }

  _createClass(MegaMenu, [{
    key: "handleOpen",
    value: function handleOpen() {
      console.log('open menu');
      this.el.classList.add('open');
      document.documentElement.classList.add('menu-open');
      this.CAST('modal:close');
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.Selectors.Root.dataset.subOpened = false;
      this.CAST('menu:closed');
      this.el.classList.remove('open');
      this.Selectors.Root.dataset.subOpened2 = false;
      document.documentElement.classList.remove('menu-open');
      this.CAST('modal:close');
    }
  }, {
    key: "openSubMenu",
    value: function openSubMenu() {
      var _this = this;

      this.Selectors.NavItems.forEach(function (item) {
        item.addEventListener('click', function () {
          var currentItem = _this.Selectors.Root.querySelector('[active]');

          currentItem ? currentItem.removeAttribute('active') : null;

          _this.toggleAttr(item, 'active');

          _this.Selectors.Root.dataset.subOpened = true;

          _this.switchSubPanel(item);
        });
      });
    }
  }, {
    key: "switchSubPanel",
    value: function switchSubPanel(item) {
      var _this2 = this;

      var subPanelID = item.getAttribute('data-submenu').replace(/\s+/g, '-').toLowerCase();
      this.Selectors.Root.setAttribute('data-current-sub', subPanelID);
      this.Selectors.SubPanels.forEach(function (item) {
        item.setAttribute('visually-hidden', true);
      });
      this.Selectors.Root.querySelectorAll("[data-subpanel=".concat(subPanelID, "]")).forEach(function (item) {
        _this2.toggleAttr(item, 'visually-hidden');
      });
      this.Selectors.Root.dataset.subOpened2 = false;
    }
  }, {
    key: "openSubMenu2",
    value: function openSubMenu2() {
      var _this3 = this;

      this.Selectors.NavItems2.forEach(function (item) {
        item.addEventListener('click', function () {
          var currentItem = _this3.Selectors.Root.querySelector('[active]');

          currentItem ? currentItem.removeAttribute('active') : null;

          _this3.toggleAttr(item, 'active');

          _this3.Selectors.Root.dataset.subOpened2 = true;

          _this3.switchSubPanel2(item);
        });
      });
    }
  }, {
    key: "switchSubPanel2",
    value: function switchSubPanel2(item) {
      var _this4 = this;

      var subPanelID = item.getAttribute('data-submenu').replace(/\s+/g, '-').toLowerCase();
      this.Selectors.Root.setAttribute('data-current-sub', subPanelID);
      this.Selectors.SubPanels2.forEach(function (item) {
        item.setAttribute('visually-hidden', true);
      });
      this.Selectors.Root.querySelectorAll("[data-subpanel2=".concat(subPanelID, "]")).forEach(function (item) {
        _this4.toggleAttr(item, 'visually-hidden');
      });
    }
  }, {
    key: "closeSubMenu",
    value: function closeSubMenu() {
      var _this5 = this;

      this.Selectors.SubClose.forEach(function (item) {
        item.addEventListener('click', function () {
          var currentItem = _this5.Selectors.Root.querySelector('[active]');

          currentItem ? currentItem.removeAttribute('active') : null;
          _this5.Selectors.Root.dataset.subOpened = false;
        });
      });
    }
  }, {
    key: "closeSubMenu2",
    value: function closeSubMenu2() {
      var _this6 = this;

      this.Selectors.SubClose2.forEach(function (item) {
        item.addEventListener('click', function () {
          var currentItem = _this6.Selectors.Root.querySelector('[active]');

          currentItem ? currentItem.removeAttribute('active') : null;
          _this6.Selectors.Root.dataset.subOpened2 = false;
        });
      });
    }
  }, {
    key: "toggleAttr",
    value: function toggleAttr(el, attr) {
      if (el.getAttribute(attr) === 'true') {
        el.removeAttribute(attr);
      } else {
        el.setAttribute(attr, true);
      }
    }
  }, {
    key: "Messages",
    get: function get() {
      return {
        'Layer:open:menu': this.handleOpen,
        'Layer:close:menu': this.handleClose
      };
    }
  }, {
    key: "Selectors",
    get: function get() {
      return {
        "Root": this.el,
        "Close": this.el.querySelector('.OverlayPanel__Close'),
        "Overlay": this.el.querySelector('.OverlayPanel__ActiveOverlay'),
        "SubClose": this.el.querySelectorAll('[data-close-submenu]'),
        "SubClose2": this.el.querySelectorAll('[data-close-submenu2]'),
        "NavItems": this.el.querySelectorAll('.js-layer-item-1'),
        "NavItems2": this.el.querySelectorAll('.js-layer-item-2'),
        "SubPanels": this.el.querySelectorAll('[data-subpanel]'),
        "SubPanels2": this.el.querySelectorAll('[data-subpanel2]')
      };
    }
  }]);

  return MegaMenu;
}();



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ReviewBar = /*#__PURE__*/function () {
  function ReviewBar() {
    _classCallCheck(this, ReviewBar);

    this.reviewBar = $('.ReviewBar');
    this.toggler = $('.ReviewBar__Toggler');
    this.cancelBtn = $('.ReviewBar__cancel');
    this.offerId = $('.ReviewBar__cancel').data('offer');
    this.initialize();
  }

  _createClass(ReviewBar, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.toggler.click(function () {
        _this.reviewBar.toggleClass('ReviewBar--opened');
      });
      this.cancelBtn.click(function () {
        var data = {
          offerId: _this.offerId
        };
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/ajax/reviews.php', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(data)).then(function (response) {
          _this.reviewBar.addClass('hidden');
        });
      });
    }
  }]);

  return ReviewBar;
}();

new ReviewBar();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* unused harmony export FooterAccordion */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FooterAccordion = /*#__PURE__*/function () {
  function FooterAccordion(elem) {
    _classCallCheck(this, FooterAccordion);

    this.footer = $(elem);
    this.title = this.footer.find('[data-footer-accordion-title]');
    this.wrapper = this.footer.find('[data-footer-accordion-wrapper]');
  }

  _createClass(FooterAccordion, [{
    key: "initialize",
    value: function initialize() {
      var that = this;
      this.title.on('click', function (e) {
        var el = $(this);
        var content = el.next('[data-footer-accordion-content]');
        var allContent = $('[data-footer-accordion-content]');
        var siblingTitles = that.title;
        var allWrappers = that.wrapper;
        var elWrapper = el.closest('[data-footer-accordion-wrapper]');
        var prevSibIndex = -1;
        siblingTitles.css("border-bottom", "1px solid #DFDFDF");
        siblingTitles.each(function (index, elem) {
          if (el[0] === elem) {
            prevSibIndex = index - 1;
          }
        });

        if (prevSibIndex >= 0) {
          $(siblingTitles[prevSibIndex]).css("border-bottom", "none");
        }

        if (el.hasClass('active')) {
          setTimeout(function () {
            elWrapper.toggleClass('toggled');
            el.toggleClass('active');
            siblingTitles.css("border-bottom", "1px solid #DFDFDF");
          }, 150);
        } else {
          siblingTitles.removeClass('active');
          allWrappers.removeClass('toggled');
          allContent.hide();
          elWrapper.toggleClass('toggled');
          el.toggleClass('active');
        }

        content.slideToggle('fast');
        e.preventDefault();
      });
    }
  }]);

  return FooterAccordion;
}();


document.addEventListener("DOMContentLoaded", function (event) {
  if ($('[data-footer-accordion]').length > 0) {
    var footerAcc = new FooterAccordion($('[data-footer-accordion]'));
    footerAcc.initialize();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


(function (window) {
  initNotify();
  $(document).on('click', '.js-notify', function (e) {
    var productName = $(this).data('productName');
    var productId = $(this).data('productId');
    var article = $(this).data('article');
    var color = $(this).data('color');
    var id = $(this).data('id');
    var imgSrc = $('#item-' + id).find('.js-pb-image1').attr('src');
    $('[data-modal-product-id]').val(productId);
    $('[data-modal-product-name]').text(productName);
    $('[data-modal-product-img]').attr('src', imgSrc);
    $('[data-modal-product-article]').text(article);
    $('[data-modal-product-color]').text(color);
    setTimeout(showM, 1000);
  });
  $(document).on('click', '.js-shade', function () {
    var isStock = $(this).attr('data-is-stock');
    var idProd = $(this).attr('data-id');
    var shild = $('#item-' + idProd).find('.js-is-stock');
    console.log("isStock");

    if (isStock == 'Y') {
      shild.show();
    } else {
      shild.hide();
    }

    var img = $(this).closest('.ProductBox__Preview').find('.ProductBox__Image_link'),
        name = $(this).attr('data-name'),
        href = img.attr('data-href');
    if (img && name && href) img.attr('href', href + '?offer=' + name);
  });
  if (!!window.JCCatalogSection) return;

  window.JCCatalogSection = function (params) {
    this.siteId = params.siteId || '';
    this.template = params.template || '';
    this.parameters = params.parameters || '';
    window.navParams = params.navParams;
    this.waitLoad = false;
    this.offers = params.offers || null;

    if (params.items) {
      /** товар */
      this.catalogProductListItem = params.items.catalogProductListItem || null;
      /** название */

      this.catalogProductListItemName = params.items.catalogProductListItemName || null;
      /** картинки */

      this.catalogProductListItemImg = params.items.catalogProductListItemImg || null;
      /** цвета (контейнер) */

      this.catalogProductListItemColorCont = params.items.catalogProductListItemColorCont || null;
      /** цвета (выбор) */

      this.catalogProductListItemColor = params.items.catalogProductListItemColor || null;
      /** название цвета */

      this.catalogProductListItemColorName = params.items.catalogProductListItemColorName || null;
      /** кнопка  */

      this.catalogProductListItemAddBtn = params.items.catalogProductListItemAddBtn || null;
      this.catalogProductListItemNotAvail = params.items.catalogProductListItemNotAvail || null;
      /** цена */

      this.catalogProductListItemPrice = params.items.catalogProductListItemPrice || null;
      /** старая цена */

      this.catalogProductListItemOldPrice = params.items.catalogProductListItemOldPrice || null;
      /** скидка */

      this.catalogProductListItemDisc = params.items.catalogProductListItemDisc || null;
      /** все цвета (кнопка) */

      this.catalogProductListItemColorMoreBtn = params.items.catalogProductListItemColorMoreBtn || null;
      /** все цвета (контейнер) */

      this.catalogProductListItemColorAllCont = params.items.catalogProductListItemColorAllCont || null;
      /** все цвета (название цвета) */

      this.catalogProductListItemColorAllColorName = params.items.catalogProductListItemColorAllColorName || null;
      /** все цвета (выбор) */

      this.catalogProductListItemColorAllPattern = params.items.catalogProductListItemColorAllPattern || null;
      /** все цвета (кнопка 'закрыть') */

      this.catalogProductListItemColorAllBtnClose = params.items.catalogProductListItemColorAllBtnClose || null;
      /** labels */

      this.labelContainer = params.items.labelContainer || null;
    }
    /** модальное окно уведоление о поступлении */


    this.modalNotify = '#notifyModal';
    /** доступность каталога */

    this.available = null;
    /** выбранный контейнер товара */

    this.activeProductContainer = null;
    /** массив цветов (офферов) для активного контейнера товара */

    this.smallPaletteOffers = [];
    /** выбранный оффер товара */

    this.activeOfferId = null;
    this.checkAvailable($.proxy(this.init, this));
  };

  window.JCCatalogSection.prototype = {
    checkAvailable: function checkAvailable(cb) {
      this.available = this.offers != null;
      cb();
    },
    init: function init() {
      if (this.available) {
        this.Events();
      } else {
        console.log('not available product items...');
      }
    },

    /** События */
    Events: function Events() {
      var $body = $('body');
      var this_ = this;
      /** выбор оффера (цвета) из малой палитры */

      $body.find(this.catalogProductListItem).on('click', this.catalogProductListItemColor, function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var offerId = $(this).attr('data-scu');
        var productId = $(this).attr('data-id');
        this_.setActiveOffer(productId, offerId, this_.catalogProductListItemColorName);
      });
      /** hover контейнера товара */

      $(this.catalogProductListItem).hover( // on
      function () {
        var productId = $(this).attr('data-id');
        this_.setProductContainer(productId);
        var offerId = this_.getActiveOfferId();
        this_.changeProductPicture(offerId, 'hover_on');
      }, // off
      function () {
        var productId = $(this).attr('data-id');
        this_.setProductContainer(productId);
        var offerId = this_.getActiveOfferId(productId);
        this_.changeProductPicture(offerId, 'hover_off'); // закрываем полную палитру

        var $fullPaletteCloseBtn = this_.activeProductContainer.find(this_.catalogProductListItemColorAllBtnClose);
        $fullPaletteCloseBtn.trigger('click');
      });
      /** Показываем полную палитру */

      $body.find(this.catalogProductListItem).on('click', this.catalogProductListItemColorMoreBtn, function () {
        var $productItem = $(this).parents(this_.catalogProductListItem);
        var productId = $productItem.attr('data-id');
        this_.setProductContainer(productId);
        $productItem.find(this_.catalogProductListItemColorAllCont).removeClass('not-show');
      });
      /** закрываем полную палитру */

      $body.find(this.catalogProductListItem).on('click', this.catalogProductListItemColorAllBtnClose, function () {
        var $productItem = $(this).parents(this_.catalogProductListItem);
        $productItem.find(this_.catalogProductListItemColorAllCont).addClass('not-show'); // сдвигаем малую палитру

        this_.shiftSmallPalette();
      });
      /** выбор оффера (цвета) из полной палитры */

      $body.find(this.catalogProductListItem).on('click', this.catalogProductListItemColorAllPattern, function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var offerId = $(this).attr('data-scu');
        var productId = $(this).attr('data-id');
        this_.setActiveOffer(productId, offerId, this_.catalogProductListItemColorAllColorName); // сдвигаем массив офферов малой палитры

        this_.shiftSmallPaletteOffers();
      });
      /** уведомление о поступлении */

      $body.find(this.catalogProductListItem).on('click', this.catalogProductListItemNotAvail, function () {
        var productId = $(this).attr('data-id');
        this_.setProductContainer(productId);
        var offerId = this_.getActiveOfferId(productId);
        var articul = this_.offers[offerId]['articul'];
        var name = this_.activeProductContainer.find(this_.catalogProductListItemName).text();
        var picSrc = this_.offers[offerId]['pictures']['firstPicture'];
        var colorName = this_.offers[offerId]['colorPattern']['name'];
        $(this).attr('data-scu', offerId);
        $(this_.modalNotify).find('input[name="sku_id"]').val(offerId);
        $(this_.modalNotify).find('input[name="notify_product_name"]').val(articul);
        $(this_.modalNotify).find('.js-product-name').text(name);
        $(this_.modalNotify).find('.sku-preview-photo').attr('src', picSrc);
        $(this_.modalNotify).find('.js-articul').text(articul);
        $(this_.modalNotify).find('.js-color-name').text(colorName);
        setTimeout(function () {
          $(this_.modalNotify).modal('show');
        }, 300);
      });
      /** Подгрузка данных при прокрутке страницы */

      $(window).on('scroll', function () {
        var $el = $('.Spinner__Container');

        if (!$el.hasClass('show') && parseInt(window.navParams.NavPageNomer) < parseInt(window.navParams.NavPageCount)) {
          var winTop = $(window).scrollTop();
          var winBottom = winTop + $(window).height();
          var elTop = $el.offset().top;
          var elBottom = elTop + $el.height();
          var isVisible = elBottom <= winBottom && elTop >= winTop;

          if (isVisible) {
            this_.loadMoreItems();
          }
        }
      });
    },

    /** получаем offerId в контейнере (кнопке) товара */
    getActiveOfferId: function getActiveOfferId() {
      var $productContainer = this.activeProductContainer;
      return $productContainer.find(this.catalogProductListItemAddBtn).attr('data-scu') || null;
    },

    /** получаем цену */
    getProductPrice: function getProductPrice(offerId) {
      return this.offers[offerId]['price'] || null;
    },

    /** получаем название цвета */
    getColorName: function getColorName(offerId) {
      return this.offers[offerId]['colorPattern']['name'] || null;
    },

    /** получаем картинки товара */
    getProductPictures: function getProductPictures(offerId) {
      return this.offers[offerId]['pictures'] || null;
    },

    /** Получаем массив офферов малой палитры */
    getSmallPaletteOffers: function getSmallPaletteOffers() {
      var smallPaletteOffers = [];
      if (this.activeProductContainer == null) return;
      var $offers = this.activeProductContainer.find(this.catalogProductListItemColor);
      $offers.each(function (k, v) {
        smallPaletteOffers[k] = $(this).attr('data-scu');
      });
      return smallPaletteOffers;
    },

    /** устанавливаем контйнер товара */
    setProductContainer: function setProductContainer(productId) {
      this.activeProductContainer = $(this.catalogProductListItem + '[data-id="' + productId + '"]') || null;
    },

    /** Устанавливаем активный оффер */
    setActiveOffer: function setActiveOffer(productId, offerId, colorNameBlock) {
      this.setProductContainer(productId);
      this.setActiveOfferId(offerId);
      this.setColorName(offerId, colorNameBlock);
      this.changeProductPicture(offerId, 'color_select');
      this.setProductPrice(offerId);
      this.setProductLabels(offerId);
      this.checkOfferAvail(offerId);
    },

    /** устанавливаем offerId в контейнере (кнопке) товара */
    setActiveOfferId: function setActiveOfferId(offerId) {
      var $productContainer = this.activeProductContainer;
      $productContainer.find(this.catalogProductListItemAddBtn).attr('data-scu', offerId);
      $productContainer.find(this.catalogProductListItemNotAvail).attr('data-scu', offerId);
      this.activeOfferId = offerId;
    },

    /** устанавливаем цену */
    setProductPrice: function setProductPrice(offerId) {
      if (typeof this.offers[offerId]['price'] == 'undefined') return;
      var $productContainer = this.activeProductContainer;
      var price = this.offers[offerId]['price'];
      var currentPrice = price['base'];
      var oldPrice = 0;
      var discount = 0;
      var currentPriceFormat = price['baseFormat'];
      var oldPriceFormat = '';
      var discountFormat = '';

      if (price['sale'] && price['sale'] < price['base']) {
        currentPrice = price['sale'];
        oldPrice = price['base'];
        discount = price['discount'];
        currentPriceFormat = price['saleFormat'];
        oldPriceFormat = price['baseFormat'];
        discountFormat = price['discountFormat'];
      }

      $productContainer.find(this.catalogProductListItemPrice).html(currentPriceFormat);
      $productContainer.find(this.catalogProductListItemOldPrice).html(oldPriceFormat);
      $productContainer.find(this.catalogProductListItemDisc).html(discountFormat);
    },

    /** устанавливаем лейблы */
    setProductLabels: function setProductLabels(offerId) {
      var $productContainer = this.activeProductContainer;
      if (this.offers[offerId]['html_labels'] == null) $productContainer.find(this.labelContainer).html('');else $productContainer.find(this.labelContainer).html(this.offers[offerId]['html_labels']);
    },

    /** устанавливаем новый цвет */
    setColorName: function setColorName(offerId, colorNameBlock) {
      var colorName = this.getColorName(offerId);
      if (colorName === null) return;
      var $productContainer = this.activeProductContainer;
      $productContainer.find(colorNameBlock).text(colorName);
    },

    /** устанавливаем картинку */
    setProductPicture: function setProductPicture($img, picture) {
      if (picture === null) return;
      $img.attr('src', picture);
    },

    /** проверяем доступность */
    checkOfferAvail: function checkOfferAvail(offerId) {
      var $productContainer = this.activeProductContainer;

      if (this.offers[offerId]['avail']) {
        $productContainer.find(this.catalogProductListItemAddBtn).show();
        $productContainer.find(this.catalogProductListItemNotAvail).hide();
      } else {
        $productContainer.find(this.catalogProductListItemAddBtn).hide();
        $productContainer.find(this.catalogProductListItemNotAvail).show();
      }
    },

    /** меняем картинки товара */
    changeProductPicture: function changeProductPicture(offerId, action) {
      var offerPictures = this.getProductPictures(offerId);
      var $productContainer = this.activeProductContainer;
      var $img = $productContainer.find(this.catalogProductListItemImg + ' img');

      if (action === 'hover_on') {
        this.setProductPicture($img, offerPictures['secondPicture']);
      } else if (action === 'hover_off') {
        this.setProductPicture($img, offerPictures['firstPicture']);
      } else if (action === 'color_select') {
        this.setProductPicture($img, offerPictures['secondPicture']);
      }
    },

    /** сдвигаем массив офферов малой палитры вправо на 1 эл-т */
    shiftSmallPaletteOffers: function shiftSmallPaletteOffers() {
      var oldSmallPaletteOffers = this.getSmallPaletteOffers();
      if (!oldSmallPaletteOffers.length) return;
      if (this.activeOfferId == null) return; // выбранный цвет перемещаем в начало

      this.smallPaletteOffers = [];
      this.smallPaletteOffers[0] = this.activeOfferId;
      var delta = 1;
      var isActiveOffer = false;

      for (var i in oldSmallPaletteOffers) {
        if (i > 0) {
          // если выбранный оффер уже есть в текущей палитре
          if (this.activeOfferId === oldSmallPaletteOffers[i - 1] && !isActiveOffer) {
            isActiveOffer = true;
            delta = 0;
          }

          this.smallPaletteOffers[i] = oldSmallPaletteOffers[i - delta];
        }
      }
    },

    /** "сдвигаем" малую палитру вправо на 1 эл-т */
    shiftSmallPalette: function shiftSmallPalette() {
      var this_ = this;
      if (this.activeProductContainer == null) return;
      if (!this.smallPaletteOffers.length) return;
      var $offers = this.activeProductContainer.find(this.catalogProductListItemColor);
      $offers.each(function (k, v) {
        var offerId = this_.smallPaletteOffers[k];
        var colorPicture = this_.offers[offerId]['colorPattern']['picture'];
        $(this).attr('data-scu', offerId).find('img').attr('src', colorPicture);

        if (k === 0) {
          $(this).addClass('active');
          var colorName = this_.offers[offerId]['colorPattern']['name'];
          this_.setColorName(offerId, this_.catalogProductListItemColorName);
        }

        if (k !== 0) {
          $(this).removeClass('active');
        }
      }); // обнуляем массив офферов малой палитры

      this.smallPaletteOffers = [];
    },

    /** постраничная подгрузка */
    loadMoreItems: function loadMoreItems() {
      var this_ = this;
      var pageNumber = parseInt(window.navParams.NavPageNomer) + 1;
      $('.Spinner__Container').addClass('show');
      var data = {};
      data['PAGEN_' + window.navParams.NavNum] = pageNumber;
      $.ajax({
        'type': 'GET',
        'url': window.location.href,
        'data': data,
        'dataType': 'json',
        success: function success(data) {
          $('.Listing.js-listing').append(data.items);
          $('.Spinner__Container').removeClass('show');
          window.navParams.NavPageNomer = '' + pageNumber;
          new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"]('.js-preview-product-slider', {
            modules: [swiper__WEBPACK_IMPORTED_MODULE_0__[/* Navigation */ "a"], swiper__WEBPACK_IMPORTED_MODULE_0__[/* Pagination */ "b"]],
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: '.product-card--mobile .swiper-pagination'
            }
          });
          sliderCardPrewiew();
        }
      });
    }
  };
})(window);

function showM() {
  $('#notifyModal').show();
}

function initNotify() {
  // Подписка на товар
  $(document).on('submit', '#formNotify', function (event) {
    event.preventDefault();
    var form = $(this);
    var error = false;
    form.find('.is-invalid').removeClass('is-invalid');
    $('.form-error').css('visibility', 'hidden');
    form.find('.required').each(function () {
      if ($(this).attr('type') == 'text') {
        if ($(this).val().length == 0) {
          $(this).addClass('is-invalid');
          error = true;
        }
      } else if ($(this).attr('type') == 'email') {
        if ($(this).val().length > 0 && ($(this).val().match(/.+?\@.+/g) || []).length == 1) {} else {
          $(this).addClass('is-invalid');
          error = true;
        }
      } else if ($(this).attr('type') == 'checkbox') {
        if ($(this).is(':checked')) {} else {
          $(this).parents('.checkbox').addClass('is-invalid');
          error = true;
        }
      }
    });

    if (!error) {
      $.ajax({
        type: "GET",
        url: form.attr('action'),
        data: form.serialize(),
        success: function success(data) {
          $('#formNotify').html(data);
        }
      });
    }
  });
}

new swiper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "c"]('.js-preview-product-slider', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__[/* Navigation */ "a"], swiper__WEBPACK_IMPORTED_MODULE_0__[/* Pagination */ "b"]],
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.product-card--mobile .swiper-pagination'
  }
});

function sliderCardPrewiew() {
  /*$(document).on('mouseenter', '.js-hover-card-slider li', function() {
      const el = $(this);
      const img = el.attr('data-src-img');
      const faceImg = el.closest('.ProductBox__Image').find('.face-img');
      
      faceImg.attr('src', img);
       const id = $(this).attr('data-img-id');
      const bullet = $(this).closest('.ProductBox__Preview').find(`.product-card__bullets .product-card__bullet[data-bullet-id="${id}"]`);
      const otherBullets = $(this).closest('.ProductBox__Preview').find(`.product-card__bullets .product-card__bullet`);
       otherBullets.removeClass('active');
      bullet.addClass('active');
  });*/

  /*$('.js-hover-card-slider').each(function() {
      $(this).find('li').each(function(index) {
          $(this).attr('data-img-id', index);
           $(this).on('mouseenter', function() {
              const id = $(this).attr('data-img-id');
              const bullet = $(this).closest('.ProductBox__Preview').find(`.product-card__bullets .product-card__bullet[data-bullet-id="${id}"]`);
              const otherBullets = $(this).closest('.ProductBox__Preview').find(`.product-card__bullets .product-card__bullet`);
               otherBullets.removeClass('active');
              bullet.addClass('active');
          });
      });
  });*/
  $('.product-card__bullets').each(function () {
    $(this).find('.product-card__bullet').each(function (index) {
      $(this).attr('data-bullet-id', index);
    });
  });
}

sliderCardPrewiew();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ })

/******/ });