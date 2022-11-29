import express from 'express';
import {
  getProducts,
  getSingleProduct,
  postProduct,
} from '../controllers/products.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', postProduct);

export default router;
