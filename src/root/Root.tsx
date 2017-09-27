// Dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import resizeBreakpoint from '../actions/resizeBreakpoint';
import requestHotList from '../actions/requestHotList';

// Local
import './Root.scss';
import { IState as IRootState } from './rootReducer';
import rootStore from './rootStore';

// Components and containers
import Header from '../containers/header';
import ContentList from '../containers/contentList';
import Pullout from '../containers/pullout';

// Utilities
import { THEME } from '../common/constants';
import css from '../utilities/css';
import { SIZE_BREAKPOINT, getSizeThreshold } from '../utilities/responsive';
import { FONT_NAMES, loadGoogleFont } from '../utilities/fontLoader';

interface IProps {
    isPulloutVisible?: boolean;
    theme?: THEME;
    onResizeBreakpoint?: (breakpoint: SIZE_BREAKPOINT) => void;
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

        // Load hot items on page load
        rootStore.dispatch(requestHotList());
    }

    public render() {
        const {
            theme,
        } = this.props;

        const {
            sizeThreshold,
        } = this.state;

        return (
            <div
                className={ css('root', {
                    [THEME[theme].toLowerCase()]: true,
                 }) }>
                <div className={ css('content', {
                        [SIZE_BREAKPOINT[sizeThreshold]]: true,
                        primary: true,
                    }) }>
                    <Header />
                    <Pullout />
                    <div className={ 'content-main' }>
                        <ContentList />
                    </div>
                </div>
            </div>
        );
    }

    private _onWindowResized() {
        const newSize = getSizeThreshold();
        if (newSize !== this.state.sizeThreshold) {
            this.setState({ sizeThreshold: getSizeThreshold() });
        }
    }
}

function mapStateToProps(state: IRootState, ownProps: any): IProps {
    return {
        theme: state.root.theme,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IProps {
    return {
        onResizeBreakpoint: (breakpoint: SIZE_BREAKPOINT) => { dispatch(resizeBreakpoint(breakpoint)); },
    };
}

const Root = connect(mapStateToProps, mapDispatchToProps)(RootPresentation);

export default Root;
