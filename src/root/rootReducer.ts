// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_THEME } from '../actions/actionNames';

// Reducers
import { reducer as pullout, IState as PulloutState } from '../reducers/pullout';
import { reducer as header, IState as HeaderState } from '../reducers/header';
import { reducer as menuItems, IState as MenuItemState } from '../reducers/menuItems';

// Utilities
import { THEME } from '../common/constants';

interface IRootState {
    theme: THEME;
}

export interface IState {
    header: HeaderState;
    menuItems: MenuItemState;
    pullout: PulloutState;
    root: IRootState;
}

export const reducer = combineReducers<IState>({
    header,
    menuItems,
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
