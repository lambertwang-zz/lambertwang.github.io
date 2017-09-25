// Dependencies
import { connect } from 'react-redux';

// Root
import { IRootState } from '../root/rootReducer';

// Local
import { default as Component, IHeaderProps } from '../components/header/Header';

function mapStateToProps(state: IRootState, ownProps: any): IHeaderProps {
    return {
        title: 'Did it work?',
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IHeaderProps {
    return {
        title: 'Probably not',
    };
}

// const Header = connect(mapStateToProps, mapDispatchToProps)(Component);
const Header = connect(null, mapDispatchToProps)(Component);

export default Header;
