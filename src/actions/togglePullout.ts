export const TOGGLE_PULLOUT = 'TOGGLE_PULLOUT';

export default function togglePullout(title: string) {
    return {
        type: TOGGLE_PULLOUT,
        title,
    };
}
