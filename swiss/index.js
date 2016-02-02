$(function () {
    var openEl = null;
    $('#ul1 li').click(function () {
        openEl = $(this);
        $('#keepOut').show();
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
            $('#keepOut').hide();
            $('.modal').hide();
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

        //var oText = document.querySelectorAll(".pres ul li input[type='text']");
        //for (var i = 0; i < oText.length; i++) {
        //    //清空前后的空格
        //    if (oText[i].value.replace(/(^\s*)|(\s*$)/g, "") == "") {
        //        alert("请输入" + oText[i].getAttribute("val") + "后进行提交操作!");
        //        return;
        //    }
        //    if (oText[i].getAttribute("val") == "手机号") {
        //        if (!(/^1[3|4|5|8]\d{9}$/.test(oText[i].value))) {
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
            $('body').css({overflow: 'scroll'})
        }, 0);

        //第四页
        $("div.homeDir").click(function () {
            $("#detailsPage").show();
            setTimeout(function () {
                $('#detailsPage').addClass('open');
                $('#pageList').addClass('close');
                $('body').css({overflow: 'hidden'});
            }, 400);
        });
        $("#det_close").click(function () {
            $("#pageList").show();
            setTimeout(function () {
                $('#detailsPage').addClass('close');
                $('#pageList').removeClass('close');
                $('#detailsPage').removeClass('open');
                $('#detailsPage').removeClass('close');
                $('body').css({overflow: 'scroll'});
            }, 400);
        });
    });

});





