import { Router } from "express";
import Task from "../models/Task";
import {
    createAuto,
    renderEdit,
    addEdit,
    deleteTask,
    sell,
    renderTask,
} from "../controllers/tasks.controllers";
import Event from "../models/Event";
const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createAuto);

router.get("/event", async(rq, res) => {
    const events = await Event.find().lean();

    res.render("event", { events: events });
});

router.post("/event/add", async(req, res) => {
    const event = Event(req.body);
    await event.save();
    res.redirect("/event");
});

router.get("/eventDelete/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id)
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
});

router.get("/edit/:id", renderEdit);

router.post("/edit/:id", addEdit);

router.get("/delete/:id", deleteTask);
router.get("/done/:id", sell);

export default router;