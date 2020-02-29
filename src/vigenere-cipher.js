class VigenereCipheringMachine {
    constructor(boolean) {
        this.boolean = boolean;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error;

        message = message.toUpperCase();
        if(this.boolean === false) message = message.split('').reverse().join('');
        key = key.toUpperCase();
        while(key.length < message.length) key += key;      
        let result = '';
        let keyIndex = 0;
        
        for(let i of message) {
            if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
                let letter = i.charCodeAt() + key.charCodeAt(keyIndex) - 65;
                if(letter > 90) letter -= 26;
                result += String.fromCharCode(letter);
                keyIndex++;
            } else {
                result += i;
            }
        }

        return result;
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error;

        message = message.toUpperCase();
        if(this.boolean === false) message = message.split('').reverse().join('');
        key = key.toUpperCase();
        while(key.length < message.length) key += key;      
        let result = '';
        let keyIndex = 0;
        
        for(let i of message) {
            if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
                let letter = i.charCodeAt() - key.charCodeAt(keyIndex) + 65;
                if(letter < 65) letter += 26;
                result += String.fromCharCode(letter);
                keyIndex++;
            } else {
                result += i;
            }
        }

        return result;
    }
}

module.exports = VigenereCipheringMachine;
