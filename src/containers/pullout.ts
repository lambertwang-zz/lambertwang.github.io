// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Actions
import closePullout from '../actions/closePullout';
import toggleTheme from '../actions/toggleTheme';

// Local
import { default as Component, IPulloutProps } from '../components/pullout/Pullout';

function mapStateToProps(state: IRootState, ownProps: any): IPulloutProps {
    return {
        title: state.pullout.title,
        isVisible: state.pullout.isVisible,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IPulloutProps {
    return {
        onClose: () => { dispatch(closePullout()); },
        items: [
            {
                label: 'Theme',
                icon: 'invert_colors',
                onClick: () => {
                    dispatch(toggleTheme());
                },
            },
        ],
    };
}

const Pullout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Pullout;
