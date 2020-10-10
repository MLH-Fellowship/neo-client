import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrowsedNeosThunk } from "../../state/thunks";
import Browse from "./Browse";

class BrowseContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchBrowsedNeos(0);
        console.log("in componentDidMount");
    }

    render()
    {
        console.log("in render");
        return (
            <Browse
                neos={this.props.neos}
            />
        );
    }
}

function mapState(state)
{
    console.log("in mapState");
    return {
        neos: state.neo.neos
    };
}

function mapDispatch(dispatch)
{
    console.log("in mapDispatch");
    return {
        fetchBrowsedNeos: (page) => dispatch(fetchBrowsedNeosThunk(page))
    };
}

export default connect(mapState, mapDispatch)(BrowseContainer);