// Dependencies
import * as React from 'react';

// Components
import Image from '../image/Image';
import List, { IListProps } from '../list/List';

// utilities
import css from '../../utilities/css';

// Local
import './ThingList.scss';

export interface IThingListProps extends IListProps {
    rowHeight?: string;
}

export default class ThingList extends React.Component<IThingListProps, {}> {
    constructor(props: IThingListProps) {
        super(props);

        this._onRenderThing.bind(this);
    }

    public render() {
        const props = {
            ...this.props,
        };

        props.onRenderItem = this._onRenderThing.bind(this);

        return (
            <List { ...props } />
        );
    }

    private _onRenderThing(thing: any, index: number): JSX.Element {
        const {
            rowHeight,
        } = this.props;

        const {
            id,
            rank,
            thumbnail,
            name,
            yearPublished,
        } = thing;

        const imageProps = {
            src: thumbnail,
            height: rowHeight,
            width: rowHeight,
        };

        return (
            <div className={ css('bggThing', {
                even: !!(index % 2),
                }) }
                key={ id }
                style={ { height: rowHeight } }>
                <Image { ...imageProps } />
                <div className={ 'bggThing-content' }>
                    <span className={ css('bggThing-title', {
                        marquee: true,
                    }) }>
                        { name }
                    </span>
                    <span className={ 'bggThing-subtitle' }>
                        { 'Rank: ' + rank }
                    </span>
                    <span className={ 'bggThing-subtitle' }>
                        { 'Year Published: ' + yearPublished }
                    </span>
                </div>
            </div>
        );
    }
}
