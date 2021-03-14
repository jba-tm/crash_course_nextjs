import React from "react"
import Router from "next/router"
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";

export default class About extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        Router.push('/')
    }
    render() {
        return (
            <MainLayout title="About page">
                <h1>
                    About page
                </h1>
                <button onClick={this.handleClick}>
                    Go back to home
                </button>
                <button onClick={()=>Router.push('/posts')}>
                    Go to posts
                </button>
            </MainLayout>
        );
    }
}