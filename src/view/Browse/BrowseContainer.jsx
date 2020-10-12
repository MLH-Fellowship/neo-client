import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrowsedNeosThunk, fetchBrowsedNeosReverseThunk } from "../../state/thunks";
import Browse from "./Browse";

class BrowseContainer extends Component
{
    componentDidMount()
    {
        this.props.fetchBrowsedNeos(0);
    }

    handleScroll = (event) =>
    {
        let element = event.target;

        if(element.scrollHeight - element.scrollTop === element.clientHeight)
        {
            if(this.props.page.number === this.props.page.total_pages) this.props.fetchBrowsedNeos(0);
            else this.props.fetchBrowsedNeos(this.props.page.number + 1);
        }
        else if(element.scrollTop === 0)
        {
            if(this.props.page.number === 0) this.props.fetchBrowsedNeosReverse(this.props.page.total_pages);
            else this.props.fetchBrowsedNeosReverse(this.props.page.number - 1);
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
        neos: state.neo.neos,
        page: state.neo.page
    };
}

function mapDispatch(dispatch)
{
    return {
        fetchBrowsedNeos: (page) => dispatch(fetchBrowsedNeosThunk(page)),
        fetchBrowsedNeosReverse: (page) => dispatch(fetchBrowsedNeosReverseThunk(page))
    };
}

export default connect(mapState, mapDispatch)(BrowseContainer);