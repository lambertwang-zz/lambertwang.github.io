// Common
import { THEME } from '../common/constants';

// Local
import { SET_THEME } from './actionNames';

export default function toggleTheme(theme: THEME) {
    return {
        type: SET_THEME,
        theme,
    };
}
