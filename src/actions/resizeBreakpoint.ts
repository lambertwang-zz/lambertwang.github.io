// Utilities
import { SIZE_BREAKPOINT } from '../utilities/responsive';

// Local
import { RESIZE_BREAKPOINT } from './actionNames';

export default function resizeBreakpoint(breakpoint: SIZE_BREAKPOINT) {
    return {
        type: RESIZE_BREAKPOINT,
        breakpoint: SIZE_BREAKPOINT,
    };
}
