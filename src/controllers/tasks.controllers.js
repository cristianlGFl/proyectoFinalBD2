import Task from "../models/Task";

export const renderTask = async(rq, res) => {
    const tasks = await Task.find().lean();

    res.render("index", { tasks: tasks });
};

export const createAuto = async(req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
};

export const renderEdit = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render("edit", { task });
    } catch (error) {
        console.error(error);
    }
};

export const addEdit = async(req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};


export const deleteTask = async(req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id)
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
};

export const sell = async(req, res) => {

    const { id } = req.params;
    const task = await Task.findById(id)
    if (task.done) {
        task.done = false
    } else {
        task.done = true
    }
    await task.save();
    res.redirect("/");

};