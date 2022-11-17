import { appSchema } from '@nozbe/watermelondb';
import { postSchema } from './postSchema';
import { userSchema } from './userSchema';

export const schemas = appSchema({
  version: 1,
  tables: [userSchema, postSchema],
});
