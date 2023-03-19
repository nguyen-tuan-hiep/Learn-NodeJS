import express from "express";
import homeController from "../controller/homeController.js";
let router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', (req, res) => {
        res.send('I am Nguyen Tuan Hiep');
    });

    return app.use('/', router);
}


export default initWebRoutes;