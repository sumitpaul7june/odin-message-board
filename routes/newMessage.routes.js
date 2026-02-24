import { Router } from "express";
import { messages } from "./index.routes.js";

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render("form");
})
newMessageRouter.post('/', (req, res) => {
    const messageUser = req.body.name;
    const messageText = req.body.message;

    messages.push({
        text: messageText,
        user: messageUser,
        added: new Date()
    })

    res.redirect("/");
})

export { newMessageRouter };