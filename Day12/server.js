import express from 'express';
import GalleryRouter from './routes/GalleryRoutes.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', GalleryRouter);

app.listen(3000, console.log('Server is running'));
