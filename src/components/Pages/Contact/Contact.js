import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./Contact.css"
import ContactTextbox from '../../ContactTextbox/ContactTextbox';



export default class Contact extends Component {

    state = {
        popoverVisible: false
    }

    componentDidMount(){
        this.setState({
            popoverVisible: false
        })
    }

    PopOver = e => {
        e.preventDefault();
        this.setState({
            popoverVisible: !this.state.popoverVisible
        })
    }
    render(){
        console.log(this.state.popoverVisible);
        
        return(
            <div>
                 <Helmet>
                    <style>
                    {'body { background-color: #FF7474; }'}
                    </style>
                </Helmet>
                <h1>Contact Me</h1>
                <form className="contact-form">
                <ContactTextbox placeholder="Name"></ContactTextbox>
                <ContactTextbox placeholder="Email"></ContactTextbox>
                <ContactTextbox placeholder="Phone"></ContactTextbox>

                {/* <div>
                <input onClick={} placeholder="Name"></input>
                </div>
                <div>
                <input placeholder="Email"></input>
                </div>
                <div>
                <input placeholder="Phone"></input>
                </div> */}

                <button onClick={this.PopOver}>
                    Submit
                </button>
                
                </form>

                <div className={`popover-box ${this.state.popoverVisible ? "": "hide-popover"}`}>
                    <h4>Thank you for your inquiry!</h4>
                    <h5>I will get back to you as soon as I can!</h5>
                    <button onClick={this.PopOver}>Exit</button>
                </div>
                {/* Contact */}
            </div>
        )
    }
}