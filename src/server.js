import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoutes from "./route/web.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.PORT || 8080;

console.log("PORT: ", port);


// set up view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});