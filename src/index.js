import express from "express";
const expressApp = require('./express-app');
const { PORT } = require('./config')
const StartApp = async () => {
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