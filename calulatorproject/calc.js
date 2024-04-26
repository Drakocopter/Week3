function getPayment(loanAmount, percentageRate, numberOfMonths){
P = loanAmount
r = percentageRate / 12
n = numberOfMonths
const output = P*r*(1+r)**n/((1+r)**n-1)
return output
}
