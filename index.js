const async = require('async');
const _ = require('lodash');

//async queue
const tasksList = _.times(10, _.uniqueId.bind(null, 'task_'));
const tasksQueue = async.queue((task,cb) => {
    console.log('task'+task.name)
    setTimeout(() =>{
        cb()
    },3000 )
},3)
//after all process gets processed
tasksQueue.drain(()=> {
    console.log('all elements processed')
})
_.each(tasksList,(eachTask) => {
    tasksQueue.push({
        name:eachTask
    })
})
//if you have any prioritize element you can push that on top of everything
tasksQueue.unshift({
    name:'task_0'
})