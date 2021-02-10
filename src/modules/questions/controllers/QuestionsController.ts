import { Request, Response } from 'express';

import CreateQuestionService from '../services/CreateQuestionService';
import ListQuestionsService from '../services/ListQuestionsService';
import ShowQuestionService from '../services/ShowQuestionService';

export default class QuestionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const createQuestion = new CreateQuestionService();

    const question = await createQuestion.execute({ title, description });

    return response.json(question);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listQuestions = new ListQuestionsService();

    const questions = await listQuestions.execute();

    return response.json(questions);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showQuestion = new ShowQuestionService();

    const question = await showQuestion.execute({ id });

    return response.json(question);
  }
}
