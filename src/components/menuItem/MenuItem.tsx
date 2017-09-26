// Dependencies
import * as React from 'react';

// Utilities
import css from '../../utilities/css';

// Local
import './MenuItem.scss';

export interface IMenuItemProps {
    label?: string;
    icon?: string;
    onClick?: () => void;
}

export default class MenuItem extends React.Component<IMenuItemProps, {}> {
    constructor(props: IMenuItemProps) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    public render() {
        const {
            label,
            icon,
        } = this.props;

        return (
            <div className={ css('menuItem', {
                withLabel: !!label,
            }) }
                onClick={ this._onClick }>
                { !!icon && (
                    <i className='material-icons'>{ icon }</i>
                )}
                <span>
                    { !!label && label}
                </span>
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
