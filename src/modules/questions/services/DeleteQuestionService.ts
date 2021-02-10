import { getCustomRepository } from 'typeorm';

import ErrorHandler from '@shared/errors/ErrorHandler';

import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

interface IRequest {
  id: string;
}

class DeleteQuestionService {
  public async execute({ id }: IRequest): Promise<void> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = await questionsRepository.findOne(id);

    if (!question) {
      throw new ErrorHandler('Question not found!');
    }

    await questionsRepository.remove(question);
  }
}

export default DeleteQuestionService;
