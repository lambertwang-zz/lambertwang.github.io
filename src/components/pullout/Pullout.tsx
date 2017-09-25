// Dependencies
import * as React from 'react';

// Local
import './Pullout.scss';

// Utilities
import css from '../../utilities/css';

export interface IPulloutProps {
    title?: string;
    isVisible?: boolean;
    onClose?: () => void;
}

export interface IPulloutState {
    something?: any;
}

export default class Pullout extends React.Component<IPulloutProps, IPulloutState> {
    constructor(props: IPulloutProps) {
        super(props);

        this._onClose = this._onClose.bind(this);
    }

    public render() {
        const {
            title,
            isVisible,
        } = this.props;

        return (
            <div className={ css('pullout', {
                isVisible,
                }) }
                onClick={ this._onClose }>
                <div className={ 'pullout-shade' } />
                <div className={ 'pullout-content' }>
                    <span>
                        { !!title && title }
                    </span>
                </div>
            </div>
        );
    }

    private _onClose(ev: React.MouseEvent<HTMLElement>) {
        const {
            onClose,
        } = this.props;

        if (onClose) {
            onClose();
        }

        ev.stopPropagation();
        ev.preventDefault();
    }
}
