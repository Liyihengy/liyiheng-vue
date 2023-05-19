import { PostStoreState, postStoreModule } from '@/post/post.store';
import { createStore } from 'vuex';

export interface RootState {
  appName: string;
  post: PostStoreState;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: '宁皓网',
  } as RootState,

  modules: {
    post: postStoreModule,
  },
});

/**
 * 默认导出
 */
export default store;
