$(function() {
    $(document).on('click', '.js-basket-shade-dropdown .js-shade-dropdown-option', function() {
        let el = $(this);
        let skuId = el.data('scu');
        let _id = $(this).closest('.CartItem--MiniCart').data('id');
        let qty = $(this).closest('.CartItem--MiniCart').find('.js-quantity-box input[type="number"]').val();
        let data = {
            scu: skuId,
            qty: qty,
        }
        $.ajax({
            url: '/ajax/add_item_basket.php',
            dataType: 'json',
            data: {
                scu: skuId,
                qty: qty,
            },
            type: 'POST',
            success: function(data) {
                if (data.success) {
                    let _newId = $(data.html).find('.CartItem--MiniCart').data('id');

                    /** Retail Rocket */
                    try {
                        rrApi.addToBasket(skuId)
                    } catch (e) {
                    }

                    FBAddToCart(skuId, data.item);

                    reloadSmallBasket(_id, [{id: _newId, qnt: 1}]);
                } else {
                    if (data.msg === 'buy_loyalty') {
                        showBuyLoyaltyPopup();
                    }
                }
            }
        });
    });

    // add to basket
    $(document).on('click', '.js-addtocart', function(e) {
        // if ($(".js-cart-view").length) return;
        var this_ = $(this);
        var productId = $(this).attr('data-product-id');
        var qty = parseInt($(this).closest('.js-product-detail').find('.js-quantity-box #js-qty').val()) || $(this).data('qty');

        e.preventDefault();
        $.ajax({
            url: '/ajax/add_item_basket.php',
            dataType: 'json',
            data: {
                scu: productId,
                qty: qty,
            },
            type: 'POST',
            success: function(data) {
                if (data.success) {
                    if ($(".js-cart-view").length) {
                        $('#emptyBasket').remove();
                        ajaxUpdate({'action': 'updateOrder'});
                    }
                    printSmallBasket(data);

                    var productName = this_.data('product-name');
                    showAddToBasketNotification(productName);

                    /** Retail Rocket */
                    try {
                        rrApi.addToBasket(productId)
                    } catch (e) {
                    }

                    FBAddToCart(productId, data.item);

                    generalPixel.postClick('a2');
                } else {
                    if (data.msg === 'buy_loyalty') {
                        showBuyLoyaltyPopup();
                    }
                }
            }
        });
    });

    // change basket
    $('body').on('change', '.CartItem--MiniCart .CartItem__Quantity input[name="qty"]', function() {
        var _input = $(this);
        var _qty = parseInt(_input.val())
        var _limit = parseInt(_input.data('limit'));
        if (_qty <= 0) {
            var _id = $(this).closest('.CartItem--MiniCart').data('id');
            reloadSmallBasket(_id);
            return;
        }
        if (_qty > _limit) {
            _qty = _limit;
        }
        _input.val(_qty);
        reloadSmallBasket();
    });

    $('body').on('click', '.js-to-process-btn', () => {
        BX.showWait();
    });

    var _timer = false;
    $('body').off('click', '.CartItem--MiniCart .CartItem__Quantity .Plus-small, .CartItem--MiniCart .CartItem__Quantity .Minus-small');
    $('body').on('click', '.CartItem--MiniCart .CartItem__Quantity .Plus-small, .CartItem--MiniCart .CartItem__Quantity .Minus-small', function() {
        var _add = $(this).hasClass('Plus-small') ? 1 : -1;
        var _input = $(this).closest('.CartItem__Quantity').find('input[name="qty"]');
        var _limit = parseInt(_input.data('limit'));
        var _qty = parseInt(_input.val()) + _add;
        if (_qty < 1) {
            var _id = $(this).closest('.CartItem--MiniCart').data('id');
            reloadSmallBasket(_id);
            return;
        }
        if (_qty > _limit) _qty = _limit;

        _input.val(_qty);

        if (_timer) clearTimeout(_timer);
        _timer = setTimeout(reloadSmallBasket, 200);
    });

  // delete from basket
  $('body').on('click', '.CartItem--MiniCart .CartItem__Delete button', function() {
        var _id = $(this).closest('.CartItem--MiniCart').data('id');
        var skuId = $(this).closest('.CartItem--MiniCart').data('sku');

        /** RetailRocket start */
        if (skuId && (typeof rrApi !== 'undefined')) {
          rrApi.removeFromBasket(skuId);
        }
        /** RetailRocket end */

        reloadSmallBasket(_id);
    });
});

function reloadSmallBasket(_deleteId, _exceptionIds = []) {
    var _basket = {};
    $('.MiniCart__Items .CartItem--MiniCart').each(function() {
        var _id = $(this).data('id');
        var _qty = $(this).find('.CartItem__Quantity input[name="qty"]').val();
        var _max = $(this).find('.CartItem__Quantity input[name="qty"]').data('limit');
        _qty = parseInt(_qty);
        _max = parseInt(_max);
        _qty = (_qty <= _max) ? _qty : _max;

        if (_deleteId && _deleteId === _id) {

        } else {
            _basket[_id] = _qty;
        }
    });
    for (let item in _exceptionIds) {
        _basket[_exceptionIds[item].id] = _exceptionIds[item].qnt;
    }

    BX.showWait();
    $.post('/ajax/small-basket.php', {basket: _basket}, function(data) {
        printSmallBasket(data);
        BX.closeWait();
    }, 'json');
}

