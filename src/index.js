import express from "express";
import expressApp from './express-app';
const { PORT } = require('./config')
const StartServer = async () => {
    const app = express();

    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}


StartServer();