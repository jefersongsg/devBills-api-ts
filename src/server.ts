import 'dotenv/config';
import express, { json } from 'express';
import { router } from './routes';
import { setupMongo } from './datebase';

setupMongo().then(() => {
    const app = express();

    app.use(json());
    app.use(router);

    app.listen(3000, () => {
        console.log('🚨Server is running on port 3000🚨');
    });
});
