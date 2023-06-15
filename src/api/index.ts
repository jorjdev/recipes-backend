import express from 'express';

import MessageResponse from '../interfaces/Shared/MessageResponse';
import recipes from './recipes/routes/recipes.route'

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


router.use('/recipes',recipes)

export default router;
