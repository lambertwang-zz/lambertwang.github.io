// Dependencies
import { combineReducers } from 'redux';

// Actions
import { RECEIVE_THING_LIST } from '../actions/actionNames';

// Datasources
import { IBggThing } from '../datasources/bgg/IBggApi';

export interface IState {
    title: string;
    things: IBggThing[];
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
    things: (
        state = [
        ],
        action) => {
        const {
            type,
            things,
        } = action;

        switch (type) {
            case RECEIVE_THING_LIST:
                return things;
            default: return state;
        }
    },
});
