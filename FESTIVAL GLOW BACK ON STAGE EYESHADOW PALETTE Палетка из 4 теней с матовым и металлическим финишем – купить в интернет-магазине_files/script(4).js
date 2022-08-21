$(function() {
  const ratingError = $('.js-rating-error');
  var load_more = false;

  $('[data-component="SelectDropdown"] .js-dropdown-option').on('click', function() {
    let rating = parseInt($(this).data('value'));
    if (rating) {
      $('.Reviews .Reviews__List .Reviews__Item').addClass('hidden');
      $('.Reviews .Reviews__List .ReviewIndicator__Points[data-value="' + rating + '"]').closest('.Reviews__Item').removeClass('hidden');
      console.log('.Reviews .Reviews__List .ReviewIndicator__Points[data-value="' + rating + '"]');
    } else {
      $('.Reviews .Reviews__List .Reviews__Item').removeClass('hidden');
    }
  });

  $('[name="rating"]').on('change', () => {
    ratingError.hide();
  })

  $('#reviewForm').on('submit', function(e) {

    e.preventDefault();

    const $this = $(this);
    if (!$this.hasClass('wait')) {

      $this.addClass('wait');

      const sessid = BX.bitrix_sessid();
      const productId = $.trim($this.find('[name="product_id"]').val());
      const rating = $this.find('[name="rating"]:checked').val();
      const author = $.trim($this.find('[name="author"]').val());
      const headline = $.trim($this.find('[name="headline"]').val());
      const comment = $.trim($this.find('[name="comment"]').val());
      const offerId = $.trim($('.js-addtocart').data('productId'));

      if (Number(rating) === 0) {
        ratingError.show();
      }

      if (!productId || Number(rating) === 0 || author.length === 0 || headline.length < 5 || comment.length < 5) {
        $this.removeClass('wait');
        return false;
      }

      const query = {
        c: 'jamilco:reviews',
        action: 'add',
        mode: 'class'
      };

      $.ajax({
        url: '/bitrix/services/main/ajax.php?' + $.param(query, true),
        type: 'POST',
        dataType: 'json',
        data: {
          'SITE_ID': 's1',
          'sessid': sessid,
          'productId': productId,
          'offerId': offerId,
          'rating': rating,
          'headline': headline,
          'author': author,
          'comment': comment
        },
        success: function (response) {
          const $container = $this.closest('.Reviews__Write');
          if (response['status'] === 'success' && response['data']['success']) {
            $container.find('.Reviews__Write__Message').html(response['data']['message']).removeClass('hidden');
            $container.find('#reviewForm').addClass('hidden');
            $container.find('.Reviews__Write__Close').addClass('hidden');
          } else {
            $this.closest('.Reviews__Write').find('.Reviews__Write__Message').removeClass('hidden').html(response['data']['errors'].join('<br>'));
            $this.removeClass('wait');
          }
        }
      });
    }
  });

  $(document).on('click', '.Reviews__Item__btn', function (e) {
    e.preventDefault();

    let id = $(this).data('review');
    $.ajax({
      url: '/local/components/jamilco/reviews/templates/.default/ajax.php',
      type: 'POST',
      dataType: 'json',
      data: {
        id: id,
        action: 'show'
      },
      success: function (response) {
        $('[data-popup="review_answer"]').trigger('click');
        let container = $('.Reviews__Item--popup');
        $(container).find('.Reviews__Item__Author strong').html(response.reviews.author);
        $(container).find('.Reviews__Item__Date').html(response.reviews.date);
        $(container).find('.Reviews__Item__Date').attr('content', response.reviews.date);
        $(container).find('.ReviewIndicator__Points').attr('data-value', response.reviews.rating);
        $(container).find('.ReviewHeadline').html(response.reviews.title);
        $(container).find('.Reviews__Item__Body .message').html(response.reviews.text);
        $(container).parent().find('.Reviews__Btn-commit').attr('data-review-id', parseInt(response.reviews.id));
      }
    });
  });

  $(document).on('click', '.Reviews__Btn-commit', function (e) {
    e.preventDefault();

    let id = $(this).data('review-id');
    let comment = $('#commentReview').val();

    $.ajax({
      url: '/local/components/jamilco/reviews/templates/.default/ajax.php',
      type: 'POST',
      dataType: 'json',
      data: {
        id: id,
        message: comment,
        action: 'commit'
      },
      success: function (response) {
        if(response.status === 'success') {
          $('#popup-review .modal-body').html('<p class="h3">Ответ успешно добавлен!</p>');
        }
      }
    });
  });

  $(document).on('click', '.load_more .Reviews__Button', function (e) {
    e.preventDefault();

    if(load_more)
      return false;

    let targetContainer = $('.Reviews__AllReviews');
    let url = $(this).data('url');

    load_more = true;
    if (url !== undefined) {
      $.ajax({
        type: 'GET',
        url: url,
        data: {IS_AJAX: 'Y'},
        dataType: 'html',
        success: function(data){
          let elements = $(data).find('.Reviews__List'),
              pagination = $(data).find('.load_more');

          $('.Reviews__List').append($(elements).html());
          $('.load_more').html($(pagination).html());
          load_more = false;
        }
      });
    }
  });
});
