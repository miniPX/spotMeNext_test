import React, { Component } from 'react'
import Link from "next/link"
import MainLayout from "../layouts/main"
//import axios from 'axios'
//import {parse, stringify} from 'flatted/esm';
import fetch from 'isomorphic-unfetch'

const apiUrl = "https://us-central1-noel-cloudstack.cloudfunctions.net/someEndpoint";

export default class extends Component {
    
    //where the main api calls happen
    static async getInitialProps() {
        const res = await fetch(apiUrl);
        const retFromCF = await res.json(); 
        return {retFromCF}; 
    }

    //put data into 
    componentWillMount() {
        this.setState({
            message: this.props.retFromCF.message
        })
    }

    render() {
        return (
            <MainLayout>
                <p>{this.state.message}</p>
                <Link href="/details"><a>Link to details</a></Link>
                {/* <Test name="Brian"/> */}
            </MainLayout>
        )
    }
  }

// const Test = params => (
//     <p>You too {params.name}</p>
// )

// const LandingBody = () => (
//     <div>
//         <MainLayout>
//             <p>Hello World!!!!</p>
//             <Link href="/details"><a>Link to details</a></Link>
//             <Test name="Brian"/>
//         </MainLayout>
//     </div>
// )

// export default LandingBody