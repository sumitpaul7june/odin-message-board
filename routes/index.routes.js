import { Router } from "express";

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

indexRouter.use((req, res, next) => {
    res.locals.messages = messages;
    next();
})

indexRouter.get('/', (req, res) => {
    res.render("message");
})

indexRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const clickedMessage = messages[id];
    res.render("messageDetails", { message: clickedMessage });

})



export { indexRouter, messages };