// Local
import { TOGGLE_PULLOUT } from './actionNames';

export default function togglePullout(title: string) {
    return {
        type: TOGGLE_PULLOUT,
        title,
    };
}
