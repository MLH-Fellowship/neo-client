import React, { Component } from "react";
import { connect } from "react-redux";

import OrbitalData from "./OrbitalData";

class OrbitalDataContainer extends Component
{
    render()
    {
        return (
            <OrbitalData
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

export default connect(mapState, null)(OrbitalDataContainer);