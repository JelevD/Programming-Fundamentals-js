function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(" ");

        switch(tokens[0]) {
            case "add":
                let index = Number(tokens[1]);
                let elements = Number(tokens[2]);
                numbers.splice(index, 0, elements);
                console.log(numbers);
                break;
            case "addMany":
                let index = Number(tokens[1]);
                tokens.splice(0, 2);
                let numToAdd = tokens.map(Number);
                numbers.splice(index, 0, ...tokens);
                break;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['add 5']    
    );