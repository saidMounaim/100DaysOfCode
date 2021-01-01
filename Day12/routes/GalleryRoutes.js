import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	const hits = await axios.get(`https://pixabay.com/api/?key=19221012-164b9cad7ac65bf4cf31b1543`);
	res.render('index.ejs', { photos: hits.data.hits });
});

router.post('/search', async (req, res) => {
	const hits = await axios.get(
		`https://pixabay.com/api/?key=19221012-164b9cad7ac65bf4cf31b1543&q=${req.body.query}&image_type=photo&pretty=true`
	);
	const photos = hits.data.hits;
	res.render('search.ejs', { photos });
});

router.get('/about', (req, res) => {
	res.render('about.ejs');
});

router.get('/user/:user', async (req, res) => {
	console.log(req.params.user);
	const hits = await axios.get(
		`https://pixabay.com/api/?key=19221012-164b9cad7ac65bf4cf31b1543?id=5860895&q=query&user=${req.params.user}`
	);
	const photos = hits.data.hits;
	res.render('user.ejs', { photos });
});

export default router;
