import { postCreateStoreModule } from './create/post-create';

export const postStoreModule = {
  namespace: true,

  modules: {
    create: postCreateStoreModule,
  },
};
