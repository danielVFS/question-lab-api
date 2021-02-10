import { Request, Response } from 'express';

import CreateQuestionService from '../services/CreateQuestionService';
import DeleteQuestionService from '../services/DeleteQuestionService';
import ListQuestionsService from '../services/ListQuestionsService';
import ShowQuestionService from '../services/ShowQuestionService';
import UpdateQuestionService from '../services/UpdateQuestionService';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const { id } = request.params;

    const updateQuestion = new UpdateQuestionService();

    const question = await updateQuestion.execute({ id, title, description });

    return response.json(question);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteQuestion = new DeleteQuestionService();

    const question = await deleteQuestion.execute({ id });

    return response.json(question);
  }
}
