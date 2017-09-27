// Dependencies
import * as React from 'react';

// Components
import BaseComponent, { IBaseProps } from '../base/BaseComponent';
import { Icon, Label } from '../base/components';

// Utilities
import css from '../../utilities/css';

// Local
import './MenuItem.scss';

export interface IMenuItemProps extends IBaseProps {
    label?: string;
    icon?: string;
    onClick?: () => void;
}

export default class MenuItem extends BaseComponent<IMenuItemProps, {}> {
    constructor(props: IMenuItemProps) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    public render() {
        const {
            label,
            icon,
            onClick,
        } = this.props;

        const iconProps = {
            icon,
            style: this.style,
        };

        const labelProps = {
            label,
            style: this.style,
        };

        return (
            <div className={ css('menuItem', {
                withLabel: !!label,
                interactive: !!onClick,
            }) }
                onClick={ this._onClick }>
                { !!icon && (
                    <Icon { ...iconProps } />
                )}
                { !!label && (
                    <Label { ...labelProps } />
                )}
            </div>
        );
    }

    private _onClick(ev: React.MouseEvent<HTMLElement>) {
        const {
            onClick,
        } = this.props;

        if (onClick) {
            ev.stopPropagation();
            ev.preventDefault();
            onClick();
        }
    }
}
