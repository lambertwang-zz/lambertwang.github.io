// Dependencies
import { combineReducers } from 'redux';

// Components
import { reducer as pullout, IState as PulloutState } from '../reducers/pullout';

export interface IRootState {
    pullout: PulloutState;
}

export const reducer = combineReducers<IRootState>({
    pullout,
});
