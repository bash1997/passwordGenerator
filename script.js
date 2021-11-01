const userNums = document.getElementById("nums");
const userUpper = document.getElementById("upper");
const userLower = document.getElementById("lower");
const userSymbols = document.getElementById("symbols");
const output = document.getElementById("output");

const symbols = ['@', '%', '+', '!', '#', '$', '^', '?'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let passwordStr = "";

const generator = () => {
    let passwordArr = [];
    let numChecked = 0;

    if (userSymbols.checked === true) {numChecked = numChecked + 1;}
    if (userNums.checked === true) {numChecked = numChecked + 1;}
    if (userLower.checked === true) {numChecked = numChecked + 1;}
    if (userUpper.checked === true) {numChecked = numChecked + 1;}

    const passwordLength = parseInt(document.getElementById("length").value);
    const charNum = Math.floor(passwordLength / numChecked);
    const remainder = passwordLength % numChecked;

    for (let i = 0; i < charNum; i++) {
        //get symbols
        if (userSymbols.checked === true){
            const randSymbols = Math.floor(Math.random() * symbols.length);
            passwordArr.push(symbols[randSymbols]);
        }

        //get numbers
        if (userNums.checked === true){
            const randNums = Math.floor(Math.random() * numbers.length);
            passwordArr.push(numbers[randNums]);
        }

        //get uppercase letters
        if (userUpper.checked === true){
            const randUpper = Math.floor(Math.random() * uppercase.length);
            passwordArr.push(uppercase[randUpper]);
        }

        //get lowercase letters
        if (userLower.checked === true){
            const randLower = Math.floor(Math.random() * lowercase.length);
            passwordArr.push(lowercase[randLower]);
        }
    }

    //shuffle password array
    for (let i = passwordArr.length - 1; i > 0; i--){
        const a = Math.floor(Math.random() * (i + 1));
        const temp = passwordArr[i];
        passwordArr[i] = passwordArr[a];
        passwordArr[a] = temp;
    }

    //turn shuffled array into a string
    passwordStr = passwordArr.join("");

    //Takes the remiander of the password length and give random characters for the password
    if (remainder !== 0 && numChecked > 0) {
        let characters = [];
        if (userLower.checked){characters.push(lowercase[17]);}
        if (userSymbols.checked){characters.push(symbols[0]);}
        if (userUpper.checked){characters.push(uppercase[21]);}
        if (userNums.checked){characters.push(numbers[2]);}
        if (userSymbols.checked){characters.push(symbols[1]);}
        
        let randomExtraArr = [];
        for (let i = 0; i < remainder; i++) {
            let randCharArr = Math.floor(Math.random() * characters.length);
            let extraChar = characters[randCharArr];
            let randomExtraChar = extraChar[Math.floor(Math.random() * extraChar.length)];
            randomExtraArr.push(randomExtraChar);
            
        }
        passwordStr = passwordStr + randomExtraArr.join("");     
    }

    //lastly, print password
    output.value = passwordStr;
};

const copy = () => {
    const password = document.getElementById("output");
    password.select();
    document.execCommand("copy");
}