import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import "./Contact.css"



export default class Contact extends Component {
    render(){
        return(
            <div>
                 <Helmet>
                    <style>
                    {'body { background-color: #FF7474; }'}
                    </style>
                </Helmet>
                <h1>Contact Me</h1>
                <form className="contact-form">
                <div>
                <input placeholder="Name"></input>
                </div>
                <div>
                <input placeholder="Email"></input>
                </div>
                <div>
                <input placeholder="Phone"></input>
                </div>

                <button>
                    Submit
                </button>
                
                </form>
                {/* Contact */}
            </div>
        )
    }
}