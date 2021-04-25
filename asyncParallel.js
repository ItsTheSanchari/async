const async = require('async')

const TaskArr = []

const meth1 = (cb) => {
    cb(null,'this is inside method 1')
}
const meth2 = (cb) => {
    cb(null,'this is inside method 2')
}
const meth3 = (cb) => {
    cb(null,'this is inside method 3')
}
const meth4 = (cb) => {
    cb('ERROR',null)
}
TaskArr.push(meth1)
TaskArr.push(meth2)
TaskArr.push(meth3)
TaskArr.push(meth4)
async.parallel(TaskArr,(err,value) => {
    if(err) {
        console.log(err)
    }
    console.log(value) 
    //this would print 
    //['this is inside method 1','this is inside method 2','this is inside method 3',null]
    //now if you pass the error inside the method 1 call back it would just print null.

})