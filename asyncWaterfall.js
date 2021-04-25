const async = require('async')
const calc = []
const getParams = (cb) => {
    cb(null,10,20)
}
const multiply = (a,b,cb) => {
    cb(null,a*b)
}
const twice = (c,cb) => {
    cb(null,(2*c))
}
calc.push(getParams)
calc.push(multiply)
calc.push(twice)

async.waterfall(calc,(err,result)=> {
    console.log('result->'+result)
})
