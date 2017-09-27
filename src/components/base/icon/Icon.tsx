// Dependencies
import * as React from 'react';

// Common
import BaseComponent, { IBaseProps } from '../BaseComponent';

// Utilities
import css from '../../../utilities/css';

// Local
// import './Label.scss';

export interface IIconProps extends IBaseProps {
    className?: string;
    icon?: string;
}

/**
 * Micro-component passthrough to span
 */
export class Icon extends BaseComponent<IIconProps, {}> {
    constructor(props: IIconProps) {
        super(props);
    }

    public render() {
        const {
            className,
            icon,
        } = this.props;

        return (
            <i className={css('material-icons', {
                    [className]: !!className,
                }) }
                style={ this.styleCss }>
                { icon }
            </i>
        );
    }
}
