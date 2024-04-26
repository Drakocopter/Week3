
function getValue(depositAmount, percentageRate, numberOfMonths){
    D = depositAmount
    r = percentageRate / 100
    t = numberOfMonths * 12
    const output = D*(1+r/12)**t
    return output
}

console.log(getValue(1000, 1.75, 5))