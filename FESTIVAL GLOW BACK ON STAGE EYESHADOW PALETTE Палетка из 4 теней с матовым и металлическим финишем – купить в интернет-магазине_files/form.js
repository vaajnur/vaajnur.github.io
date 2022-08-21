window.emailRegexp = /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,4})$/;

$(function () {

    /* при вводе mail меняем login (form registration) */

    $('body').on('input keyup', '#js-email-value', function(e) {
        $('#js-login-value').val($('#js-email-value').val());
    });



    /* маска для телефона */
    var telInp = $('input[type="tel"]');

    telInp.each(function () {
        // $(this).mask("+7 (999) 999-99-99");
    });

    /* валидация формы */

    $.validator.addMethod("mailFormatOrder", function (value, element) {
        return (window.emailRegexp.test(value));
    }, 'Пожалуйста, заполните поле');

    $.validator.addMethod("mailFormat", function(value, element) {
        return (window.emailRegexp.test(value));
    }, 'Пожалуйста, заполните поле');

    $.validator.addMethod("phoneFormat", function(value, element) {
        return ((
          value.indexOf('+7(89') === -1 &&
          value.indexOf('+7 (89') === -1 &&
          value.indexOf('+789') === -1 &&
          value.indexOf('(79') === -1 &&
          value.indexOf('(89') === -1
        ));
    }, 'Пожалуйста, заполните поле');

    $.validator.addMethod("spamCheck", function(value, element) {
        return ((value.indexOf('http') == -1 && value.indexOf('www') == -1));
    }, 'Пожалуйста, заполните поле');

    $.validator.addMethod("requiredConfirm", function (value, element) {
        value = $.trim(value);
        if (!value)
            return false;
        else
            return true;
    }, 'Пожалуйста, заполните поле');

    var rules = {};

    initCheckForm();

    function initCheckForm(objForm) {
        $('body').find('form.check-form').each(function () {   // <- selects every <form> on page
            var $checkForm = $(this);

            $checkForm.find('.required').each(function () {
                var _name = $(this).attr('name');
                var _type = $(this).attr('type');

                if (_type == 'email') {
                    rules[_name] = {
                        requiredConfirm: true,
                        email: true,
                        mailFormatOrder: true
                    };
                } else if (_type == 'tel') {
                    rules[_name] = {
                        requiredConfirm: true
                    };
                } else {
                    rules[_name] = {requiredConfirm: true};
                }
            });


            $checkForm.validate({
                rules: rules,
                submitHandler: function (event, validator) {
                    var _error = false;

                    // отправка формы
                    if (!_error) {
                        //  alert('okey');
                        sendForm($checkForm);
                    } else {
                        //   alert('error');
                    }
                    return false;
                },
                invalidHandler: function (event, validator) {

                }
            });
        });
    }

    /* === USER EVENT form === */

    $('body').on('submit', '.js-form-user', function (e) {
        e.preventDefault();
        sendForm($(this));
    });


    $('.birthday-selects').on('click', '.dropdown-item', function (e) {
        e.preventDefault();
        $(this).closest('.dropdown').find('.dropdown-toggle').html($(this).attr('data-value') + '<i></i>');
        $(this).closest('.dropdown').attr('data-birthday', $(this).attr('data-value'));

        var day = $('.birthdayDay').attr('data-birthday');
        var month = $('.birthdayMonth').attr('data-birthday');
        var year = $('.birthdayYear').attr('data-birthday');

        $('#personaBirthday').val(day + '.' + month + '.' + year);
    });



    /* === SUBSCRIBERS - form === */

    $('body').on('click', '.js-subscruber-mobile', function(e){
        e.preventDefault();
        $('.subscriber-mobile .modal').modal('show');
        $('body').find('.modal-backdrop').css('z-index', 0); // kiko-145
    });


    /* === ALERTS - form === */
    $('body').on('click', '.js-alert-close', function (e) {
        e.preventDefault();
        alertClose($(this));
    });

    function sendForm(formObj) {

        var $form = formObj,
            action = $form.attr('action'),
            dataForm = $form.serializeArray(),
            //block = $form.closest('.lk-user-block'),
            blockAlert = $form.find('.alert');

        $.ajax({
            type: "POST",
            url: action,
            data: dataForm,
            success: function (msg) {

                if ($form.attr('id') == 'js-subscribe') {

                    /** Retail Rocket */
                    var _email = $form.find('input[name="EMAIL"]').val();
                    (window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() { rrApi.setEmail(_email); });

                    if (msg == 'Y') {
                        alertForm(blockAlert, 'Y');
                        $form.find('input[name=ACTION]').val('unsubscribe');
                        $form.find('input[name=send]').val('Отменить подписку');
                    } else {
                        alertForm(blockAlert, 'N');
                        $form.find('input[name=ACTION]').val('subscribe');
                        $form.find('input[name=send]').val('Подписаться');
                    }
                } else if ($form.attr('id') == 'js-user-update') {
                    alertForm(blockAlert, msg);
                }
                else {
                    $('#form-ajax').html(msg);
                }
                 initCheckForm();
            }
        });
    }

    function alertForm(blockObj, alert = 'N') {

        var $block = blockObj,
            successText = blockObj.attr('data-success'),
            dangerText = blockObj.attr('data-danger'),
            errorText = blockObj.attr('data-error'),
            closeAlert = '<a href="#" class="alert-close js-alert-close"></a>';

        $block.removeClass();
        $block.html('');

        if (alert == 'Y') {
            $block.addClass('alert alert-success');
            $block.html(successText);
            $block.append(closeAlert);
        } else if(alert == 'E') {
            $block.addClass('alert  alert-error');
            $block.html(errorText);
            $block.append(closeAlert);
        } else if(alert == 'CLOSE') {
            $block.addClass('alert');
        } else {
            $block.addClass('alert alert-danger');
            $block.html(dangerText);
            $block.append(closeAlert);
        }
    }

    function alertClose(objClose) {
        let blockObj = objClose.closest('.alert');
        alertForm(blockObj, 'CLOSE');
    }

});