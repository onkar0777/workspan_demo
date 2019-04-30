import { BaseEntity } from './base-entity';
import { Answer } from './answer';

export interface Question extends BaseEntity {
    Text: string; // html text of the question
    answers: Answer[];
}
