import { Router } from 'express';

import QuestionsController from '../controllers/QuestionsController';

const questionRoutes = Router();

const questionsController = new QuestionsController();

questionRoutes.post('/', questionsController.create);
questionRoutes.get('/', questionsController.index);
questionRoutes.get('/:id', questionsController.show);
questionRoutes.put('/:id', questionsController.update);

export default questionRoutes;
