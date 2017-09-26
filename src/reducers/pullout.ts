// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_PULLOUT, CLOSE_PULLOUT } from '../actions/actionNames';

// Components
import { IMenuItemProps } from '../components/menuItem/MenuItem';

export interface IState {
    items: number[];
    isVisible: boolean;
}

export const reducer = combineReducers<IState>({
    items: (state = [0], action) => {
        return state;
    },
    isVisible: (state = false, action) => {
        const {
            type,
        } = action;
        switch (type) {
            case TOGGLE_PULLOUT:
                return !state;
            case CLOSE_PULLOUT:
                return false;
            default: return state;
        }
    },
});
