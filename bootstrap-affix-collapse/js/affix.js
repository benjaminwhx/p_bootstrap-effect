$('#myScrollspy').on('activate.bs.scrollspy', function () {
    verifyAffixCollapse();
});

$('#myScrollspy').on('affixed-top.bs.affix', function () {
    verifyAffixCollapse();
});

// Remove or add collapse class to child navs
function verifyAffixCollapse() {
    $("#myScrollspy li .nav").each(function() {
        if (!$(this).parent().hasClass('active')) {
            $(this).addClass('collapse');
        } else {
            $(this).removeClass('collapse');
        }
    });
}