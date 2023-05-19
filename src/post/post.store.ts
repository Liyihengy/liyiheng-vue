import { Module } from 'vuex';
import { PostCreateState, postCreateStoreModule } from './create/post-create';
import { RootState } from '@/app/app.store';

export interface PostStoreState {
  create: PostCreateState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};
