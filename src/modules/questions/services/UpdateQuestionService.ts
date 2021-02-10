import { getCustomRepository } from 'typeorm';

import Question from '../typeorm/entities/Question';

import ErrorHandler from '@shared/errors/ErrorHandler';

import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

interface IRequest {
  id: string;
  title: string;
  description: string;
}

class UpdateQuestionService {
  public async execute({
    id,
    title,
    description,
  }: IRequest): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne(id);

    if (!question) {
      throw new ErrorHandler('Product not found');
    }

    question.title = title;
    question.description = description;

    await questionsRepository.save(question);

    return question;
  }
}

export default UpdateQuestionService;
