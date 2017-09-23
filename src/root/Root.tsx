import * as React from 'react';

// Local
import './Root.scss';

// Components
import Header from '../components/header/Header';
import { FONT_NAMES, loadFont } from '../utilities/fontLoader';

interface IProps {
    something?: any;
}

interface IState {
    theme: string;
}

export default class Root extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { theme: 'light' };
        this._toggleTheme = this._toggleTheme.bind(this);
    }

    public componentWillMount() {
        loadFont(FONT_NAMES.DROID_SANS);
    }

    public render() {
        const { theme } = this.state;
        const headerProps = {
            title: 'Hello, world!',
        };

        return (
            <div
                className={ theme }
                onClick={ this._toggleTheme } >
                <Header { ...headerProps } />
                Hello, world!
            </div>
        );
    }

    private _toggleTheme() {
        if (this.state.theme === 'dark') {
            this.setState({ theme: 'light' });
        } else {
            this.setState({ theme: 'dark' });
        }
        console.log(this.state.theme);
    }

}
