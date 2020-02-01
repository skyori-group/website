; (function () {
  $(document).ready(function () {

    var animateScroll = function (_this, event) {
      event.preventDefault();
      var id  = $(_this).attr('href'),
          top = $(id).offset().top-70;
      $('body,html').animate({scrollTop: top}, 1000);
    };

    $("#about").on("click","a.nav-vac", function (event) {
      animateScroll(this, event);
    });

    $('.multiple-items-solutions').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed:3000,
      arrows: true,
      nextArrow:'<a class="fa fa-angle-right fa-3x nextArrow" aria-hidden="true"></a>',
      prevArrow:'<a class="fa fa-angle-left fa-3x prevArrow" aria-hidden="true"></a>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

      $('.navbar-brand').on("click", function (e) {
        $('.modal').modal('hide');
      });

      $('.modal').on("hidden.bs.modal", function (e) {
        if($('.modal:visible').length) {
          $('body').addClass('modal-open');
        }
      }).on("show.bs.modal", function (e) {

        $(this).find('.modal-dialog').addClass($(e.relatedTarget).data('pos'));
        
        if($('.modal:visible').length) {
        }
      });

    $(".nav").find(".active").removeClass("active");
    $('a[href="' + location.pathname + '"]').addClass("active");


    var setModalSendContent = function (isBtn=false, title=undefined) {
      if (title === undefined) {
        var linkTxt = "Вернуться";
        var selectVal = isBtn ? "Junior-разработчик" : "Другое"
      } else {
        var linkTxt = "Вернуться к вакансии " + title;
        var selectVal = title;
      }

      $("#send-modal #back-to-modal").text(linkTxt);
      $("#send-modal .c-choice-dropdown select").val(selectVal).change();
      $("#send-modal .c-choice-dropdown select").trigger("click");
    };

    $(document).on("click", ".btn-primary", function () {
      $("#otherTxt").css("display", "none");
      var title = $(this).data('title');
      setModalSendContent(true, title);
    });

    $(document).on("click", "#otherVac", function () {
      $("#otherTxt").css("display", "block");
      setModalSendContent();
    });
  });
})();