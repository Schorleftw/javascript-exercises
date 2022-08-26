const reverseString = function(input) {
    const string = input.split("");
    const reverseString = string.reverse();
    const join = reverseString.join("");

    return join;
};

// Do not edit below this line
module.exports = reverseString;
