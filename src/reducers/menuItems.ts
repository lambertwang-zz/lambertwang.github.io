// Dependencies
import { combineReducers } from 'redux';

// Components and containers
import { IMenuItemProps } from '../components/menuItem/MenuItem';
import { DEFAULT_MENU_ITEMS, IMenuItemStore } from '../containers/menuItems';

export interface IState {
    itemStore: IMenuItemStore[];
}

export const reducer = combineReducers<IState>({
    itemStore: (state = DEFAULT_MENU_ITEMS, action) => {
        const {
            type,
        } = action;

        switch (type) {
            default: return state;
        }
    },
});
