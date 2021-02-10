import { EntityRepository, Repository } from 'typeorm';

import Question from '../entities/Question';

@EntityRepository(Question)
export default class QuestionsRepository extends Repository<Question> {
  async findById(id: string): Promise<Question | undefined> {
    const question = await this.findOne(id);

    return question;
  }
}
