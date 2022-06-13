function oddOccurrences(list) {
    let occurances = {};
    let target = list.split(" ");
    for(let string of target) {
        let stringOfLower = string.toLowerCase();
        if(!Object.keys(occurances).includes(stringOfLower)) {
            occurances[stringOfLower] = 0
        }
        occurances[stringOfLower] += 1
    }
    let result = [];
    for (let [key, value] of Object.entries(occurances)) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')