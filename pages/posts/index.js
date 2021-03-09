import React from "react";
import Link from "next/link";
import Router from "next/router";
import Head from "next/head";
import {MainLayout} from "../../components/MainLayout";

export default class Posts extends React.Component{
    handleClick(e){
        Router.push('/')
    }

    render() {
        return (
            <MainLayout>
                <Head>
                    <title>Next title index hello</title>
                </Head>
                <h1>
                    Posts page
                </h1>

                <button onClick={this.handleClick}>
                    Go back to home
                </button>
                <button onClick={()=>Router.push('/about')}>
                    Go to about
                </button>
            </MainLayout>
            );
    }
}
