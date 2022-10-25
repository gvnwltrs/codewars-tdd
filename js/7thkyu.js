function toJadenCase(input) {
    // let newString = input[0].toUpperCase() + input.substring(1);
    
    let newString = ""; 

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i][0].toUpperCase() + input[i].substr(1);
    }

    return input.join(" ");
};

module.exports = { toJadenCase }; 