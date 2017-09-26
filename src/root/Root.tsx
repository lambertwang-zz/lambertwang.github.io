// Dependencies
import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';

// Local
import './Root.scss';
import { IState as IRootState } from './rootReducer';

// Components and containers
import Header, { IHeaderProps } from '../components/header/Header';
import { FONT_NAMES, loadGoogleFont } from '../utilities/fontLoader';
import Pullout from '../containers/pullout';
import { IPulloutProps } from '../components/pullout/Pullout';
import { IMenuItemProps } from '../components/menuItem/MenuItem';

// Reducers
// import RootReducer from '../reducers/rootReducer';

// Actions
import togglePullout from '../actions/togglePullout';
import toggleTheme from '../actions/toggleTheme';

// Utilities
import css from '../utilities/css';
import { SIZE_BREAKPOINT, getSizeThreshold } from '../utilities/responsive';
import { THEME } from '../common/constants';

interface IProps {
    onTogglePullout?: () => void;
    onToggleTheme?: () => void;

    isPulloutVisible?: boolean;
    theme?: THEME;
}

interface IState {
    sizeThreshold: SIZE_BREAKPOINT;
}

class RootPresentation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            sizeThreshold: getSizeThreshold(),
        };

        this._onWindowResized = this._onWindowResized.bind(this);
    }

    public componentWillMount() {
        loadGoogleFont(FONT_NAMES.DROID_SANS);
        loadGoogleFont(FONT_NAMES.MATERIAL_ICONS);
    }

    public componentDidMount() {
        window.addEventListener('resize', this._onWindowResized);
    }

    public render() {
        const {
            onTogglePullout,
            onToggleTheme,
            theme,
            isPulloutVisible,
        } = this.props;

        const {
            sizeThreshold,
        } = this.state;

        const headerProps: IHeaderProps = {
            title: 'Hello, world!',
            leftItems: [
                {
                    // label: 'Menu',
                    icon: 'menu',
                    onClick: onTogglePullout,
                },
            ],
        };

        const pulloutProps: IPulloutProps = {
            items: [
                {
                    onClick: onToggleTheme,
                },
            ],
        };

        return (
            <div
                className={ css('root', {
                    [THEME[theme]]: true,
                 }) }>
                <div className={ css('content', {
                        [SIZE_BREAKPOINT[sizeThreshold]]: true,
                    }) }>
                    <Header { ...headerProps } />
                    <Pullout />
                </div>
            </div>
        );
    }

    private _onWindowResized() {
        this.setState({ sizeThreshold: getSizeThreshold() });
    }
}

function mapStateToProps(state: IRootState, ownProps: any): IProps {
    return {
        theme: state.root.theme,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IProps {
    return {
        onTogglePullout: () => {
            dispatch(togglePullout('Did this change?'));
        },
        onToggleTheme: () => {
            dispatch(toggleTheme());
        },
    };
}

const Root = connect(mapStateToProps, mapDispatchToProps)(RootPresentation);

export default Root;
