// Dependencies
import * as React from 'react';

// Common
import BaseComponent, { IBaseProps }from '../BaseComponent';

// Utilities
import css from '../../../utilities/css';

// Local
import './Label.scss';

export interface ILabelProps extends IBaseProps {
    className?: string;
    label?: string;
}

/**
 * Micro-component passthrough to span
 */
export class Label extends BaseComponent<ILabelProps, {}> {
    constructor(props: ILabelProps) {
        super(props);
    }

    public render() {
        const {
            className,
            label,
        } = this.props;

        return (
            <div className={ css('label-container', {
                    [className]: !!className,
                }) }
                style={ this.styleCss }>
                <span className={ 'label' }>
                    { label }
                </span>
            </div>
        );
    }
}
