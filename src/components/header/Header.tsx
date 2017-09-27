// Dependencies
import * as React from 'react';

// Components
import MenuItem, { IMenuItemProps } from '../menuItem/MenuItem';

// Local
import './Header.scss';

export interface IHeaderProps {
    title?: string;
    leftItems?: IMenuItemProps[];
    rightItems?: IMenuItemProps[];
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
                <div className={ 'header-left' }>
                    { !!leftItems && leftItems.map(this._renderSideItem) }
                </div>
                <span className='header-title'>
                    { !!title && title }
                </span>
                <div className={ 'header-right' }>
                    { !!rightItems && rightItems.map(this._renderSideItem) }
                </div>
            </div>
        );
    }

    private _renderSideItem(item: IMenuItemProps, index: number) {
        const itemForRender = item;
        itemForRender.label = '';

        return (
            <MenuItem { ...itemForRender }
                key={ index } />
        );
    }
}
