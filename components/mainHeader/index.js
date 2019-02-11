/** @jsx jsx */
import React, { Component } from 'react'
import * as Style from "./style"
import {jsx,css} from '@emotion/core'

export default class extends Component {
    
    //where the main api calls happen
    // static async getInitialProps() {
    //     const res = await fetch(apiUrl);
    //     const retFromCF = await res.json(); 
    //     return {retFromCF}; 
    // }

    //put data into 
    // componentWillMount() {
    //     this.setState({
    //         message: this.props.retFromCF.message
    //     })
    // }

    // <div css={{
    //     backgroundColor: 'black'               
    //     }}> Something
    //     </div>

    render() {
        return (
            <Style.Container>
                
                This is the main header component<br />
                <Style.Button>some button</Style.Button>
            </Style.Container>
        )
    }
}