import { BaseEntity } from './base-entity';
import { User } from './user';

export interface Answer extends BaseEntity {
    Answer: string; // Text of the answer
    created_by: User;
    created_at: string;
}
