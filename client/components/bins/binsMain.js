import React, { Component } from 'react'

class BinsMain extends Component {
    //have to use match.params now in react router v4
    //console.log(this.props.match.params.binId);
    render() {
        console.log(this.props.match.params.binId);
        return(
            <div>Bins Main</div>
        );
    }
}

export default BinsMain;