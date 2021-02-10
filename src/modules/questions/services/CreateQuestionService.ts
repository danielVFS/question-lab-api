import { getCustomRepository } from 'typeorm';

import Question from '../typeorm/entities/Question';
import QuestionsRepository from '../typeorm/repositories/QuestionsRepository';

interface IRequest {
  title: string;
  description: string;
}

class CreateQuestionService {
  public async execute({ title, description }: IRequest): Promise<Question> {
    const questionsRepository = getCustomRepository(QuestionsRepository);

    const question = questionsRepository.create({
      title,
      description,
    });

    await questionsRepository.save(question);

    return question;
  }
}

export default CreateQuestionService;
