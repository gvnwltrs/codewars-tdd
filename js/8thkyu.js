function smash (words) {
    if (words.length == 0) {
        return "";
    }

    var newString = []    
    var strings = ""
    words.forEach((element, index, array) => {
        if (index == array.length - 1) {
            strings += element; 
        }
        else {
            strings += element + " ";
        }
    });

    newString.push(strings); 
    return newString[0]; 
}; 

module.exports = { smash }; 