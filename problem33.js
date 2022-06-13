function problem(input) {
    let collection = {};
    let unliked = 0;
    for (let command of input) {
        let commands = command.split('-');
        let guest = commands[1];
        let meal = commands[2];
        switch (commands[0]) {
            case 'Like':
                if (!collection.hasOwnProperty(guest)) {
                    collection[guest] = [meal];
                } else {
                    if (!collection[guest].includes(meal)) {
                        collection[guest].push(meal);
                    }
                }
                break;
            case 'Unlike':
                if (collection.hasOwnProperty(guest)) {
                    if (collection[guest].includes(meal)) {
                        unliked++;
                        collection[guest].splice(collection[guest].indexOf(meal), 1);
                        console.log(`${guest} doesn't like the ${meal}.`);
                    } else if (!collection[guest].includes(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${guest} is not at the party.`);
                }
                break;
        }
    }
    let arr = Object.entries(collection);
    arr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    arr.forEach(el => {
        console.log(`${el[0]}: ${el[1].join(', ').trim()}`);
    });
    console.log(`Unliked meals: ${unliked}`);
}
problem(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])

