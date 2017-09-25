// Dependencies
import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';

// Local
import './Root.scss';
import { IRootState } from './rootReducer';

// Components and containers
import Header, { IHeaderProps } from '../components/header/Header';
import { FONT_NAMES, loadFont } from '../utilities/fontLoader';
import Pullout from '../containers/pullout';

// Reducers
// import RootReducer from '../reducers/rootReducer';

// Actions
import togglePullout from '../actions/togglePullout';

// Utilities
import css from '../utilities/css';
import { SIZE_BREAKPOINT, getSizeThreshold } from '../utilities/responsive';

interface IProps {
    onTogglePullout?: () => void;
    isPulloutVisible?: boolean;
}

interface IState {
    theme: string;
    sizeThreshold: SIZE_BREAKPOINT;
}

class RootPresentation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            theme: 'dark',
            sizeThreshold: getSizeThreshold(),
        };

        this._toggleTheme = this._toggleTheme.bind(this);
        this._onWindowResized = this._onWindowResized.bind(this);
    }

    public componentWillMount() {
        loadFont(FONT_NAMES.DROID_SANS);
    }

    public componentDidMount() {
        window.addEventListener('resize', this._onWindowResized);
    }

    public render() {
        const {
            onTogglePullout,
            isPulloutVisible,
        } = this.props;

        const {
            theme,
            sizeThreshold,
        } = this.state;

        const headerProps: IHeaderProps = {
            title: 'Hello, world!',
            leftItems: [
                {
                    onClick: onTogglePullout,
                    label: 'H',
                },
            ],
        };

        return (
            <div
                className={ css('root', {
                    [theme]: true,
                 }) }
                onClick={ this._toggleTheme } >
                <div className={ css('content', {
                        [SIZE_BREAKPOINT[sizeThreshold]]: true,
                    }) }>
                    <Header { ...headerProps } />
                    <Pullout />
                </div>
            </div>
        );
    }

    private _toggleTheme() {
        if (this.state.theme === 'dark') {
            this.setState({ theme: 'light' });
        } else {
            this.setState({ theme: 'dark' });
        }
    }

    private _onWindowResized() {
        this.setState({ sizeThreshold: getSizeThreshold() });
    }
}

function mapStateToProps(state: IRootState, ownProps: any): IProps {
    return {
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IProps {
    return {
        onTogglePullout: () => {
            dispatch(togglePullout('Did this change?'));
        },
    };
}

const Root = connect(null, mapDispatchToProps)(RootPresentation);

export default Root;
