import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
    
    componentDidMount() {
        //render form and put in return div
        //render forms to that dom form
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }
    
    componentWillUnmount() {
        //find forms created and unmount
        Blaze.remove(this.view);
    }
    
    render() {
        return (
            <div ref="container">
                
            </div>
        );
    }
}

export default Accounts;