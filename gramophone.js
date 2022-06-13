function gramophone(str1, str2, str3) {
    let time = (str1.length * str2.length) * str3.length / 2;
    let rotations = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');