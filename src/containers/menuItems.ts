// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';
import rootStore from '../root/rootStore';

// Actions
import toggleTheme from '../actions/toggleTheme';

// Local
import { default as Component, IMenuItemProps } from '../components/menuItem/MenuItem';

export interface IMenuItemStore {
    id: number;
    item: IMenuItemProps;
}

export const DEFAULT_MENU_ITEMS: IMenuItemStore[] = [
    {
        id: 0,
        item: {
            label: 'Theme',
            icon: 'invert_colors',
            onClick: () => {
                rootStore.dispatch(toggleTheme());
            },
        },
    },
];
