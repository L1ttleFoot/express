import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});