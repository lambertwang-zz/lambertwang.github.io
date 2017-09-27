// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Local
import { default as Component, IThingListProps } from '../components/thingList/ThingList';

function mapStateToProps(state: IRootState, ownProps: any): IThingListProps {
    const {
        content,
    } = state;

    return {
        items: content.things,
        rowHeight: '80px',
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IThingListProps {
    return {
    };
}

const ThingList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ThingList;
