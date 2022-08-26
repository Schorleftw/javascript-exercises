const sumAll = function(int1, int2) {
    let larger;
    let smaller;
    let intSum = int1 + int2;
    let sum = 0;

    if (int1 < int2) {
        larger = int2;
        smaller = int1;
    }
    else if (int1 > int2) {
        larger = int1;
        smaller = int2;
    }

    for(i = smaller + 1; i < larger; i++) {
        sum += i;
    }

    let endSum = intSum + sum;

    if (int1 < 0 || int2 < 0) {
        return "ERROR"
    }
    else if (typeof int1 !== "number" || typeof int2 !== "number") {
        return "ERROR"
    }
    else {
        return endSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
