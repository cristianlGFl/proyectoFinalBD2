import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: 'main',
    partialsDir: path.join(app.get("views"), "partials"),
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extends: false }));
//routes
app.use(indexRoutes);

export default app;