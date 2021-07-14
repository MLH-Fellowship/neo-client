import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchBrowsedNeosThunk, fetchBrowsedNeosReverseThunk } from "../../state/thunks";
import Browse from "./Browse";

class BrowseContainer extends Component
{
    componentDidMount() {
        this.props.fetchBrowsedNeos(0);
    }

    handleScroll = (event) =>
    {
        let element = event.target;

        // Scrolling to bottom
        if(element.scrollHeight - element.scrollTop === element.clientHeight)
        {
            if(this.props.bottomPage.number === this.props.page.total_pages) this.props.fetchBrowsedNeos(0);
            else this.props.fetchBrowsedNeos(this.props.bottomPage.number + 1);
        }
        // Scrolling to top
        else if(element.scrollTop === 1)
        {
            if(this.props.page.number === 0 || this.props.topPage.number === undefined) this.props.fetchBrowsedNeosReverse(this.props.page.total_pages - 1);
            else this.props.fetchBrowsedNeosReverse(this.props.topPage.number - 1);
        }
    }

    render()
    {
        while (!this.props.neos.length) {
            if (this.interval) {
                clearInterval(this.interval);
            }
            this.interval = setInterval(() => {
                this.props.fetchBrowsedNeos(0)
            }, 5000)
        }

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
        topPage: state.neo.topPage,
        bottomPage: state.neo.bottomPage,
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