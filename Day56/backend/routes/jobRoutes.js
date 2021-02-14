import express from 'express';
import { getJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:slug', getJob);
router.post('/', createJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;
