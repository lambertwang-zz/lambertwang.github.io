import * as React from 'react';

// Local
import './Pullout.scss';

export interface IPulloutProps {
    title?: string;
}

export interface IPulloutState {
    something?: any;
}

export default class Pullout extends React.Component<IPulloutProps, IPulloutState> {
    constructor(props: IPulloutProps) {
        super(props);
    }

    public render() {
        const {
            title,
        } = this.props;
        return (
            <div className = {'pullout'}>
                <span>
                    { !!title && title }
                </span>
            </div>
        );
    }
}
