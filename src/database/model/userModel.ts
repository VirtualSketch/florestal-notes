import { children, field, writer } from '@nozbe/watermelondb/decorators';

import { Associations } from '@nozbe/watermelondb/Model';
import { Model } from '@nozbe/watermelondb';
import { PostModel } from './postModel';

interface PostData {
  content: string;
  createdAt: Date;
}

export class UserModel extends Model {
  static table = 'users';
  public static associations: Associations = {
    posts: { type: 'has_many', foreignKey: 'user_id' },
  };

  @field('name')
  name!: string;

  @children('posts')
  posts: any;

  @writer async addPost(postData: PostData) {
    const newUser = await this.collections
      .get<PostModel>('posts')
      .create((post) => {
        post.user.set(this);
        post.content = postData.content;
        post.createdAt = postData.createdAt;
      });
    return newUser;
  }
}
