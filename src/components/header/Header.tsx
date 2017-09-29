// Dependencies
import * as React from 'react';

// Common
import { FONT_SIZE } from '../../common/constants';

// Components
import MenuItem, { IMenuItemProps } from '../menuItem/MenuItem';
import Label from '../label/Label';

// Utilities
import css from '../../utilities/css';

// Local
import './Header.scss';

export interface IHeaderProps {
    title?: string;
    leftItems?: IMenuItemProps[];
    rightItems?: IMenuItemProps[];
}

export interface IHeaderState {
    fullWidth?: boolean;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);

        this._updateScrollPosition = this._updateScrollPosition.bind(this);
    }

    public componentWillMount() {
        this.setState({ fullWidth: false });
    }

    public componentDidMount() {
        window.addEventListener('scroll', this._updateScrollPosition, true);
    }

    public render() {
        const {
            title,
            leftItems,
            rightItems,
        } = this.props;

        const {
            fullWidth,
        } = this.state;

        const titleProps = {
            className: 'header-title',
            label: title,
            fontSize: FONT_SIZE.massive,
        };

        return (
            <div className = { css('header', {
                    highlight: true,
                    fullWidth,
                }) }
                ref='self'>
                <div className={ 'header-left' }>
                    { !!leftItems && leftItems.map(this._renderSideItem) }
                </div>
                <Label { ...titleProps } />
                <div className={ 'header-right' }>
                    { !!rightItems && rightItems.map(this._renderSideItem) }
                </div>
            </div>
        );
    }

    private _renderSideItem(item: IMenuItemProps, index: number) {
        const itemForRender = item;
        itemForRender.label = '';
        itemForRender.fontSize = FONT_SIZE.massive;
        // itemForRender.style = this.style;

        return (
            <MenuItem { ...itemForRender }
                key={ index } />
        );
    }

    private _updateScrollPosition() {
        this.setState({ fullWidth: document.documentElement.getElementsByClassName('root')[0].scrollTop > 32 });
    }
}
