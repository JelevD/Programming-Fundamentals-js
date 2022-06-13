function distinctArray(arr) {
    let newArr = [];
    for (let digit of arr) {
        current = digit;
        if (!newArr.includes(digit)) {
            newArr.push(current);
        }
    }
    console.log(newArr.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);