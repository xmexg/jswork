/**
 * 检查密码强度,返回等级,0-9
 * 长度: 4 6 8 10 12 16 20 20+
 * 分级: 0 1 2  3  4  5  6  7
 * 
 * 每个类型加1分，如果密码长度>=12，加1分
 * 
 * 包含4种或4种以上不同类型的字符，密码长度>=8，加1分
 * 
 * 不能包含5个字符以上明显连续的小写(或大写)字母/数字，在分级中减1点
 * 
 * 若同时包含小写和大写字母和数字，则分级增加1点
 * 
 * @param {*} password 密码
 * @returns 等级
 */
function checkPasswordStrength(password) {
    var level = 0;
    var regexArr = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
    var len = password.length;
    

    if (len < 4) {
        level = 0;
    } else if (len > 3 && len < 6) {
        level = 1;
    } else if (len >= 6 && len < 8) {
        level = 2;
    } else if (len >= 8 && len < 10) {
        level = 3;
    } else if (len >= 10 && len < 12) {
        level = 4;
    } else if (len >= 12 && len < 16) {
        level = 5;
    } else if (len >= 16 && len < 20) {
        level = 6;
    } else if (len >= 20) {
        level = 7;
    }

    var typeCount = 0;
    for (var i = 0; i < regexArr.length; i++) {
        if (regexArr[i].test(password)) {
            typeCount++;
        }
    }

    if (typeCount > 2 && len >= 12) {
        level++;
    }

    if (typeCount > 3 && len >= 8) {
        level++;
    }

    if (/[a-z]{5,}/.test(password) || /[A-Z]{3,}/.test(password)) {
        level--;
    }

    if (password.match(/[a-z]+/g) && password.match(/[A-Z]+/g) && password.match(/\d+/g)) {
        level++;
    }

    if ( level < 0 ) { level = 0;}

    if ( level > 9 ) { level = 9;}

    return level;
}

/**
 * 红->黄->绿 等分颜色, 返回颜色数组
 * @param {*} num 份数
 */
function bisectionColor( num ) {
    let colors = [];
    let r, g, b;
    let mid = parseInt(num/4);
    for (var i = 0; i <= num; i++) {
        if (i < mid) {
            r = 255;
            g = i * 51;
            b = 0;
        } else {
            r = 255 - (i - 5) * 51;
            g = 255;
            b = 0;
        }
    var rgbValue = "rgb(" + r + "," + g + "," + b + ")";
    colors.push(rgbValue);
    }
    return colors;
}

function Toash( msg ) {
    let toash = document.createElement("div");
    toash.classList.add("toash");
    toash.innerHTML = msg;
    document.getElementById("showToash").appendChild(toash);
    setTimeout(() => {
        document.getElementById("showToash").removeChild(toash);
    }, 5000);
}
