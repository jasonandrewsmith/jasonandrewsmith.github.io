$('.navbar-nav').on('click', '.nav-item a', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
});

$('.navbar-nav>li>a').on('click', () => {
    $('.navbar-collapse').collapse('hide');
});

$('.nav-link').on('click', (e) => {
    e.preventDefault();
});
