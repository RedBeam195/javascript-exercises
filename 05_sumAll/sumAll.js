const sumAll = function(first,second) {
    let sum = 0;
    for(let i= first; i < second + 1; i++){
        sum+= i;    
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
