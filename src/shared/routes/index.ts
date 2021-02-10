import { Router } from 'express';

import questionRoutes from '@modules/questions/routes/questions.routes';

const routes = Router();

routes.use('/questions', questionRoutes);

export default routes;
