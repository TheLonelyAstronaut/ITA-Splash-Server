import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

//Triggering sonarcloud

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.json('Hello world');
});

app.listen(port, () => console.log(`Server running at ${port}`));
