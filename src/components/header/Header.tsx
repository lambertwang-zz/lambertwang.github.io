import * as React from 'react';

// Local
import './Header.scss';

interface IHeaderProps {
    title: string;

}

interface IHeaderState {

}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    public render() {
        const {
            title,
        } = this.props;
        return (
            <div
                className = {'header'}>
                <span>
                    { title }
                </span>
            </div>
        );
    }
}
