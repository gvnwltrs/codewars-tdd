function toJadenCase(string) {
    
    let input = string.split(" ");

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i][0].toUpperCase() + input[i].substr(1);
    }

    return input.join(" ");
};

module.exports = { toJadenCase }; 