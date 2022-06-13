function maxNumber(list) {
    let topInt = [];
    for (let i = 0; i < list.length; i++) {
        let currenet = list[i];
        let isTop = true;

        for (let j = i + 1; j < list.length; j++) {
            let rightNum = list[j];

            if (rightNum >= currenet) {
                isTop = false;
                break;
            }
        }
        if(isTop) {
            topInt.push(currenet);
        }
    }
    console.log(topInt.join(" "));

}
maxNumber([41, 41, 34, 20]);