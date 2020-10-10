import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrowsedNeosThunk } from "../../state/thunks";
import Browse from "./Browse";

class BrowseContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchBrowsedNeos(0);
    }

    render()
    {
        return (
            <Browse
                neos={this.props.neos}
            />
        );
    }
}

function mapState(state)
{
    return {
        neos: state.neo.neos
    };
}

function mapDispatch(dispatch)
{
    return {
        fetchBrowsedNeos: (page) => dispatch(fetchBrowsedNeosThunk(page))
    };
}

export default connect(mapState, mapDispatch)(BrowseContainer);