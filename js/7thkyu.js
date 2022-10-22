function toJadenCase(input) {
    // let newString = input[0].toUpperCase() + input.substring(1);
    
    let newString = ""; 

    input = input.split(" ");

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }

    return input;
};

module.exports = { toJadenCase }; 