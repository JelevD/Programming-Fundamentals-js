function email(input) {
    let result = input.shift();
    let resultOld = result
    
    while(input[0] != "Complete") {
        let [command, text] = input.shift().split(" ")
        
        if(`${command} ${text}` == "Make Upper") {
            result = result.toUpperCase();
            resultNew = result;
            console.log(result);
        }else if(`${command} ${text}` == "Make Lower") {
            result = result.toLowerCase();
            resultNew = result;
            console.log(result);
        }else if(command == "GetDomain") {
            text = Number(text);
            result = result.slice(-text);
            console.log(result);
        }else if(command == "GetUsername") {
            if(!resultOld.includes("@")) {
            console.log(`The email ${result} doesn't contain the @ symbol.`)
            }else {
            let chech = resultNew.split("@");
            console.log(chech[0]);
            }
        }else if(command == "Replace") {
            result = result.replaceAll(text, "-")
            console.log(result);
        }else if(command == "Encrypt") {
            let digit = ""
            for(let i = 0; i < resultNew.length; i++) {
                let char = resultNew.charCodeAt(i)
                digit = digit + char + " ";
                
            }
            console.log(digit);
        }

    }

}
email(["Mike123@somemail.com",
"Make Upper",
"GetDomain 3",
"GetUsername",
"Encrypt",
"Complete"])


