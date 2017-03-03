$(function () {
    foreachElement();
})

function foreachElement() {
    $(".sideMenu > .nav li").each(function () {
        if ($(this).has(".nav").length > 0) {
            $(this).addClass("trigger");
            $(this).children("a").css("cssText", "background-image: url(https://zos.alipayobjects.com/rmsportal/QXUvPqksyqpgDAM.png)!important;")
                .attr("data-toggle", "collapse");
            $(this).children(".nav").addClass("collapse");
        }
    })
}

/**
 * 切换图标
 */
$('.sideMenu > .nav li > .nav').on('hide.bs.collapse', function () {
    $(this).prev().css("cssText", "background-image: url(https://zos.alipayobjects.com/rmsportal/QXUvPqksyqpgDAM.png)!important; background-color: white");
}).on('show.bs.collapse', function () {
    $(this).prev().css("cssText", "background-image: url(https://zos.alipayobjects.com/rmsportal/FlmUMyIfXKhQjcP.png)!important; background-color: white");
});