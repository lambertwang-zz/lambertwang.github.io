// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Actions
import closePullout from '../actions/closePullout';
import toggleTheme from '../actions/toggleTheme';

// Datasources
import BggApi from '../datasources/bgg/BggApi';

// Local
import { default as Component, IPulloutProps } from '../components/pullout/Pullout';

function mapStateToProps(state: IRootState, ownProps: any): IPulloutProps {
    const {
        menuItems,
        pullout,
    } = state;
    const allMenuItems = menuItems.itemStore;

    const pulloutItems = allMenuItems.filter((itemStore) => {
        return pullout.items.indexOf(itemStore.id) >= 0;
    }).map((itemStore) => itemStore.item);

    return {
        title: 'Menu',
        isVisible: pullout.isVisible,
        items: pulloutItems.concat([
            {
                label: 'Hot Items',
                onClick: () => {
                    BggApi.hot((request) => {
                        return;
                    });
                },
            },
        ]),
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IPulloutProps {
    return {
        onClose: () => { dispatch(closePullout()); },
    };
}

const Pullout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Pullout;
