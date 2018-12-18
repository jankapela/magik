var mainPageModel = {
    navigationCollapsed: true
};

//smooth scroll
$(document).ready(function () {
    var nav = $('.nav');

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    /* NAV */
    var button = $('.nav-button');

    var sprawdz = 0;
    var links = $('.nav-link');

    links.each(function (index, link) {
        link.onclick = slideNav.bind(nav);
    });

    button.click(slideNav);

    function slideNav() {
        if (mainPageModel.navigationCollapsed) {
            $('.nav').addClass('show');
            $('.nav').removeClass('hide');
            toggleNavigation();
        } else {
            $('.nav').addClass('hide');
            $('.nav').removeClass('show');
            toggleNavigation();
        }
    }
});



function toggleNavigation() {
    mainPageModel.navigationCollapsed = !mainPageModel.navigationCollapsed;
}