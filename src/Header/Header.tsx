import React from 'react'
import './Header.css'

export default class Header extends React.Component {    
    email: string = "martin.lavie.pro@gmail.com";

    render = (): JSX.Element => {
        return <div className="header">
            <h1> Hello World ! My name is Martin. </h1>
            <h2> This github repo is a work about react and typescript </h2>
            <p> For any question or suggestion, please contact me :) <a href="{this.email}"> {this.email} </a> </p>
        </div>
    }
}