function generatePassword(length){
    if(length < 8){
        console.log("El largo debe ser de 8 o más caracteres.");
        return "";
    }

    let charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsetLower = "abcdefghijklmnopqrstuvwxyz";
    let charsetNums = "0123456789";
    let charsetSpecial = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let completeCharset = charsetUpper + charsetLower + charsetNums + charsetSpecial;

    let containsUpper = false;
    let containsLower = false;
    let containsNums = false;
    let containsSpecial = false;

    let password = "";
    do{
        password = generateRandom(completeCharset, length);

        containsUpper = containsAny(password, charsetUpper);
        containsLower = containsAny(password, charsetLower);
        containsNums = containsAny(password, charsetNums);
        containsSpecial = containsAny(password, charsetSpecial);
    }
    while(!(containsUpper && containsLower && containsNums && containsSpecial));

    console.log(password);
    return password;
}

function generateRandom(charset, length){
    let result = "";
    for(let i = 0; i < length; i++){
        result += charset.charAt(Math.floor(Math.random() * charset.length)); 
    }

    return result;
}

// Check if any char of the password is included in the charset
function containsAny(password, charset){
    let result = false;
    for(let i = 0; i < password.length && !result; i++){
        result = charset.includes(password[i]);
    }

    return result;
}