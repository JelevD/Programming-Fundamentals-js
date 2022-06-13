function Massage(input) {
    let pattern = /!(?<command>[A-Z]{1}[a-z]{2,})!:\[(?<massage>[a-zA-Z]{8,})\]/;
 
    let massageCounter = Number(input.shift());
 
    for (let i = 0; i < massageCounter; i++) {
        let massage = input[i];
        if (pattern.test(massage)){
            let match = massage.match(pattern);
            let command = match.groups.command;
            let textToEnc = match.groups.massage;
            let textArray = textToEnc.split('').map(char => char.charCodeAt());
 
            console.log(`${command}: ${textArray.join(' ')}`);
        }else{
            console.log('The message is invalid');
        }
    }
}

Massage(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])
