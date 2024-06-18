
function isArmstrong(n) {
    var digits = n.toString().split('')
    var sum = 0;
    for(var i=0; i<digits.length; i++) {
        sum+= Math.pow(digits[i], digits.length)
    }
    return sum === n;
}

console.log(isArmstrong(123));
console.log(isArmstrong(371));