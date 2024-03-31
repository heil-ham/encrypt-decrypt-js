
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function generateKey() {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newRandomAlphabet = [];

    for (let index = 0; index < 26; index++) {
    
    let randomNumber = Math.floor(Math.random() * 26) 
    
    if (alphabet[randomNumber] != null) {
        newRandomAlphabet[index] = alphabet[randomNumber]
        alphabet[randomNumber] = null
    }
    else {
        index--
    }
    
}

return newRandomAlphabet;
}

function encryptAndDecrypt(words, key) {
    let encryptedWords = "";
    for (let index = 0; index < words.length; index++) {
        
        if (words.charAt(index) == " ") {
            encryptedWords+=" "
            continue
        }
        
        for (let alp = 0; alp < alphabet.length; alp++) {
            if (alphabet[alp] == words.charAt(index)) {
                    encryptedWords+=key[alp]
                    break
            }
        }
    }
    
    console.log(encryptedWords);

    let decryptedWords = ""
    for (let index = 0; index < encryptedWords.length; index++) {
        
        if (encryptedWords.charAt(index) == " ") {
            decryptedWords+=" "
            continue
        }
        
        for (let alp = 0; alp < key.length; alp++) {
            if (key[alp] == encryptedWords.charAt(index)) {
                    decryptedWords+=alphabet[alp]
                    break
            }
        }   
    }

    console.log(decryptedWords);
}

encryptAndDecrypt("nasi goreng", generateKey())