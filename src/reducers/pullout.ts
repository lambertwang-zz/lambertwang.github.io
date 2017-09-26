// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_PULLOUT, CLOSE_PULLOUT } from '../actions/actionNames';

// Components
import { IMenuItemProps } from '../components/menuItem/MenuItem';

export interface IState {
    title: string;
    items: IMenuItemProps[];
    isVisible: boolean;
}

export const reducer = combineReducers<IState>({
    title: (state = 'Default title', action) => {
        const {
            type,
            title,
        } = action;
        switch (type) {
            case TOGGLE_PULLOUT:
                return title;
            default: return state;
        }
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
