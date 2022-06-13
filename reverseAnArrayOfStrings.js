function reverseAnArrayOfString (arr) {
    for(let i = 0; i < arr.length / 2; i++) {
        let oldArr = arr[i];
        let newArr = arr.length - 1 - i;
        arr[i] = arr[newArr];
        arr[newArr] = oldArr;
    }
    console.log(arr.join(" "));
    
}
reverseAnArrayOfString(['a', 'b', 'c', 'd', 'e']);