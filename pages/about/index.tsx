import React from "react"
import {MainLayout} from "../../components/MainLayout";
import axios from "axios";
import {IAbout} from "../../interfaces/iAbout";

export default class About extends React.Component<IAbout>{
    render() {
        return (
            <MainLayout title="IAbout page">
                <h1>
                    {this.props.about.title}
                </h1>
            </MainLayout>
        );
    }
}

export async function getStaticProps(){
    const response = await axios.get('http://localhost:4200/about')

    const about = response.data

    return {
        props: {
            about
        }
    }
}
