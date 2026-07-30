function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let word of words) {
        let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result.push(newWord);
    }

    return result.join(" ");
}
     module.exports = capitalizeWords