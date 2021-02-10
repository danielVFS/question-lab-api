import { getCustomRepository } from 'typeorm';

import Question from '../typeorm/entities/Question';
import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

class ListQuestionsService {
  public async execute(): Promise<Question[]> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const questions = await questionsRepository.find();

    return questions;
  }
}

export default ListQuestionsService;
