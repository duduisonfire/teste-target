function reverseString(string) {
    const reversedStringArray = [];

    for (let index = string.length-1; index >= 0; index--) {
        reversedStringArray.push(string.charAt(index));
    }

    let reversedString = '';

    for (let index = 0; index < reversedStringArray.length; index++) {
        reversedString += reversedStringArray[index];
    }
    
    return reversedString;
}

const dotaInverse = reverseString('dota');

console.log(dotaInverse);