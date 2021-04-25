const async = require('async')


//creating a scenario
const weirdMethod = () => {
    setTimeout(()=> {
        console.log('first set timeout')
        setTimeout(()=>{
            console.log('second set timeout')
            setTimeout(()=> {
                console.log('third set timeout')
            },1000)
        },3000)
    },5000)
}
weirdMethod()
//this scenario can be improved using this

const methodArr = []

const method1 = (cb) => {
    setTimeout(()=> {
        console.log('inside 1')
        cb(null,'voila1')
    },6000)

}
const method2 = (cb) => {
    setTimeout(()=> {
        console.log('inside 2')
        cb(null,'voila2')
    },3000)
}

const method3 = (cb) => {
    setTimeout(()=> {
        console.log('inside 3')
        cb(null,'voila3')
    },2000)
}

methodArr.push(method1)
methodArr.push(method2)
methodArr.push(method3)

async.series(methodArr,(err,result) => {
    console.log('result->'+result)
})


//parallel

// async.parallel(methodArr,(err,result)=> {
//     console.log('result for parallel'+result)
// })
