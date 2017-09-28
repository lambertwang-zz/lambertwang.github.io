// Dependencies
import { connect } from 'react-redux';

// Actions
import showThing from '../actions/showThing';

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
        onItemClicked: (id: string) => {
            dispatch(showThing(id));
        },
    };
}

const ThingList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ThingList;
