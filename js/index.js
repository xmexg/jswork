// 登录和注册按钮,5秒后自动隐藏
$(function () {
    $("#login > a").each(function (index, elem) {
        var timer;
        $(this).click(function () {
            $("#login_box").toggle(index == 0);// .toggle true显示
            $("#register_box").toggle(index == 1);
            $("#lore").show(300);
            clearTimeout(timer);
            timer = setTimeout(function () {
                $("#lore").hide(500);
            }, 5000);
        });
        $("#lore").mouseenter(function () {
            clearTimeout(timer);
        });
        $("#lore").mouseleave(function () {
            timer = setTimeout(function () {
                $("#lore").hide(500);
            }, 5000);
        });
    })
})

//检查密码(#password)强度,输入框改变时触发
$(function () {
    $(".formdiv .password").each(function (index, elem) {
        $(this).keyup(function () {
            let pwd = $(this).val();
            let level = checkPasswordStrength(pwd);
            // 红 -> 黄 -> 绿 分成10份,根据等级设置背景色
            let rgb = bisectionColor(10);
            // 选中当前密码框的下一个div,该div内有10个子div,分别设置第n个div对应rbg[n]为背景色
            $(this).next().children("div").each(function (index, elem) {
                if (index <= level) {
                    $(this).css("background", rgb[index]);
                } else {
                    $(this).css("background", "rgb(255,255,255, 0)");
                }
            });
        });
    });
});


/**
 * 窗口大小改变时触发
 */
window.addEventListener("resize", function() {
    goods_tetail_draw();
});


/**
 * 初始化相关
 */

// 密码强度显示框
function init_pwd_level() {
    // 向.formdiv下的pwd_level里添加10个div
    for (var i = 0; i < 10; i++) {
        $(".formdiv .pwd_level").append("<div></div>");
    }
}

// 测试使用
function test() {
    console.log("目前开启了test");
    $("#goodsPage_for").hide();
    $("#goods_detail").show();
}

window.onload = function () {
    init_pwd_level();
    topBargame();//顶栏游戏
    // test();// 测试使用

    { // goodsPage
        $("#goodsPage_for").show();
        $("#goods_detail").hide();
    }
    
}
