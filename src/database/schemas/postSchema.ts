import { tableSchema } from '@nozbe/watermelondb';

export const postSchema = tableSchema({
  name: 'posts',
  columns: [{ name: 'content', type: 'string' }],
});
