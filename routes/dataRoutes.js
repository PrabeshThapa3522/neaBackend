// routes/dataRoutes.js

import express from 'express';
import { getData } from '../controllers/dataController.js'; // Import the controller function

const router = express.Router();

// Define the route that fetches data
router.get('/data', getData);

export default router;
