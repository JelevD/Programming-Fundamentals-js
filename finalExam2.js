function problem(text) {
    let result = [];
    let point = 0;
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
    let match = pattern.exec(text);

    while(match != null) {

        result.push(match[2]);
        point += match[2].length
        match = pattern.exec(text);
    }
    console.log(`Destinations: ${result.join(', ')}`);
    console.log(`Travel Points: ${point}`)

}

problem("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")