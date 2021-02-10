import { Request, Response } from 'express';

import CreateQuestionService from '../services/CreateQuestionService';

export default class QuestionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({ title, description });

    return response.json(question);
  }
}
