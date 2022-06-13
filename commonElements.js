function commonElements(arr1, arr2) {
    for (let current1 of arr1) {
        for (let current2 of arr2) {
            if (current1 === current2) {
                console.log(current1);
            }
        }
    }

}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)