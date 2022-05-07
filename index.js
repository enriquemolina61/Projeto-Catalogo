import express from "express";
import {routers} from './src/routers/routers.js'
import path from "path";


const app = express();
const port = 3005;
let __dirname = path.resolve(path.dirname(''))

app.set("view engine", "ejs");
app.use(routers)
app.use(express.static(path.join(__dirname,'public')))

app.listen(port, () => {
  console.log(`Rodadando na porta: ${port}`);
});

