function blackListFun (arr) {
    let name = arr.shift().split(" ");
    let listName = arr.shift().split(" ");
    let count = 0;
        for (let list of name) {
            if ("Blacklist" === listName[0]) {
                if (name = listName[1]) {
                    console.log(`${name} was blacklisted.`);
                    return
                }else {
                    console.log(`${name} was not found.`);
                    return
                }
            }
        }
    for (let i = 0 ; i < arr.length; i++) {
        
        tokens[i] = arr.shift().split(" ");
        if (tokens[0] === "Error") {
            let inx = Number(tokens[1]);
            if (name.length - 1 >= inx) {
                count++;
                name.splice(inx, 1);
                console.log(`Lost names: ${count++}`)
                name.push("Lost");
                return
            }else {
                console.log(`${name[i]} was lost due to an error.`);
                return
            }
        }
        if (tokens[0] === "Change") {
            let inx = Number(tokens[1]);
            let curremtName = tokens[2];
            name[inx] = curremtName;
        }
        if (tokens[0] === "Report") {
            return;
        }
    
    console.log(name)
    }
}
blackListFun(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])




