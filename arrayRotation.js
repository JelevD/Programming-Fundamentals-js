function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        newArr = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];

        }
        let lastIndex = arr.length - 1;
        arr[lastIndex] = newArr;
    }
    
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);