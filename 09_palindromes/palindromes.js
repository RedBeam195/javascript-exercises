const palindromes = function (str) {
    let pair = str.length % 2 === 0 ? true : false;
    let iterations = pair ? str.length / 2 : (str.length - 1) / 2;
    for (let i = 0; i < iterations; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
};

palindromes('kayak') // true

// Do not edit below this line
module.exports = palindromes;
