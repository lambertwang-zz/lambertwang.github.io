// Dependencies
import { connect } from 'react-redux';

// Root
import { IRootState } from '../root/rootReducer';

// Local
import { default as Component, IPulloutProps } from '../components/pullout/Pullout';

function mapStateToProps(state: IRootState, ownProps: any): IPulloutProps {
    console.log('Mapping pullout state');
    return {
        title: state.pullout.title,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IPulloutProps {
    return {

    };
}

const Pullout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Pullout;
