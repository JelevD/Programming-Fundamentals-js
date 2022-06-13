function mergeArrays(arr1, arr2) {
    let newArr = [];
    
   
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            let sum1 = "";
            sum1 += Number(arr1[i]) + Number(arr2[i]);
            newArr.push(sum1);
        }else {
            let sum2 = "";
            sum2 += arr1[i] + arr2[i];
            newArr.push(sum2);
        }
    }
    console.log(newArr.join(" - "));
}
mergeArrays(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);