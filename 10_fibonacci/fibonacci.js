const fibonacci = function(n) {
    let suite = [1,1];
    for (let i = 0; i < n; i++) {
        suite.push(suite[i]+suite[i+1])
    }
    return suite[n+1];
};

console.log(fibonacci(1000));

// Do not edit below this line
module.exports = fibonacci;
