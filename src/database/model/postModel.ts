import {
  date,
  field,
  readonly,
  relation,
  text,
} from '@nozbe/watermelondb/decorators';

import { Model } from '@nozbe/watermelondb';

export class PostModel extends Model {
  static table = 'posts';

  @relation('users', 'user_id')
  user: any;

  @text('content')
  content!: string;

  @readonly
  @date('created_at')
  createdAt!: Date;
}
