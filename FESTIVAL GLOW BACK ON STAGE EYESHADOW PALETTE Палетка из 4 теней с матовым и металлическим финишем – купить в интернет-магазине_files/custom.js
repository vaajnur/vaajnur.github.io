$(function () {
    /**
     * Catalog sorting
     */
    $('.js-sorting-listing').on('change', function (e) {
        var $this = $(this);
        var sort = $this.find('option:selected').val() || '';

        if (sort) {
            window.location.href = BX.Uri.addParam(window.location.href,{'sort':sort})
        }
    });
    $('.TopPromoLine__items-list').slick({
        infinite: true,
        slidesToShow:1,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

function openModal(_id) {
    let isGiftsOpen = false;

    $.magnificPopup.open({
        items : {
            src : '#' + _id,
        },
        type:'inline',
        midClick: true,
        closeMarkup: '<button type="button" class="vex-close mfp-close popup__close"></button>',
        removalDelay: 500,
        alignTop: true,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = 'mfp-zoom-in vex';
                $('html').addClass('vex-open');

                hideScroll();

                if (_id === 'js-popup-gifts') {
                    this.st.mainClass = 'mfp-zoom-in vex mfp-center mfp-gift';
                }

                setTimeout(() => {
                    if ($(this.content[0]).find('[data-slick-popup]').length > 0) {
                        $(this.content[0]).find('[data-slick-popup]').each(function() {
                            let data = $.parseJSON($(this).attr('data-slick-popup'));
                            $(this).slick(data)
                        })
                    }
                }, 300)
            },
            open: function() {
                $('body').addClass('popup-opened');

                if (_id === 'js-popup-gifts') {
                    this.st.mainClass = 'mfp-zoom-in vex mfp-center mfp-gift';
                    isGiftsOpen = true
                }

                if ($(this.content[0]).find('[data-slick-popup]').length > 0) {
                    $(this.content[0]).find('[data-slick-popup]').each(function() {
                        let data = $.parseJSON($(this).attr('data-slick-popup'));
                        $(this).slick(data)
                    })
                }
            },
            close: function() {
                $('html').removeClass('vex-open');
                $('body').removeClass('popup-opened');

                showScroll();

                if (_id === 'js-popup-gifts') {
                    window.popupGiftsClosed = true;
                }

                if (_id === 'popup-cart-error') {
                    ajaxUpdate();
                }

                // if ($(this.content[0]).find('[data-slick-popup]').length > 0) {
                //     $(this.content[0]).find('[data-slick-popup]').each(function() {
                //         $(this).slick('unslick')
                //     })
                // }
            }
        }
    });

    return false;
}

var p_currentPosition = null,
    p_currentTop = null,
    p_scrollTop = null;
function hideScroll() {
    let body = document.body;
    p_scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
    p_currentPosition =
        body.style.position === 'fixed' ? 'static' : body.style.position; // запоминаем текущее значение position
    p_currentTop = body.style.top; // запоминаем текущее значение top
    body.style.position = 'fixed';
    body.style.top = -p_scrollTop + 'px';
}

function showScroll() {
    let body = document.body;
    body.style.position = p_currentPosition;
    body.style.top = p_currentTop;
    document.documentElement.scrollTop = p_scrollTop;
}

function showMessage(_title, _text, _hideCloseBtn) {
    var _popup = $('#showMessage');
    _popup.find('.modal-header h4').html(_title);
    _popup.find('.modal-body').html(_text);

    openModal(_popup.attr('id'));

    $('#showMessage').find('.popup__close').removeClass('hidden');
    if (_hideCloseBtn) $('#showMessage').find('.popup__close').addClass('hidden');
}

BX.showWait = function(node, msg) {
    $('.bx-core-waitwindow').remove();

    node = BX(node) || document.body || document.documentElement;
    msg = msg || BX.message('JS_CORE_LOADING');

    var container_id = node.id || Math.random();

    var obMsg = node.bxmsg = document.body.appendChild(BX.create('DIV', {
        props : {
            id        : 'wait_' + container_id,
            className : 'bx-core-waitwindow'
        },
        text  : msg
    }));
    return obMsg;
};

BX.closeWait = function(node, obMsg) {
    $('.bx-core-waitwindow').remove();
    return false;
};
document.addEventListener('DOMContentLoaded', function(){
    // check cookie accept
                let cookieDate = localStorage.getItem('cookieDate');
                let cookieNotification = document.querySelector('.js-cookie_notification');

                let cookieBtnAccept = cookieNotification.querySelector('.js-cookie_accept');
                let cookieBtnClose = cookieNotification.querySelector('.js-cookie_close');
                // if cookie acept missing - show notification
                if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
                    // document.querySelector('.page').classList.add('dark-theme');
                    cookieNotification.classList.add('show');
                }

                // cookie accept btn click
                cookieBtnAccept.addEventListener('click', function(){
                    localStorage.setItem( 'cookieDate', Date.now() );
                    cookieNotification.classList.remove('show');
                })

                cookieBtnClose.addEventListener('click', function(){
                    cookieNotification.classList.remove('show');
                })

});

$(window).on('scroll orientationchange', function() {
    let top = $(window).scrollTop();
    let up = $('[data-btn-up]');

    if (top > $(window).height()) {
        up.addClass('show');
    } else {
        up.removeClass('show');
    }
});

$(document).on('click', 'a[data-scroll-to-single]', function (event) {
    if ($($.attr(this, 'href')).length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    }
});