function printSmallBasket(data) {
    // Update counter
    $('[data-cart-count]').removeClass('hidden').text(data.count);

    $('.MiniCart .OverlayPanel__FirstLayer').html(data.html);
}


/** Retail Rocket - add to basket */
function rrAddToBasket(offerId, quantity) {
    $.ajax({
        url: '/ajax/add_item_basket.php',
        dataType: 'json',
        data: {
            scu: offerId,
            qty: quantity,
        },
        type: 'POST',
        success: function(data) {
            if (data.success) {
                printSmallBasket(data);

                try {
                    rrApi.addToBasket(offerId);
                } catch (e) {
                }

                FBAddToCart(offerId, data.item);
            } else {
                if (data.msg === 'buy_loyalty') {
                    showBuyLoyaltyPopup();
                }
            }
        }
    });
    return false;
}

function showAddToBasketNotification(productName) {
    const isCartPage = $(".js-cart-view").length;
    let notification;
    $('body').append(`<div class="GlobalNotification js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-success  cart   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave " role="presentation" height="120" width="120"><use xlink:href="#wave"><svg id="wave" viewBox="0 0 176.43 24"><title>wave</title><path d="M88.21 24h85c-23 0-31.29-2.41-52-13-22.5-11.5-33-11-33-11s-10.5-.5-33 11c-20.71 10.59-29 13-52 13z" fill="#e0e9d5" data-name="Layer 2"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon check-mark " role="presentation" height="20" width="20"><use xlink:href="#check-mark"><svg id="check-mark" viewBox="0 0 18 18"><title>check-mark</title><path fill-rule="evenodd" d="M7.924 12.843l6.9-6.169a.497.497 0 000-.758l-.848-.759a.651.651 0 00-.849 0L7.5 10.187 4.873 7.84a.651.651 0 00-.849 0l-.848.759a.497.497 0 000 .758l3.9 3.487a.65.65 0 00.848 0z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft">${isCartPage ? '' : '<button aria-live="assertive" data-type="secondary" class="Button close">Продолжить покупки</button>'}</div><div class="GlobalNotification__Text text-center"><span data-qty="1"></span><div class="secondary">Вы добавили в корзину</div><div class="primary">${productName}</div></div><div class="GlobalNotification__ButtonRight">${isCartPage ? '' : '<a class="Button" href="/personal/cart/" onclick="generalPixel.postClick(\'a3\')">Перейти в корзину</a>'}</div></div></div></div></div>`);
    notification = $('.js-global-notification');
    setTimeout(() => {
        notification.addClass('show');        
    }, 100);

    setTimeout(() => {
        notification.removeClass('show');
    }, 5000);
    if (isCartPage) {
        setTimeout(() => {
            notification.removeClass('show');
        }, 2000);
        setTimeout(() => {
            notification.remove();
        }, 2400);
    }
}

function showBuyLoyaltyPopup() {
    $.magnificPopup.open({
        items: {
            src: '#popup-loyal-alert',
            type: 'inline'
        },
        midClick: true,
        mainClass: 'mfp-loyal-alert',
        callbacks: {
            open: function() {
                $('html').addClass('mobile-fixed');
            },
            close: function() {
                $('html').removeClass('mobile-fixed');
            }
        }
    });
}

const cartPromoButton = $('.js-CartPromo-button');
const promoInput = $('#promo');
const couponError = $('#couponError');
const couponSuccess = $('#couponSuccess');

cartPromoButton.on('click', (evt) => {
    evt.preventDefault();
    ajaxUpdate();

    if (!ajaxUpdate()) {
        $('[data-component="FloatingLabel"]').removeClass('floatl--active');
        $('.CartPromo input#promo').addClass('error');
    } 
});

promoInput.on('input', () => {
    if (promoInput.val().trim()) {
        couponError.text('');
        couponError.addClass('none');
        couponSuccess.addClass('none');
    }
});

promoInput.on('input', () => {
    if (promoInput.val().trim() === ''
        && window.couponSuccess !== undefined
        && window.couponSuccess.length > 0
    ) {
        promoInput.blur();
        promoInput.closest('.form-group').removeClass('floatl--active');
        ajaxUpdate();
    }
});

if (document.querySelector('.js-fit-text-area') !== null) {
    document.querySelector('.js-fit-text-area').addEventListener('input', (evt) => {
        evt.target.style.height = "";
        evt.target.style.height = evt.target.scrollHeight + 3 + "px";
    })
}

function FBAddToCart(offerId, offerData) {
    offerId = parseInt(offerId);
    if (isNaN(offerId)) {
        return;
    }

    offerData = offerData || {};

    var quantity = parseInt(offerData.quantity) || 1;

    var data = {
        content_ids: [offerId],
        content_type: 'product',
        contents: [{id: offerId, quantity: quantity}],
    };

    if (offerData.name) {
        data.content_name = offerData.name;
    }

    if (offerData.price) {
        var price = parseFloat(offerData.price);

        if (!isNaN(price)) {
            data.value = price * quantity;
            data.currency = 'RUB';
        }
    }

    try {
        fbq('track', 'AddToCart', data);
    } catch (e) {
    }
}
