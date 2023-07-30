import express from 'express';

import { getCsvs, createCsv, deleteCsv }  from '../controllers/uploads.js'

const router = express.Router();

router.get('/',getCsvs );
router.post('/',createCsv );
router.delete('/:id', deleteCsv );

export default router;