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
