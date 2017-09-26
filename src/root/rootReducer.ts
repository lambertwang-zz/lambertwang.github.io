// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_THEME } from '../actions/actionNames';

// Components
import { reducer as pullout, IState as PulloutState } from '../reducers/pullout';

// Utilities
import { THEME } from '../common/constants';

interface IRootState {
    theme: THEME;
}

export interface IState {
    pullout: PulloutState;
    root: IRootState;
}

export const reducer = combineReducers<IState>({
    pullout,
    root: (state: IRootState = { theme: THEME.dark }, action) => {
        const {
            type,
        } = action;

        switch (type) {
            case TOGGLE_THEME:
                return { theme: state.theme * -1 + 1};
            default: return state;
        }
    },
});
