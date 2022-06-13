function lastKNumns(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let element = result.slice(-k);
        let current = 0;
        for (let num of element){
            current += num;
        }
        result.push(current);
    }

    console.log(result.join(" "));
}
lastKNumns(6, 3);