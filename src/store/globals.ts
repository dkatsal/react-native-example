import {Store} from 'redux';

import {RootState} from './reducers';

interface Globals {
  store: Store<RootState> | null;
}

export const globals: Globals = {
  store: null,
};
