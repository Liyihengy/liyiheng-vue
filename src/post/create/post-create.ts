import { RootState } from '@/app/app.store';
import { Module } from 'vuex';

export interface PostCreateState {
  loading: boolean;
}

export const postCreateStoreModule: Module<PostCreateState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
  } as PostCreateState,

  getters: {
    loading(state) {
      return state.loading;
    },
  },
};
