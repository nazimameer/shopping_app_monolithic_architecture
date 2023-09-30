import express from "express";
const expressApp = require('./express-app');

const StartApp = async () => {
    const app = express();

    await expressApp(app);


}


StartServer();