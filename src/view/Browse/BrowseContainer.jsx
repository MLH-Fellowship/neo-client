import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrowsedNeosThunk } from "../../state/thunks";
import Browse from "./Browse";

class BrowseContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchBrowsedNeos(0);
        this.setState({ currentPage: 0 });
    }

    handleScroll = (event) =>
    {
        let element = event.target;

        if(element.scrollHeight - element.scrollTop === element.clientHeight)
        {
            this.setState({ currentPage: this.state.currentPage + 1 })
            this.props.fetchBrowsedNeos(this.state.currentPage);
        }
    }

    render()
    {
        return (
            <div onScroll={this.handleScroll}>
                <Browse
                    neos={this.props.neos}
                />
            </div>
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