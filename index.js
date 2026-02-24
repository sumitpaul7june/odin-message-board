import express from "express";
import path from "path";
import { indexRouter } from "./routes/index.routes.js";
import { newMessageRouter } from "./routes/newMessage.routes.js";


const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/new", newMessageRouter);
app.use("/", indexRouter);



app.listen(port, () => {
    console.log(`Your local host running at ${port}`);

})
