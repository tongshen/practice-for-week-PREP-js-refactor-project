/*
    Write a function `plusTen` that takes in a number as an argument and
    returns the sum of that number and 10.
*/
function plusTen(num) {
    return num + 10;
}


/*
    Write a function `returnSevens(max)` that returns an array that contains
    multiples of 7 that are less than max.
*/
function returnSevens(max) {
    arr = []
    for (let i = 0; i < max; i++) {
        if (i % 7 === 0) {
            arr.push(i);
        }
    }
    return arr
}


/*
    Write a function named `bothStringsIncluded(sentence, word1, word2)` that
    accepts a sentence and two words as arguments. The `bothStringsIncluded`
    function should return `true` if *both* `word1` and `word2` are found in
    the sentence, and `false` if neither or only 1 is found.
*/
function bothStringsIncluded(sentence, word1, word2) {
    return sentence.includes(word1) && sentence.includes(word2);
}


/*
    Write a function `productArray(arr)` that takes in an array of numbers and
    returns the product of all the numbers. The product of an array  is the number
    you get when you multiply all the numbers together.
*/
function productArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}


/*
    Write a function `fiveAndEleven` that takes in a number and returns `true`
    if the number is divisible by BOTH 5 and 11 and `false` otherwise.
*/
function fiveAndEleven(num) {
    return num % 5 === 0 && num % 11 === 0;
}


/*
    Write a function, `countConsonants(word)`, that takes in a string word and
    returns the number of consonants in the word.
*/
function countConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    word = word.split(" ").join("")
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }
    return word.length - count;
}


/*
    Write a function `alternatingLetters` that takes in a string and returns a
    version of that string where letters alternate uppercase and lowercase,
    starting with lowercase. Do not make exceptions for spaces within the
    string.

    Strings are immutable, so here are some tools you may find useful. The
    `.split('')` function on strings to make a copy of the string as an array.
    The `.join('')` function joins the elements in an array into a string.
*/
function alternatingLetters(str) {
    arr = str.split('')
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 1){
            arr[i] = arr[i].toUpperCase()
        }
        else {
            arr[i] = arr[i].toLowerCase()
        }

    }
    return arr.join('');
}


module.exports = {
    plusTen,
    returnSevens,
    bothStringsIncluded,
    productArray,
    fiveAndEleven,
    countConsonants,
    alternatingLetters
}