import express from 'express';
import JobsRoutes from './routes/JobsRoutes.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('public'));

app.use('/', JobsRoutes);

app.listen(3000, console.log('Server is running'));
