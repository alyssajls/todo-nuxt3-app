export const status = () => ({
    task: []
})

export const addTasks = {
    ADD_TASK(status, task){
        status.tasks = [{content: task, done: false}, ...status.tasks]
    }
}