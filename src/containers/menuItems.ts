// Root
import rootStore from '../root/rootStore';

// Actions
import requestHotList from '../actions/requestHotList';
import setTheme from '../actions/setTheme';
import togglePullout from '../actions/togglePullout';
export enum MENU_ITEM_ID {
    toggleTheme,
    showHotItems,
    togglePullout,
}

export const DEFAULT_MENU_ITEMS = {
    [MENU_ITEM_ID.toggleTheme]: {
        label: 'Theme Toggle',
        icon: 'invert_colors',
        onClick: () => {
            rootStore.dispatch(setTheme((rootStore.getState().root.theme * -1) + 1));
        },
    },
    [MENU_ITEM_ID.showHotItems]: {
        label: 'Hot Items',
        icon: '',
        onClick: () => {
            rootStore.dispatch(requestHotList());
        },
    },
    [MENU_ITEM_ID.togglePullout]: {
        label: 'Menu',
        icon: 'menu',
        onClick: () => {
            rootStore.dispatch(togglePullout());
        },
    },
};
