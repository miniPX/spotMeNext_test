/** @jsx jsx */
import Header from "../../components/mainHeader/index"
import Footer from "../../components/mainFooter/index"
import React, { Component } from 'react'
import * as Style from "./style"
import {jsx,css} from '@emotion/core'

export default class extends Component {

    //where the main api calls happen
    static async getInitialProps(props) {
        const children = props.children;
        return {children}; 
    }

    //{ children }

    //put data into 
    componentWillMount() {
        this.setState({
            children: this.props.children
        })
    }

    render() { 
        const children = this.state.children;
        const nextThing = this.state.string;  
        return (
            <div>
                <Header />
                    {children}
                <Footer />
            </div>
        )
    }
}