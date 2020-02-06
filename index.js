console.clear();

$(function () {
    $.scrollify({
        section: ".page",
        scrollbars: false,
        before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".page").each(function (i) {
                activeClass = "";
                if (i === 0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".page-indicator-box").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});

// 메뉴 여닫기
$('.menu-btn-1').click(function () {
    $('.open-menu-box').slideDown(1000);
    $('.close-menu-box').css('display', 'none');
});

$('.menu-btn-2').click(function () {
    $('.open-menu-box').slideUp(800);
    $('.close-menu-box').css('display', 'block');
});

// 더 알아보기 버튼 여닫기
$('.page-2 > .title-box-2 > h2 > div').click(function () {
    $('.page-2-open').css('left', '0');
});

$('.page-2-open').click(function () {
    $('.page-2-open').css('left', '-1920px');
});
