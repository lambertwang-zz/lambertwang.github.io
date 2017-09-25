// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_PULLOUT } from '../actions/togglePullout';

export interface IState {
    title: string;
}

// export const reducer = combineReducers<IState>({
//     isExpanded: (state = false, action) => {
//         const {
//             type,
//             title,
//         } = action;
//         console.log('action');
//         switch (type) {
//             case TOGGLE_PULLOUT:
//                 return {
//                     title,
//                 };
//             default: return state;
//         }
//     },
// });

export const reducer = combineReducers<IState>({
    title: (state = 'Default title', action) => {
        const {
            type,
            title,
        } = action;
        console.log('action');
        switch (type) {
            case TOGGLE_PULLOUT:
                return title;
            default: return 'Default title';
        }
    },
});
