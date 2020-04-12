import express from 'express';
import data from './data/data.json';
import routes from './src/routes/route.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	// console.log(data);
});