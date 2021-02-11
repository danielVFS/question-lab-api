import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import QuestionsController from '../controllers/QuestionsController';

const questionRoutes = Router();

const questionsController = new QuestionsController();

questionRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  questionsController.create,
);
questionRoutes.get('/', questionsController.index);
questionRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  questionsController.show,
);
questionRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  questionsController.update,
);
questionRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  questionsController.delete,
);

export default questionRoutes;
