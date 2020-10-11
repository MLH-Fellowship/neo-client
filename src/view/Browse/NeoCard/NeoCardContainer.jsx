import React, { Component } from "react";
import { connect } from "react-redux";

import { selectNeoCard } from "../../../state";
import NeoCard from "./NeoCard";

class NeoCardContainer extends Component
{
    handleClick = () =>
    {
        this.props.selectNeoCard(this.props.details);
    }

    render()
    {
        return (
            <NeoCard 
                key={this.props.key}
                details={this.props.details}
                selected={this.props.selected}
                handleClick={this.handleClick}
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

function mapDispatch(dispatch)
{
    return {
        selectNeoCard: (neo) => dispatch(selectNeoCard(neo))
    };
}

export default connect(mapState, mapDispatch)(NeoCardContainer);