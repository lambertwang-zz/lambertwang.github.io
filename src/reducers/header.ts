// Dependencies
import { combineReducers } from 'redux';

// Components
import { IMenuItemProps } from '../components/menuItem/MenuItem';

export interface IState {
    title: string;
    leftItems: number[];
}

export const reducer = combineReducers<IState>({
    title: (state = 'Bgg Api Viewer', action) => {
        const {
            type,
        } = action;

        switch (type) {
            default: return state;
        }
    },
    leftItems: (state = [], action) => {
        return state;
    },
});
