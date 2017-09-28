// Dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import resizeBreakpoint from '../actions/resizeBreakpoint';

// Local
import './Root.scss';
import { IState as IRootState } from './rootReducer';

// Components and containers
import Label from '../components/label/Label';
import Loading from '../components/loading/Loading';
import Header from '../containers/header';
import ContentList from '../containers/contentList';
import ContentThing from '../containers/contentThing';
import Pullout from '../containers/pullout';

// Utilities
import { CONTENT_LAYOUT, THEME } from '../common/constants';
import css from '../utilities/css';
import { SIZE_BREAKPOINT, getSizeThreshold } from '../utilities/responsive';
import { FONT_NAMES, loadGoogleFont } from '../utilities/fontLoader';

interface IProps {
    isPulloutVisible?: boolean;
    layout?: CONTENT_LAYOUT;
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
    }

    public render() {
        const {
            layout,
            theme,
        } = this.props;

        const {
            sizeThreshold,
        } = this.state;

        let content: JSX.Element = ( <div /> );

        switch (layout) {
            case CONTENT_LAYOUT.empty:
                content = (
                    <Label label={ 'Welcome!' } />
                );
                break;
            case CONTENT_LAYOUT.loading:
                content = ( <Loading /> );
                break;
            case CONTENT_LAYOUT.list:
                content = ( <ContentList /> );
                break;
            case CONTENT_LAYOUT.thing:
                content = ( <ContentThing /> );
                break;
            default: break;
        }

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
                    <div className={ 'content-main' }>
                        { content }
                    </div>
                    <Pullout />
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
        layout: state.content.layout,
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
