import React, { Component } from "react";
import { connect } from "react-redux";

import CloseApproachData from "./CloseApproachData";

class CloseApproachDataContainer extends Component
{
    render()
    {
        return (
            <CloseApproachData
                selected={this.props.selected}
            />
        );
    }
}

function mapState(state)
{
    return {
        selected: state.neo_card.selected
    };
}

export default connect(mapState, null)(CloseApproachDataContainer);