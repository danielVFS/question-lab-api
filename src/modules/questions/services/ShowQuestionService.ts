import { getCustomRepository } from 'typeorm';

import ErrorHandler from '@shared/errors/ErrorHandler';

import Question from '../typeorm/entities/Question';

import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

interface IRequest {
  id: string;
}

class ShowQuestionService {
  public async execute({ id }: IRequest): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findById(id);

    if (!question) {
      throw new ErrorHandler('Question not found!');
    }

    return question;
  }
}

export default ShowQuestionService;
