// 출력예시1번
// *
// **
// ***
// ****
// *****
for (var i = 1; i <= 5; i++) {
    var str = ''
    for (var j = 1; j <= i; j++) {
        str = str + '*';
    }
    console.log(str);
}

for (var i = 1; i <= 5; i++) {
    if (i % 2 === 1) {
        var str = '';
        for (var j = 1; j <= i; j++) {
            str = str + '*';
        }
        console.log(str);
    }
}

// 출력예시2번
//     *
//    **
//   ***
//  ****
// *****
for (var i = 1; i <= 5; i++) {
    var str = '';
    for (var j = 1; j <= 5 - i; j++) {
        str = str + ' ';
    }
    for (var j = 1; j <= i; j++) {
        str = str + '*';
    }
    console.log(str);
}

// 출력예시 3번
//    *
//   ***
//  *****
// *******
//*********
for (var i = 1; i <= 9; i++) {
    if (i % 2 === 1) {
        var str = '';
        for (var j = 1; j <= (9 - i) / 2; j++) {
            str = str + ' ';
        }
        for (var j = 1; j <= i; j++) {
            str = str + '*';
        }
        console.log(str);
    }
}

// 출력예시 4번
//    *        *
//    **      **
//    ***    ***
//    ****  ****
//    **********
for (var i = 1; i <= 5; i++) {
    var str = '';
    for (var l = 1; l <= i; l++) {
        str = str + '*';
    }
    for (var l = 1; l <= 5 - i; l++) {
        str = str + ' ';
    }
    for (var j = 1; j <= 5 - i; j++) {
        str = str + ' ';
    }
    for (var j = 1; j <= i; j++) {
        str = str + '*';
    }
    console.log(str);
}