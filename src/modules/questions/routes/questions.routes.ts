import { Router } from 'express';

import QuestionsController from '../controllers/QuestionsController';

const questionRoutes = Router();

const questionsController = new QuestionsController();

questionRoutes.post('/', questionsController.create);

export default questionRoutes;
