import * as React from 'react';

// Local
import './Header.scss';

export interface IHeaderItem {
    onClick?: () => void;
    label?: string;
}

export interface IHeaderProps {
    title?: string;
    leftItems?: IHeaderItem[];
    rightItems?: IHeaderItem[];
}

export interface IHeaderState {
    something?: any;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    public render() {
        const {
            title,
            leftItems,
            rightItems,
        } = this.props;
        return (
            <div className = {'header'}>
                { !!leftItems && leftItems.map(this._renderSideItem) }
                <span>
                    { !!title && title }
                </span>
            </div>
        );
    }

    private _renderSideItem(item: IHeaderItem) {
        const {
            onClick,
            label,
        } = item;

        const newOnClick = (ev: React.MouseEvent<HTMLElement>) => {
            if (onClick) {
                onClick();
            }
            ev.stopPropagation();
            ev.preventDefault();
        };

        return (
            <div className = {'sideItem'}
                onClick = { newOnClick }>
                { !!label && label }
            </div>
        );
    }
}
