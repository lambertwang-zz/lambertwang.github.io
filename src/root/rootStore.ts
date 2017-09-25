// Dependencies
import { Store, createStore } from 'redux';

// Local
import { IRootState, reducer as rootReducer } from './rootReducer';

const rootStore: Store<IRootState> = createStore(rootReducer);

export default rootStore;
