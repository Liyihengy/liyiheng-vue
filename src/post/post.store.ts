import { Module } from 'vuex';
import { PostCreateState, postCreateStoreModule } from './create/post-create';
import { RootState } from '@/app/app.store';
import { postIndexStoreModule } from './index/post-index.store';

export interface PostItem {
  id: number;
  name: string;
  content: string;
}

export interface PostStoreState {
  create: PostCreateState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
    index: postIndexStoreModule,
  },
};
