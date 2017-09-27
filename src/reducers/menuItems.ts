// Dependencies
import { combineReducers } from 'redux';

// Actions
import { SET_THEME } from '../actions/actionNames';

// Components and containers
import { IMenuItemProps } from '../components/menuItem/MenuItem';
import { DEFAULT_MENU_ITEMS, MENU_ITEM_ID } from '../containers/menuItems';

// Common
import { THEME } from '../common/constants';

// Root
import rootStore from '../root/rootStore';

export interface IState {
    [key: number]: IMenuItemProps;
}

export const reducer = combineReducers({
    [MENU_ITEM_ID.showHotItems]: (state = DEFAULT_MENU_ITEMS[MENU_ITEM_ID.showHotItems], action) => {
        return state;
    },
    [MENU_ITEM_ID.togglePullout]: (state = DEFAULT_MENU_ITEMS[MENU_ITEM_ID.togglePullout], action) => {
        return state;
    },
    [MENU_ITEM_ID.toggleTheme]: (state = DEFAULT_MENU_ITEMS[MENU_ITEM_ID.toggleTheme], action) => {
        const {
            type,
        } = action;
        switch (type) {
            case SET_THEME:
                state.label = THEME[rootStore.getState().root.theme] + ' Theme';
                return state;
            default: return state;
        }
    },
});
