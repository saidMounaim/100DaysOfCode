import express from 'express';
import axios from 'axios';

const router = express.Router();


router.get("/", async (req, res) => {

    try {
        const { data } = await axios.get("https://jobs.github.com/positions.json?description=react");
        res.render("index.ejs", { jobs: data });
    } catch (error) {
        console.log(error.message);
    }

})


router.get("/search", async (req, res) => {
    const { description, location } = req.query;
    if (description === "" && location === "") {
        return false;
    } else {
        const { data } = await axios.get(`https://jobs.github.com/positions.json?description=${description}&location=${location}`);
        console.log(data);
        res.render("index.ejs", { jobs: data });
    }
})

export default router;