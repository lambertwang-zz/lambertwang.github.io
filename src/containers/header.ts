// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Local
import { default as Component, IHeaderProps } from '../components/header/Header';

function mapStateToProps(state: IRootState, ownProps: any): IHeaderProps {
    return {
        title: state.header.title,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IHeaderProps {
    return {
    };
}

const Header = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Header;
