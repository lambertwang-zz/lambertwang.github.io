// Dependencies
import { connect } from 'react-redux';

// Root
import { IRootState } from '../root/rootReducer';

// Actions
import closePullout from '../actions/closePullout';

// Local
import { default as Component, IPulloutProps } from '../components/pullout/Pullout';

function mapStateToProps(state: IRootState, ownProps: any): IPulloutProps {
    console.log('Mapping pullout state');
    return {
        title: state.pullout.title,
        isVisible: state.pullout.isVisible,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IPulloutProps {
    return {
        onClose: () => { dispatch(closePullout()); },
    };
}

const Pullout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Pullout;
