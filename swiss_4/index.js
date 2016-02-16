$(function () {
    var openEl = null;
    $('#ul1 li').click(function () {
        openEl = $(this);
        openEl.addClass('active');
        $('#keepOut').fadeIn();
        $('.modal').fadeIn();
        $('.modal').css({left: openEl.offset().left + (125 / 2), top: openEl.offset().top + (75 / 2)}).show();
        $(".modal-body strong")[0].innerHTML = "你选择了\"" + $(this).attr("val") + "\"组别,之后你将无法修改此分组设置,要继续吗?";
        setTimeout(function () {
            $('#keepOut').addClass('open');
            $('.modal').addClass('open').css({left: '50%', top: '50%'});
        }, 100);
    });
    $('#yes,#no').click(function () {
        $('#keepOut').removeClass('open');
        $('.modal').css({
            left: openEl.offset().left + (125 / 2),
            top: openEl.offset().top + (75 / 2)
        }).removeClass('open');
        setTimeout(function () {
            $('#keepOut').fadeOut();
            $('.modal').fadeOut();
        }, 400);
    });

    $('#yes').click(function () {
        $('#pageInfo').show();

        setTimeout(function () {
            $('#pageInfo').addClass('open');
            $('#pageHome').addClass('close');
        }, 400);
    });
    $('no').click(function () {
        $('#pageHome').addClass('open');
    });

    $('#submit').click(function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        $('#pageList').show();
        $('#pageList').css({display: 'block'});

        //var oText = document.querySelectorAll(".pres ul li input[type='text']");
        //for (var i = 0; i < oText.length; i++) {
        //    //清空前后的空格
        //    if (oText[i].value.replace(/(^\s*)|(\s*$)/g, "") == "") {
        //        alert("请输入" + oText[i].getAttribute("val") + "后进行提交操作!");
        //        return;
        //    }
        //    if (oText[i].getAttribute("val") == "手机号") {
        //        if (!(/^1[3458]\d{9}$/.test(oText[i].value))) {
        //            alert("输入的手机号格式不正确!");
        //            return;
        //        }
        //    }
        //    if (oText[i].getAttribute("val") == "电子邮件") {
        //        if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(oText[i].value))) {
        //            alert("输入的电子邮件格式不正确!");
        //            return;
        //        }
        //    }
        //}
        setTimeout(function () {
            $('#pageInfo .pres').addClass('zoomOut');

            $('#pageList').addClass('open');
            $('#pageList').css({display: 'block'});
            $('body').css({overflow: 'scroll'});

            $(".total .ico_list").show();
        }, 0);
    });
    $(".total .ico_list").bind("click", function (e) {
        if (!$("#pageInfo .pres").hasClass("zoomOut")) {
            $('#pageList').show();
            $('#pageList').css({display: 'block'});

            $(".total .ico_list").removeClass("rtt");

            setTimeout(function () {
                $('#pageInfo .pres').addClass('zoomOut');
                $('#pageList').addClass('open');
                $('#pageList').css({display: 'block'});
                $('body').css({overflow: 'scroll'});
                $(".total .ico_list").show();
            }, 0);
        } else {
            $("#pageList").removeClass("open");
            $('#pageList').css({display: 'none'});
            $('#pageInfo .pres').removeClass('zoomOut');

            $('body').css({overflow: 'hidden'});
        }
        if ($(".total .ico_list").addClass("rtt")) {
            $("#btn").attr("value", "更新");

        }
    });


    //第四页
    var openDir = null;
    $("div.homeDir").click(function () {
        openDir = $(this);
        openDir.addClass('color');

        $("#detailsPage").show();

        setTimeout(function () {
            $(this).css("display", "block");
            $('#detailsPage').addClass('open');
            $('#pageList').addClass('close');
            $('#pageList').css({display: 'none'});
            $('body').css({overflow: 'hidden'});
        }, 400);
    });
    $("#det_close").click(function () {
        $("#pageList").show();
        $('#pageList').css({display: 'block'});
        setTimeout(function () {
            $("#detailsPage").css({display: "none"});
            $('#detailsPage').removeClass('close');
            $('#pageList').removeClass('close');
            $('body').css({overflow: 'scroll'});
        }, 400);
    });
});





