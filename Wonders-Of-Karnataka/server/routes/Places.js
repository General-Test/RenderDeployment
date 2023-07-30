import express from 'express';

import { getPlaces, getPlacesBySearch, getPlace, createPlace, updatePlace, likePlace, commentPlace, deletePlace } from '../controllers/Places.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/search', getPlacesBySearch);
router.get('/', getPlaces);
router.get('/:id', getPlace);

router.post('/', auth,  createPlace);
router.patch('/:id', auth, updatePlace);
router.delete('/:id', auth, deletePlace);
router.patch('/:id/likePlace', auth, likePlace);
router.post('/:id/commentPlace', commentPlace);

export default router;