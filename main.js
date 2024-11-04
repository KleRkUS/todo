import express from 'express';
import bodyParser from 'body-parser';
import { initRoutes } from './src/routes.js';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

initRoutes(app);

app.listen(8080, () => { console.log("Server Listening on Port 8080") });
