$(document).ready(function () {
    function parallax(layer, container, x, y) {
        var $layer_1 = layer,
            $container = container,
            container_w = $container.width(),
            container_h = $container.height();

        $(window).on('mousemove.parallax', function(event) {
            var pos_x = event.clientX,
                pos_y = event.clientY,
                left  = 0,
                top = 0;

            left = container_w / 2 - pos_x;
            top  = container_h / 2 - pos_y;

            TweenMax.to(
                $layer_1,
                1,
                {
                    css: {
                        transform: 'translateX(' + left / x + 'px) translateY(' + top / y + 'px)'
                    },
                    ease:Expo.easeOut,
                    overwrite: 'all'
                });
        });

    }

    $(function () {
        parallax($('.stars'), $('.main'), -50, -50);
        parallax($('.decor_text'), $('.features'), -50, -50);
        parallax($('.decor_bg, .dots'), $('.in_addition_models_on_site'), -50, -50);
    });

    $(function () {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').addClass('active');
            } else {
                $('.scrollup').removeClass('active');
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
});

