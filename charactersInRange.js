function charactersInRange(char1, char2) {
    let min = char1.charCodeAt(0);
    let max = char2.charCodeAt(0);

    let minAtStr1 = min;
    let minAtStr2 = max;
    if (minAtStr1 > minAtStr2) {
        max = minAtStr1;
        min = minAtStr2;
    }

    let result = " ";

    for (let i = min + 1; i < max; i++) {
        let charakter = String.fromCharCode(i);
        result += charakter + ` `;
    }
    return result;
}

let result = charactersInRange('C',
'#'
)
console.log(result);