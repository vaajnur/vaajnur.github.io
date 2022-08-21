$(function() {
    initSubscribe();
});

function initSubscribe() {
    if ($('#popup-subscribe').length) {
        setTimeout(
            function() {
                $.magnificPopup.open({
                    items : {
                        src : '#popup-subscribe',
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
                        },

                        open: function() {
                            $('body').addClass('popup-opened');
                        },

                        close: function() {
                            let query = {
                                c: 'jamilco:subscribe.popup',
                                action: 'close',
                                mode: 'class'
                            };

                            $.ajax({
                                url: '/bitrix/services/main/ajax.php?' + $.param(query, true),
                                type: 'POST',
                                dataType: 'json',
                                data: {
                                    'SITE_ID': 's1',
                                    'sessid': BX.bitrix_sessid()
                                },
                                success: function (response) {}
                            });

                            $('html').removeClass('vex-open');
                            $('body').removeClass('popup-opened');
                        }
                    }
                });
            },
            10000
        );
    }

    $('[data-subscribe-form]').each(function () {
        let validate = $(this);
        if (validate.data('init') === 'Y') {
            return true;
        }
        validate.data('init', 'Y');

        var formValidate = validate.validate({
            rules: {
                email: {
                    email: true,
                    mailFormat: true
                }
            },

            submitHandler: function(form) {
                let _form = $(form);
                var _email = _form.find('input[name="email"]').val();

                $.post(
                    '/ajax/subscribe.php',
                    {
                        sessid: BX.bitrix_sessid(),
                        ACTION: 'subscribe',
                        EMAIL: _email,
                        confirm: 'N'
                    },
                    function(response) {
                        /** Retail Rocket */
                        window['rrApiOnReady'] = window['rrApiOnReady'] || [];
                        window['rrApiOnReady'].push(function() {
                            rrApi.setEmail(_email);
                        });

                        if (typeof ym !== 'undefined') {
                            ym(56642815, 'reachGoal', 'Subscribe');
                        }

                        if (response === 'Y') {
                            _form.remove();

                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                event: "DlEvent",
                                eventCategory: "kiko",
                                eventAction: "form_send",
                                eventLabel: "subscribe"
                            });

                            $('body').append(`<div class="GlobalNotification GlobalNotification--SingleCta js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-success"><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave " role="presentation" height="120" width="120"><use xlink:href="#wave"><svg id="wave" viewBox="0 0 176.43 24"><title>wave</title><path d="M88.21 24h85c-23 0-31.29-2.41-52-13-22.5-11.5-33-11-33-11s-10.5-.5-33 11c-20.71 10.59-29 13-52 13z" fill="#e0e9d5" data-name="Layer 2"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon check-mark " role="presentation" height="20" width="20"><use xlink:href="#check-mark"><svg id="check-mark" viewBox="0 0 18 18"><title>check-mark</title><path fill-rule="evenodd" d="M7.924 12.843l6.9-6.169a.497.497 0 000-.758l-.848-.759a.651.651 0 00-.849 0L7.5 10.187 4.873 7.84a.651.651 0 00-.849 0l-.848.759a.497.497 0 000 .758l3.9 3.487a.65.65 0 00.848 0z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft"></div><div class="GlobalNotification__Text text-center">
                                    <div class="secondary">Поздравляем, вы подписались на рассылку новостей от KIKO MILANO!</div>
                                    <div class="primary">Проверьте свою электронную почту сейчас, чтобы узнать, какая акция подходит вам.</div><br>
                                    <div class="secondary">Хотите воспользоваться дополнительными преимуществами?</div>
                                    <div class="primary">Откройте для себя <a href="/loyalty/"><strong>мир KIKO KISSES</strong></a>: 1 балл = 1 рублю.</div>
                                    <div class="primary">Плюс, эксклюзивно для вас, скидки, акции, новости и многое другое!</div>
                                </div><div class="GlobalNotification__ButtonRight"><button aria-live="assertive" class="Button close">OK</button></div></div></div></div></div>`);

                            setTimeout(() => {
                                $('.js-global-notification').addClass('show');
                            }, 100);
                        } else {
                            $('body').append(`<div class="GlobalNotification GlobalNotification--SingleCta js-global-notification" aria-live="assertive"><div class="mod-notification mod-notification-error  icon-alert   "><div class="container"><span class="GlobalNotification__Icon"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon wave-err " role="presentation" height="120" width="120"><use xlink:href="#wave-err"><svg id="wave-err" viewBox="0 0 170 24"><title></title><path d="M85 24h85c-23 0-31.29-2.41-52-13C95.5-.5 85 0 85 0S74.5-.5 52 11C31.29 21.59 23 24 0 24z" fill="#f6cfcf"></path></svg></use></svg><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon tip " role="presentation" height="20" width="20"><use xlink:href="#tip"><svg id="tip" viewBox="0 0 20 20"><title></title><path fill-rule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2.222a7.778 7.778 0 100 15.556 7.778 7.778 0 000-15.556zm.72 5.302v8.043H9.522V7.524h1.198zm.093-3.08v1.323H9.444V4.444h1.37z"></path></svg></use></svg></span><div class="inner"><div class="GlobalNotification__ButtonLeft"></div><div class="GlobalNotification__Text text-center">
                                    <div class="secondary">Введенный адрес электронной почты уже зарегистрирован и подписан на рассылку новостей.</div>
                                    <div class="primary">Пожалуйста, введите другой адрес электронной почты.</div>
                                </div><div class="GlobalNotification__ButtonRight"><button aria-live="assertive" class="Button close">OK</button></div></div></div></div></div>`);

                            setTimeout(() => {
                                $('.js-global-notification').addClass('show');
                            }, 100);
                        }
                    }
                );

                return false;
            }
        });
    });
}
